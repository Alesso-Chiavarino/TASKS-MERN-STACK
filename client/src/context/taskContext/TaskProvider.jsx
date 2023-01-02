import { useContext, useState } from "react";
import { getTasksRequest, removeTaskRequest, createTaskRequest, getTaskRequest, updateTaskRequest, toggleTaskRequest } from "../../api/task.api";
import {TaskContext} from './TaskContext'

export const useTask = () => {
    const context = useContext(TaskContext)
    if(!context) throw new Error("useTask must be used within a TaskProvider");
    return context;
}

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const result = await getTasksRequest();
        setTasks(result.data.data)
    }

    const handleDelete = async (id) => {
        try {
            const response = removeTaskRequest(id)
            console.log(response)
        } catch(error) {
            console.log(error)
        }
    }

    const handleCreate = async (task) => {
        try {
            const response = await createTaskRequest(task)
            console.log(response)
        } catch(error) {
            console.log(error)
        }
    }

    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id)
            // console.log(response.data.message[0])
            return response
        } catch(error) {
            console.log(error)
        }    
    }

    const handleUpdate = async (id, newFields) => {
        try {
            const response = await updateTaskRequest(id, newFields)
            console.log(response)
            return response;
        } catch(error) {
            console.log(error)
        }
    }

    const toggleTaskDone = async (id) => {
        
        try {
            const foundedTask = tasks.find(task => task.id === id)
            const response = await toggleTaskRequest(id, foundedTask.done === 0 ? true : false)
            console.log(response)
            setTasks(tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1 : 0 : task)) 

        } catch(error) {
            console.log(error)
        }

    }

  return (
    <TaskContext.Provider value={{ tasks, getTasks, handleDelete, handleCreate, getTask, handleUpdate, toggleTaskDone }} >
        {children}
    </TaskContext.Provider>
  )
}
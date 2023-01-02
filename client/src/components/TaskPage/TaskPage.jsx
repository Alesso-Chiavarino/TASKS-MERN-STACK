import './TaskPage.scss';
import { useEffect, useState } from 'react';
import Task from '../Task/Task';
import { useTask } from '../../context/taskContext/TaskProvider';
const TaskPage = () => {

    const {tasks, getTasks} = useTask()
    // console.log(res)

    // const [tasks, useTasks] = useState([])

    useEffect( () => {

        // getTasks()
        getTasks()
        
    }, [tasks])

    const renderMain = () => {

        if(!tasks) return <p>No tasks yet</p>

        return tasks.map(task => <Task key={task.id} task={task} />)
    }



  return (
    <div>
        <h1>TaskPage</h1>
        {renderMain()}


    </div>
  )
}

export default TaskPage;
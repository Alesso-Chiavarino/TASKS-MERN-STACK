import './TaskPage.scss';
import { useEffect, useState } from 'react';
import Task from '../Task/Task';
import { useTask } from '../../context/taskContext/TaskProvider';
const TaskPage = () => {

    const {tasks, getTasks} = useTask()

    useEffect( () => {

      getTasks();

    }, [tasks])

    const renderMain = () => {

        if(!tasks) return <p>No tasks yet</p>

        return tasks.map(task => <Task key={task.id} task={task} />)
    }



  return (
    <section className='task-page'>
        <h1 className='task-page__title'>TaskPage</h1>
        <div className="tasks-container">
          {renderMain()}
        </div>


    </section>
  )
}

export default TaskPage;
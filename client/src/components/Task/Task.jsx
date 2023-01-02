import './Task.scss';
import { useTask } from '../../context/taskContext/TaskProvider';
import { useNavigate } from 'react-router-dom'

export const Task = ({task}) => {

    const {handleDelete, toggleTaskDone} = useTask()
    const navigate = useNavigate()

    const handleDone = async () => {
        await toggleTaskDone(task.id)
    }

    return (
        <div className='task'>
            <div className='task-top-side'>
                <h2>{task.title}</h2>
                <span onClick ={() => handleDone(task.done)} >{task.done === 1 ? "✔️" : "❌"}</span>
            </div>
            <p>{task.description}</p>
            <div className='task-bottom-side'>
                <span>Date: {task.createAt}</span>
                <div className='task-btns'>
                    <button onClick={() => handleDelete(task.id)} className='del-btn' >Delete</button>
                    <button onClick ={() => navigate(`/edit/${task.id}`)} className='edit-btn' >Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Task;

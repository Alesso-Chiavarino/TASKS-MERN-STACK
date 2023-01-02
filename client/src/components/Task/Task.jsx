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
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done === 1 ? "✔️" : "❌"}</span>
            <span>{task.createAt}</span>
            <button onClick={() => handleDelete(task.id)} >Delete</button>
            <button onClick ={() => navigate(`/edit/${task.id}`)} >Edit</button>
            <button onClick ={() => handleDone(task.done)} >ver</button>
        </div>
    )
}

export default Task;

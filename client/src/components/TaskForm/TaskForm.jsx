import './TaskForm.scss'
import {Formik, Form} from 'formik'
import { useTask } from '../../context/taskContext/TaskProvider'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TaskForm = () => {

    const {handleCreate, getTask, handleUpdate} = useTask()
    const params = useParams()
    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    useEffect(() => {
        const loadTask = async () => {
            if(params.id) {
                const task = await getTask(params.id)
                setTask({
                    title: task.data.message[0].title,
                    description: task.data.message[0].description
                })
                console.log()
            }
        }
        loadTask()
    }, [])

    const navigate = useNavigate();


  return (
    <div className='task-form'>

        {params.id ? <h1>Edit Task</h1> : <h1>Create Task</h1>}

        <Formik initialValues={task} enableReinitialize={true} onSubmit={ async (values, control) => {
            try {
                if(params.id) {
                    await handleUpdate(params.id, values)
                    navigate('/')
                } else {
                    await handleCreate(values)
                }
            } catch(error) {
                console.log(error)
            }
            setTask({
                title: '',
                description: ''
            })
            control.resetForm()
        } }>
            {({handleChange, handleSubmit, values, isSubmitting}) => (
                <Form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder='write a title' onChange={handleChange} value={values.title} />

                    <label>Description</label>
                    <textarea name="description" rows="3" placeholder='Write a description' onChange={handleChange} value={values.description} ></textarea>

                    <button type="submit" disabled={isSubmitting} >{ isSubmitting ? "Saving..." : "Save" }</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default TaskForm;
import './App.css'
import { Routes, Route } from 'react-router-dom';
import TaskPage from './components/TaskPage/TaskPage';
import TaskForm from './components/TaskForm/TaskForm';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import { TaskProvider } from './context/taskContext/taskProvider';

function App() {
  return (

    <TaskProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskProvider>

  )
}

export default App;

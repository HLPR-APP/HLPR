import { useState, useEffect } from 'react';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm.jsx';
import Header from '../../components/Header/Header.jsx';
import { getTasksByUser } from '../../services/services.js';

export default function Profile() {
  
  const [userTasks, setUserTasks] = useState([])
  useEffect(() => {
    const onMount = async () => {
      const data = await getTasksByUser('c1877939-d12d-45b0-92bc-a9e5b475c684')
      setUserTasks(data);

    }
  }, [])
  console.log(userTasks)
  return (
    <>
      <Header />
      {/* hide form */}
      <AddTaskForm />
      {userTasks.map((task) => (
        <div key={task.task_id}>{task.name}</div>
      ))}
    </>
  );
}

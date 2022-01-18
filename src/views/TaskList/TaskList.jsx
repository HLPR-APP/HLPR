import { useState, useEffect } from 'react';
// import TaskBox from '../../components/TaskBox/TaskBox.jsx';
import { getAllTasks } from '../../services/services.js';
import Tasks from '../../components/Tasks/Tasks.jsx';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const onMount = async () => {
      const data = await getAllTasks();
      setTasks(data);
    };

    onMount();
  }, []);
  return (
    <>
      <Tasks tasks={tasks} />
    </>
  );
}

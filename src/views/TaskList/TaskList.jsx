import { useState, useEffect } from 'react';
import { getAllTasks } from '../../services/services.js';
import Tasks from '../../components/Tasks/Tasks.jsx';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onMount = async () => {
      const data = await getAllTasks();
      setTasks(data);
      setLoading(false);
    };

    onMount();
  }, []);
  return (
    <>
      <div>{loading ? <h3>Loading</h3> : <Tasks tasks={tasks} />}</div>
    </>
  );
}

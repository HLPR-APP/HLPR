import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTaskById } from '../../services/services.js';
import TaskBox from '../../components/TaskBox/TaskBox';

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const singleTask = async () => {
      const returnTask = await getTaskById(id);
      setTask(returnTask[0]);
      setLoading(false);
    };
    singleTask();
  }, [id]);

  console.log(task);

  return (
    <>
      <h3>TaskDetail</h3>
      {loading ? <h3>Loading</h3> : <TaskBox task={task} />}
      <Link to="/tasklist">Back to Tasks</Link>
    </>
  );
}

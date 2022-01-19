import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../../services/services.js';
import TaskBox from '../../components/TaskBox/TaskBox';
import { Button } from '@chakra-ui/react';

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
      {loading ? <h3>Loading</h3> : <TaskBox task={task} />}
      <Button>
        <a href="/tasklist"> Back to Tasks List </a>{' '}
      </Button>
    </>
  );
}

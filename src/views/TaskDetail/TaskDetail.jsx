import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext.jsx';
import { useParams } from 'react-router-dom';
import { addOffer, getTaskById } from '../../services/services.js';
import TaskBox from '../../components/TaskBox/TaskBox';

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState('');

  const auth = useUser();

  useEffect(() => {
    const singleTask = async () => {
      const returnTask = await getTaskById(id);
      setTask(returnTask[0]);
      setLoading(false);
    };
    singleTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addOffer(
      auth.user.email,
      task.id,
      task.posted_by,
      price
    );
    console.log(response);
    window.location.reload();
  };

  return (
    <>
      {loading ? <h3>Loading</h3> : <TaskBox task={task} />}
      <Center>
        <form onSubmit={handleSubmit}>
          <FormControl m="10">
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormControl>
          <Button ml="90" type="submit">
            Add Offer
          </Button>{' '}
        </form>
      </Center>
      <Button>
        <a href="/tasklist"> Back to Tasks List </a>
      </Button>
    </>
  );
}

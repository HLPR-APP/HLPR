import {
  Button,
  Badge,
  Center,
  FormControl,
  FormLabel,
  Input,
  Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext.jsx';
import { useParams } from 'react-router-dom';
import { addOffer, getTaskById } from '../../services/services.js';
import TaskBox from '../../components/TaskBox/TaskBox';
import { useHistory } from 'react-router-dom';

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState('');
  const history = useHistory();
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
    history.push('/profile');
  };

  return (
    <>
      {loading ? <h3>Loading</h3> : <TaskBox task={task} />}
      {!task.accepted_offer ? (
      <div>
      <Center>
        <Box
          m="2"
          maxW="sm"
          minW="sm"
          borderWidth="10px"
          borderRadius="lg"
          overflow="hidden"
          fit="cover"
        >
          <Center>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Center>
                  <FormLabel htmlFor="price">Price $</FormLabel>
                </Center>
                <Input
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>
              <Center>
                <Button type="submit" mb="5" mt="2">
                  Add Offer
                </Button>
              </Center>
              <Center>
                <Button mb="2">
                  <a href="/tasklist"> Back to Tasks List </a>
                </Button>
              </Center>
            </form>
          </Center>
        </Box>
      </Center>
      </div> 
       ) : (
      <Center>
        <Box>
      <Badge m='2'>This task has been accepted. No more offers at this time</Badge><br/>
        <Center>
      <Button mb="2">
          <a href="/tasklist"> Back to Tasks List </a>
      </Button>
      </Center>
      </Box>
      </Center>)}
    </>
  );
}

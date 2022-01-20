import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { AddTask } from '../../services/services';

export default function AddTaskForm() {
  const auth = useUser();
  const [taskname, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await AddTask(
      auth.user.email,
      taskname,
      description,
      imageURL
    );
    window.location.reload();
  };

  return (
    <Stack minH={'20vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Create A Task</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="taskname">Task Name</FormLabel>
              <Input
                id="taskname"
                value={taskname}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="date">Image-URL</FormLabel>
              <Input
                id="imageURL"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
              </Stack>
              <Button type="submit" colorScheme={'blue'} variant={'solid'}>
                Create Task
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          pr="10"
          pt="5"
          h="400"
          w="400"
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}

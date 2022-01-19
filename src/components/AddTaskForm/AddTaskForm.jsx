import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Flex,
  Heading,
  Link,
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
    console.log(response);
    window.location.reload();
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <FormControl m="10">
    //     <FormLabel htmlFor="taskname">Task Name</FormLabel>
    //     <Input
    //       id="taskname"
    //       value={taskname}
    //       onChange={(e) => setTaskName(e.target.value)}
    //     />
    //     <FormLabel htmlFor="description">Description</FormLabel>
    //     <Input
    //       id="description"
    //       value={description}
    //       onChange={(e) => setDescription(e.target.value)}
    //     />
    //     <FormLabel htmlFor="date">Image-URL</FormLabel>
    //     <Input
    //       id="imageURL"
    //       value={imageURL}
    //       onChange={(e) => setImageURL(e.target.value)}
    //     />
    //   </FormControl>
    //   <Button type="submit">Submit Task</Button>
    // </form>

    <Stack minH={'40vh'} direction={{ base: 'column', md: 'row' }}>
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
                {/* <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link> */}
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

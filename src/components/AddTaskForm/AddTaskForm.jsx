import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { AddTask } from '../../services/services';

export default function AddTaskForm() {
  const auth = useUser();
  const [taskname, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await AddTask(auth.user.email, taskname, description, imageURL)
    console.log(response);
    window.location.reload();
  }

  return (

    <form onSubmit={handleSubmit}>
    <FormControl m="10">
      <FormLabel htmlFor="taskname">Task Name</FormLabel>
      <Input 
        id="taskname"
        value={taskname}
        onChange={(e)=> setTaskName(e.target.value)} />
      <FormLabel htmlFor="description">Description</FormLabel>
      <Input 
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)} 
      />
      <FormLabel htmlFor="date">Image-URL</FormLabel>
      <Input
      id='imageURL'
      value={imageURL}
      onChange={(e)=> setImageURL(e.target.value)} 
      />
    </FormControl>
    <Button type='submit'>Submit Task</Button>
    </form>
  );
}

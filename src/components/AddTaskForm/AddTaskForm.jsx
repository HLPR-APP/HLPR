import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function AddTaskForm() {
  return (
    <FormControl m="10">
      <FormLabel htmlFor="taskname">Task Name</FormLabel>
      <Input id="taskname" type="taskname" />
      <FormLabel htmlFor="description">Description</FormLabel>
      <Input id="description" type="description" />
      <FormLabel htmlFor="date">Date</FormLabel>
      <Input id="date" type="date" />
    </FormControl>
  );
}

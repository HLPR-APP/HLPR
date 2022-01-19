import { Box, Badge, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
//import { StarIcon } from '@chakra-ui/icons';
import { deleteTaskById } from '../../services/services';

export default function ProfileTaskBox({ task }) {

  const removeTask = async (taskID) => {
    try{
    const response = await deleteTaskById(taskID);
    console.log(response);
    window.location.reload();

    } catch(err) {
    alert('Offers pending, unable to remove')
    //can we delete offers with it?
    }
  }

  console.log(task);
  return (
    <>
      <Box
        maxW="sm"
        minW="sm"
        borderWidth="10px"
        borderRadius="lg"
        overflow="hidden"
        fit="cover"
      >
        <Image
          minW="sm"
          align="top center"
          src={task.image_url}
          alt={task.name}
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Task Name: {task.name}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Description: {task.description}
            </Box>
          </Box>
          <Button size="xs" margin="2" colorScheme="blue">
            <Link to={`/taskdetail/${task.id}`}>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Select This Task
              </Box>
            </Link>
          </Button>
          <Button onClick={()=>removeTask(task.id)} size="xs" margin="2" colorScheme="blue">
              Remove Task
          </Button>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

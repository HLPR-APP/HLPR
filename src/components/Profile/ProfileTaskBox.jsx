import { Flex, Box, Badge, Image, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteTaskById } from '../../services/services';
import { deleteUnacceptedOffers } from '../../services/services';

export default function ProfileTaskBox({ task }) {
  const removeTask = async (taskID) => {
    try {
      const response = await deleteTaskById(taskID);
      window.location.reload();
    } catch (err) {
      alert('Offers pending, unable to remove');
    }
  };

  useEffect(() => {
    const deleteBadOffers = async () => {
      if (task.accepted_offer === true) {
        const response = await deleteUnacceptedOffers(task.id);
      }
    };

    deleteBadOffers();
  }, []);
  console.log('task', task);
  return (
    <>
      <Flex align={'center'} justify={'center'}>
        <Box
          maxW="sm"
          minW="sm"
          borderWidth="10px"
          borderRadius="lg"
          overflow="hidden"
          fit="cover"
          m="2"
        >
          <Image
            minW="sm"
            align="top center"
            h="350"
            w="350"
            src={task.image_url}
            alt={task.name}
          />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Task Name: {task.name}
              </Badge>
              <Box
                height="100"
                width="500"
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
            <Button
              onClick={() => removeTask(task.id)}
              size="xs"
              margin="2"
              colorScheme="blue"
            >
              Remove Task
            </Button>

            <Box>
              {task.accepted_offer ? (
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Offer Accepted
                </Badge>
              ) : (
                <Badge></Badge>
              )}
              <Box as="span" color="gray.600" fontSize="sm"></Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

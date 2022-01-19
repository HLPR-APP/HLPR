import {
  Box,
  Badge,
  Image,
  Button,
  Center,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
//import { StarIcon } from '@chakra-ui/icons';

export default function TaskBox({ task }) {
  console.log(task);
  return (
    <>
      <Flex align={'center'} justify={'center'}>
        <Box
          m="2"
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
            height="350"
            width="350"
            src={task.image_url}
            alt={task.name}
          />
          <Spacer />
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
                <Spacer />
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
            <Spacer />
            <Box>
              <Box as="span" color="gray.600" fontSize="sm"></Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

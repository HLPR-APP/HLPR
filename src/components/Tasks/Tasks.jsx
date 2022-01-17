import { Box, Flex } from '@chakra-ui/react';
import TaskBox from '../TaskBox/TaskBox.jsx';

import React from 'react';

export default function Tasks({ tasks }) {
  return (
    <Box bg="lightblue">
      <Flex direction="row" wrap="wrap" p="5" margin="10px" padding="10px">
        {tasks.map((task) => (
          <TaskBox task={task} key={task.id} />
        ))}
      </Flex>
    </Box>
  );
}

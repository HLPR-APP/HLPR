import { Box, Badge, Image, Button } from '@chakra-ui/react';
//import { StarIcon } from '@chakra-ui/icons';

export default function TaskBox({ task }) {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };
  console.log(task);
  return (
    <>aasd
     <Box
      maxW="sm"
      minW="sm"
      borderWidth="10px"
      borderRadius="lg"
      overflow="hidden"
      fit="cover"
    >
     {/* <Image
        minW="sm"
        align="top center"
        src={}
        alt={}
      />
  */}
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Allies: {}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Enemies: {task.name}
          </Box>
        </Box>
        <Button size="xs" margin="2" colorScheme="blue">
          {/*<Link to={`/character/${character._id}`}>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Details: {task.name}
            </Box>
  </Link>*/}
        </Button>
        <Box>
          {task.name}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>
      </Box>
    </Box>
 
    </>
  );
}

import { Box, Badge, Image, Button, Flex, Center, HStack } from '@chakra-ui/react';
import { updateOfferAccepted } from '../../services/services';
import { updateAcceptTask } from '../../services/services';
import { useUser } from '../../context/UserContext';

export default function AcceptOfferBox({ offer }) {
  const auth = useUser();
  const handleAcceptOffer = async (taskID, offerID) => {
    try {
      const response = await updateAcceptTask(auth.user.email, taskID);
      const returned = await updateOfferAccepted(offerID);
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
    
      <Flex direction="horizontal" align="center">
        <Box
          maxW="sm"
          minW="sm"
          borderWidth="10px"
          borderRadius="lg"
          overflow="hidden"
          fit="cover"
          m="2"
        >
          <Badge
            borderRadius="full"
            px="2"
            colorScheme="teal"
            fontSize="md"
            mt="4"
            ml="2"
          >
            {offer.Tasks2.name}
          </Badge>
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal" mb="2">
                Offered By:{<br />}
                {offer.offered_by}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="md"
                textTransform="uppercase"
                ml="10"
              >
                Price: ${offer.price}
              </Box>
            </Box>
            {!offer.accepted ? (
              <Center>
                <Button
                  onClick={() => handleAcceptOffer(offer.Tasks2.id, offer.id)}
                  size="md"
                  margin="2"
                  colorScheme="blue"
                  mt="2"
                >
                  Accept Offer
                </Button>
              </Center>
            ) : (
              <Center>
                <Button size="md" margin="2" colorScheme="green" px="2" mt="2">
                  Offer Accepted
                </Button>
              </Center>
            )}
            <Box>
              <Box as="span" color="gray.600" fontSize="sm"></Box>
            </Box>
          </Box>
        </Box>
      </Flex>
      
    </>
  );
}

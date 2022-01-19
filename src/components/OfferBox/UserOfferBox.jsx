import { Box, Badge, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { deleteOfferByID } from '../../services/services';

export default function UserOfferBox({ offer }) {
  const removeOffer = async (offerID) => {
    const response = await deleteOfferByID(offerID);
    console.log(response);
    window.location.reload();
  };

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
        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize="md">
          {offer.Tasks2.name}
        </Badge>
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              OfferedBy:{<br />}
              {offer.offered_by}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
              ml="2"
            >
              Price: {offer.price}
            </Box>
            {offer.accepted ? (
              <Box
                color="teal.500"
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                Status: Offer Accepted
              </Box>
            ) : (
              <Box
                color="teal.500"
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="sm"
                textTransform="uppercase"
                ml="2"
              >
                Status: Not Accepted
              </Box>
            )}
          </Box>
          <Button
            onClick={() => removeOffer(offer.id)}
            size="sm"
            margin="2"
            colorScheme="blue"
          >
            Remove Offer
          </Button>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

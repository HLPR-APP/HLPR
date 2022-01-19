import { Box, Badge, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { updateOfferAccepted } from '../../services/services';
import { updateAcceptTask } from '../../services/services';

export default function AcceptOfferBox({offer}) {
    
    const handleAcceptOffer = async (taskID, offerID) => {
        try{
        console.log(taskID);
        const response = await updateAcceptTask(taskID);
        //console.log(response);
        const returned = await updateOfferAccepted(offerID);
        console.log(returned);
        } catch (err) {
        console.log(err.message);
        }
      }

    return (
    <>
      <Box
        maxW="sm"
        minW="sm"
        borderWidth="10px"
        borderRadius="lg"
        overflow="hidden"
        fit="cover"
      ><Badge borderRadius="full" px="2" colorScheme="teal">
        
       {offer.Tasks2.name}
      </Badge>
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
            OfferedBy:{<br/>}
            {offer.offered_by}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Price: {offer.price}
            </Box>
          </Box>
          
          <Button onClick={()=>handleAcceptOffer(offer.Tasks2.id, offer.id)} size="xs" margin="2" colorScheme="blue">
              Accept Offer
          </Button>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
       

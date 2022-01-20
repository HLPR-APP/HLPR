import { Flex, Center, Badge, Button, HStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm.jsx';
import { getTasksByUser } from '../../services/services.js';
import { getTasksByEmail } from '../../services/services.js';
import { useUser } from '../../context/UserContext.jsx';
import Tasks from '../../components/Tasks/Tasks.jsx';
import { getOffersByTaskEmail } from '../../services/services.js';
import styles from './Profile.css';
import { getOffersByUser } from '../../services/services.js';
import { updateAcceptTask } from '../../services/services.js';
import { updateOfferAccepted } from '../../services/services.js';
import ProfileTaskBox from '../../components/Profile/ProfileTaskBox.jsx';
import { deleteOfferByID } from '../../services/services.js';
import OfferBox from '../../components/OfferBox/UserOfferBox.jsx';
import AcceptOfferBox from '../../components/OfferBox/AcceptOfferBox.jsx';
import { deleteUnacceptedOffers } from '../../services/services.js';

export default function Profile() {
  const auth = useUser();
  const [userTasks, setUserTasks] = useState([]);
  const [offers, setOffers] = useState([]);
  const [offered, setOffered] = useState([]);

  useEffect(() => {
    const onMount = async () => {
      const data = await getTasksByEmail(auth.user.email);
      setUserTasks(data);
      const returnedOffers = await getOffersByTaskEmail(auth.user.email);
      console.log('offers', returnedOffers);
      setOffers(returnedOffers);
      const userOffers = await getOffersByUser(auth.user.email);
      setOffered(userOffers);
      console.log(userOffers);
    };
    onMount();
  }, []);

  return (
    <>
      <AddTaskForm />
      <br />
      <br />
      <Center>
        <Badge fontSize="md" colorScheme="gray">
          OFFERS ON {auth.user.email}'s TASKS:
        </Badge>
      </Center>
      <Center>
      
        <Flex direction="rows" p="10" wrap='wrap'>
          {offers.map((offer) => (
            <AcceptOfferBox key={offer.id} offer={offer} />
          ))}
        </Flex>
        
      </Center>
      <br />

      <Center>
        <Badge fontSize="md" colorScheme="gray">
          {auth.user.email}'s TASKS:
        </Badge>
      </Center>

      <Center>
        <Flex direction="rows" pl="10" p="10" wrap='wrap'>
          {userTasks.map((task) => (
            <ProfileTaskBox key={task.id} task={task} />
          ))}
        </Flex>
      </Center>
      <Center>
        <Badge fontSize="md" colorScheme="gray">
          OFFERS {auth.user.email} HAS MADE:
        </Badge>
      </Center>
      <Center>
        <Flex direction="rows" pl="10" p="10" wrap='wrap'>
          {offered.map((offer) => (
            <OfferBox key={offer.id} offer={offer} />
          ))}
        </Flex>
      </Center>
    </>
  );
}

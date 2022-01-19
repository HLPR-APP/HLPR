import { useState, useEffect } from 'react';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm.jsx';
import { getTasksByUser } from '../../services/services.js';
import { getTasksByEmail } from '../../services/services.js';
import { useUser } from '../../context/UserContext.jsx';
import Tasks from '../../components/Tasks/Tasks.jsx';
import { getOffersByTaskEmail } from '../../services/services.js';
import styles from './Profile.css'

export default function Profile() {
  const auth = useUser();
  
  const [userTasks, setUserTasks] = useState([]);
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const onMount = async () => {
      const data = await getTasksByEmail(auth.user.email);
      console.log(data);
      setUserTasks(data);
      const returnedOffers = await getOffersByTaskEmail(auth.user.email);
      console.log('offers', returnedOffers);
      setOffers(returnedOffers);
    };
  onMount()}, []);
  console.log(userTasks);
  
  return (
    <>
    <AddTaskForm />
      {/* hide form */}
      Your Offers:{offers.map((offer) => (
        <div className={styles.offer_container} key={offer.id}>
          <p className={styles.offer_detail}>{offer.Tasks2.name}</p>
          <p className={styles.offer_detail}>Offered By: {offer.offered_by}</p>
          <p className={styles.offer_detail}>${offer.price}</p>
          <p className={styles.offer_detail}>Offer Date: {offer.date}</p>
        </div>
      ))}
      
      <Tasks tasks={userTasks} />
      
     
     </>
  );
}

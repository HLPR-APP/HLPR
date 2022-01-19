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
      const userOffers = await getOffersByUser(auth.user.email)
      setOffered(userOffers);
      console.log(userOffers);
    };
    onMount();
  }, []);

  const handleAcceptOffer = async (taskID, offerID) => {
    try{
    //console.log(taskID);
    //const response = await updateAcceptTask(taskID);
    //console.log(response);
    const returned = await updateOfferAccepted(offerID);
   console.log(returned);
    } catch (err) {
      console.log(err.message);
    }
  }
  const removeOffer = async (offerID) => {
    const response = await deleteOfferByID(offerID);
    console.log(response);
    window.location.reload();
  }

  console.log(userTasks);

  return (
    <>
      <AddTaskForm /><br/><br/>

      Your Offers:
      {offers.map((offer) => (
        <div className={styles.offer_container} key={offer.id}>
          <p className={styles.offer_task}>{offer.Tasks2.name}</p>
          <p className={styles.offer_detail}>Offered By: {offer.offered_by}</p>
          <p className={styles.offer_detail}>${offer.price}</p>
          <p className={styles.offer_detail}>Offer Date: {offer.date}</p>
          <button onClick={() => handleAcceptOffer(offer.Tasks2.id, offer.id)} className={styles.accept}>Accept Offer</button>
        </div>
      ))}<br/>
      Your Tasks...
      
      {userTasks.map((task) => (
        <ProfileTaskBox key={task.id} task={task} />
      ))}

      <div>
        <div>Offers you have made...</div>
        {offered.map((offer) => (
          <div className={styles.offer_container} key={offer.id}>
            <p className={styles.offer_task}> {offer.Tasks2.name}</p>
            <p className={styles.offer_detail}>Offer Price: {offer.price}</p>
            <p className={styles.offer_detail}>Offered By You:  {offer.offered_by}</p>
            {offer.accepted ? <p className={styles.offer_task}>Status: Accepted {offer.Tasks.posted_by}</p> : <p className={styles.offer_task}>Status: Not accepted</p>}
            <button className={styles.accept} onClick={()=>removeOffer(offer.id)}>Remove Offer</button>
          </div>
        ))}
      </div>
    </>
  );
}

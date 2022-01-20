import { client, parseData } from './client';

// get all tasks
export async function getAllTasks() {
  const request = await client
  .from('Tasks2')
  .select('*')
  return parseData(request);
}

//get task by Id
export async function getTaskById(id) {
  const request = await client.from('Tasks2').select('*').eq('id', id);
  return parseData(request);
}

//get tasks posted by user
export async function getTasksByUser(userId) {
  const request = await client
    .from('Tasks2')
    .select('*')
    .eq('posted_by', userId);
  return parseData(request);
}

//get tasks by useremail from Tasks2
export async function getTasksByEmail(email) {
  const request = await client
    .from('Tasks2')
    .select('*')
    .eq('posted_by', email);
  return parseData(request);
}

//get offers by task email
export async function getOffersByTaskEmail(email) {
  const request = await client
    .from('Offers2')
    .select('*, Tasks2 (*)')
    .eq('task_email', email);
  return parseData(request);
}

//get offers by user
export async function getOffersByUser(email) {
  const request = await client
    .from('Offers2')
    .select('*, Tasks2 (*)')
    .eq('offered_by', email);
  return parseData(request);
}

//add new task to database
export async function AddTask(email, taskname, description, imageURL) {
  const request = await client
    .from('Tasks2')
    .insert({
      posted_by: email,
      name: taskname,
      description: description,
      image_url: imageURL,
    });
  return parseData(request);
}

//update db when task accepted
export async function updateAcceptTask(email, taskID) {
  const request = await client
    .from('Tasks2')
    .update({ accepted_offer: true })
    .match({ id: taskID, posted_by: email });
  return parseData(request);
}

//update db when offer accepted
export async function updateOfferAccepted(offerID) {
  const request = await client
    .from('Offers2')
    .update({ accepted: true })
    .match({ id: offerID });
  return parseData(request);
}

//delete task by id
export async function deleteTaskById(taskID) {
  const request = await client.from('Tasks2').delete().match({ id: taskID });
  return parseData(request);
}

//delete offer by id
export async function deleteOfferByID(offerID) {
  const request = await client.from('Offers2').delete().match({ id: offerID });
  return parseData(request);
}

//add offer to db
export async function addOffer(email, id, posted_by, price) {
  const request = await client
    .from('Offers2')
    .insert({
      offered_by: email,
      task_id: id,
      task_email: posted_by,
      price: price,
    });
  return parseData(request);
}

//delete unused offers when other offer is accepted
export async function deleteUnacceptedOffers(taskID){
  const request = await client
  .from('Offers2')
  .delete()
  .match({task_id: taskID, accepted: false })
  return parseData(request);
}
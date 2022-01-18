//CRUD routes

import { client, parseData } from './client';

// get all tasks
export async function getAllTasks() {
  const request = await client.from('Tasks2').select('*');
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
    .match({ posted_by: email });
  return parseData(request);
}

//CRUD routes

import { client, parseData } from './client';

// get all tasks

export async function getAllTasks() {
    const request = await client.from('Tasks').select('*');
    return parseData(request);
}

//get task by Id
export async function getTaskById(id) {
    const request = await client
    .from('Tasks')
    .select('*')
    .eq('task_id', id)
}

//get tasks posted by user
export async function getTasksByUser(userId) {
    const request = await client.from('Tasks').select('posted_by').eq({ posted_by: userId})
}

import { client } from './client';

export async function getCandy() {
  const response = await client.from('candies').select('*');

  return response.body;
}
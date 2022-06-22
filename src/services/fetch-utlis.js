import { client } from './client';

export async function getcandy() {
  const response = await client.from('candies').select('*');

  return response.body;
}
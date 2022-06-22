import { client } from './client';

export async function getCandy() {
  const response = await client.from('candies').select('*');

  return response.body;
}

export async function getFruit() {
  const response = await client.from('fruits_2').select('*');
  
  return response.body;
}
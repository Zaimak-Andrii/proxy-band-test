import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getUsersService = async () => {
  const { data } = await instanceAxios.get('users');
  return data;
};

export const getUserPostsService = async (userId) => {
  const { data } = await instanceAxios.get('posts', {
    params: {
      userId,
    },
  });
  return data;
};

export const getUserAlbumsService = async (userId) => {
  const { data } = await instanceAxios.get('albums', {
    params: {
      userId,
    },
  });
  return data;
};

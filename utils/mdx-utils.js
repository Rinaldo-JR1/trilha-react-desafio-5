import { api } from '../services/api';
export const getPosts = async () => {
  const { data } = await api.get('/posts');
  console.log(data)
  debugger;
  if (data) {
    return data;
  } else {
    return [];
  }
};

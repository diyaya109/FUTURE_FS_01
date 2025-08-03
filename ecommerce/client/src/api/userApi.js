import axios from 'axios';

export const login = async (email, password) => {
  const { data } = await axios.post('/api/users/login', { email, password });
  return data;
};

export const register = async (name, email, password) => {
  const { data } = await axios.post('/api/users/register', {
    name,
    email,
    password,
  });
  return data;
};

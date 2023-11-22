import axios from "axios";

export const contactsInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const userRegister = async formData => {
  const { data } = await contactsInstance.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const userLogin = async formData => {
  const { data } = await contactsInstance.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const userLogout = async () => {
  const { data } = await contactsInstance.post('/users/logout');
  return data;
};

export const userRefresh = async () => {
  const { data } = await contactsInstance.get('/users/current');
  return data;
};

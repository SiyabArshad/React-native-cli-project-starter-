import api from './instance';

export const getRequest = async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postRequest = async (formData) => {
  try {
    const response = await api.post('/submit', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

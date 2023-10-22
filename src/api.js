import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '39228988-9f38d0df7f0bcbddd9d36da69';

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;

  } catch (error) {
    console.log(error.message);
  }
};

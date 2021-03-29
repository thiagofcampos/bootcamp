import axios from 'axios';
const API = 'https://dog.ceo/api/breed';
export const getBreedImages = async (breed: string): Promise<string> => {
  try {
    const url = `${API}/${breed}/images/random`;
    const response = await axios.get(url);
    return response.data?.message;
  } catch (error) {
    throw error;
  }
};

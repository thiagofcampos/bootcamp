import axios from 'axios';

const API = 'https://dog.ceo/api/breed';

interface BreedsResponse {
  message: string;
}

export const getBreedImages = async (breed: string): Promise<BreedsResponse> => {
  try {
    const url = `${API}/${breed}/images/random`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw error;
  }
};
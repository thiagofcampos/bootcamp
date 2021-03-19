export const API = 'https://dog.ceo/api/breed';

interface BreedsResponse {
  message: string;
}

export const getBreedImages = async (breed: string): Promise<BreedsResponse> => {
  try {
    const url = `${API}/${breed}/images/random`;
    const response = await fetch(url);

    return response.json();
  } catch (error) {
    throw error;
  }
};

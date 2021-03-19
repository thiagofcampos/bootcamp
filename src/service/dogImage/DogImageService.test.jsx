import { getBreedImages } from './DogImageService';
import axios from 'axios';

jest.mock('axios')

describe('DogImageService', () => {
  it('should return a breed list with success', async () => {
		const mockBreed ="african";
    const data = {
      message:"url image"
    };
		axios.get.mockImplementation(() => Promise.resolve({data}));
		const response = await getBreedImages(mockBreed)
		expect(response).toEqual(data);
    
		expect(axios.get).toHaveBeenCalledWith(`https://dog.ceo/api/breed/${mockBreed}/images/random`)
  });
	
  it('should throw error when the server request has error', async () => {
		const mockBreed = "African"
		const errorMessage = 'Network Error';
    (axios.get).mockImplementation(() =>
      Promise.reject(new Error(errorMessage)),
    );	
		try {
			await getBreedImages(mockBreed)
		} catch {
			await expect(axios.get).rejects.toThrow(errorMessage);
		}

  });
});

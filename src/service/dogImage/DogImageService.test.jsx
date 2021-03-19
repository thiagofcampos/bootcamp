import { getBreedImages } from './DogImageService';

describe('DogImageService', () => {
  it('should return a breed list with success', async () => {
    const mockSuccessResponse = {
      message:"url image"
      ,
    };
		const mockBreed = "African"
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
		
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

		const result = await getBreedImages(mockBreed);

		expect(global.fetch).toBeCalledTimes(1);
		expect(result).toEqual(mockSuccessResponse);
		expect(global.fetch).toHaveBeenCalledWith(`https://dog.ceo/api/breed/${mockBreed}/images/random`)
  });
	
  it('should throw error when the server request has error', async () => {
    jest.spyOn(global, 'fetch');
		const mockBreed = "African"
		const errorMessage = 'Network Error';
    (global.fetch).mockImplementation(() =>
      Promise.reject(new Error(errorMessage)),
    );	
		try {
			await getBreedImages(mockBreed)
		} catch {
			await expect(global.fetch).rejects.toThrow(errorMessage);
		}

  });
});

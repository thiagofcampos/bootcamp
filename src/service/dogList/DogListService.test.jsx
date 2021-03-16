import { getAll } from './DogListService';

describe('DogListService', () => {
  it('should return a breed list with success', async () => {
    const mockSuccessResponse = {
      message: {
        african: [],
				australian:[]
      },
    };

    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
		
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

		const result = await getAll();

		expect(global.fetch).toBeCalledTimes(1);
		expect(result).toEqual(mockSuccessResponse);
		expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/all')
  });
	
  it('should throw error when the server request has error', async () => {
    jest.spyOn(global, 'fetch');

		const errorMessage = 'Network Error';
    (global.fetch).mockImplementation(() =>
      Promise.reject(new Error(errorMessage)),
    );	
		try {
			await getAll()
		} catch {
			await expect(global.fetch).rejects.toThrow(errorMessage);
		}

  });
});

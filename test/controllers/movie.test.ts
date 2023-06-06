import { movie } from '../../src/controllers/movie'
import axios from 'axios'
import { mockAxiosResponse } from '../mocks/response'

jest.mock('axios')

describe('movie', () => {
  const movieId = '5cd95395de30eff6ebccde5c'
  const filterOptions = { limit: 10 }
  const mockError = new Error('I have nightmares and PTSD from this class instance.')

  describe('getById', () => {
    it('should return the movie data for a valid movie ID', async () => {
      ;(axios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResponse)

      const result = await movie.getById(movieId, {})

      expect(result).toEqual(mockAxiosResponse.data)
      expect(axios.get).toHaveBeenCalledWith(`/movie/${movieId}`, { params: {} })
    })

    it('should throw an error for an invalid movie ID', async () => {
      ;(axios.get as jest.Mock).mockRejectedValueOnce(mockError)

      await expect(movie.getById(movieId, filterOptions)).rejects.toThrowError(mockError.message)
      expect(axios.get).toHaveBeenCalledWith(`/movie/${movieId}`, { params: filterOptions })
    })
  })

  describe('getAll', () => {
    it('should return all movies with default filter options', async () => {
      ;(axios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResponse)

      const result = await movie.getAll()

      expect(result).toEqual(mockAxiosResponse.data)
      expect(axios.get).toHaveBeenCalledWith('/movie', { params: {} })
    })

    it('should return all movies with custom filter options', async () => {
      ;(axios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResponse)

      const result = await movie.getAll(filterOptions)

      expect(result).toEqual(mockAxiosResponse.data)
      expect(axios.get).toHaveBeenCalledWith('/movie', { params: filterOptions })
    })

    it('should throw an error if an error occurs during the request', async () => {
      ;(axios.get as jest.Mock).mockRejectedValueOnce(mockError)

      await expect(movie.getAll()).rejects.toThrowError(mockError.message)
      expect(axios.get).toHaveBeenCalledWith('/movie', { params: {} })
    })
  })

  describe('getQuotesById', () => {
    it('should return quotes for a valid movie ID', async () => {
      ;(axios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResponse)

      const result = await movie.getQuotesById(movieId)

      expect(result).toEqual(mockAxiosResponse.data)
      expect(axios.get).toHaveBeenCalledWith(`/movie/${movieId}/quote`, { params: {} })
    })

    it('should return quotes for a valid movie ID with custom filter options', async () => {
      ;(axios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResponse)

      const result = await movie.getQuotesById(movieId, filterOptions)

      expect(result).toEqual(mockAxiosResponse.data)
      expect(axios.get).toHaveBeenCalledWith(`/movie/${movieId}/quote`, { params: filterOptions })
    })

    it('should throw an error for an invalid movie ID', async () => {
      ;(axios.get as jest.Mock).mockRejectedValueOnce(mockError)

      await expect(movie.getQuotesById(movieId, filterOptions)).rejects.toThrowError(
        mockError.message
      )
      expect(axios.get).toHaveBeenCalledWith(`/movie/${movieId}/quote`, { params: filterOptions })
    })
  })
})

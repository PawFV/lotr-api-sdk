import axios from 'axios'
import { quote } from '../../src/controllers/quote/'
import { mockAxiosResponse } from '../mocks/response'

jest.mock('axios')

describe('quote', () => {
  const quoteId = '5cd95395de30eff6ebccde5c'
  const filterOptions = { limit: 10 }
  const mockError = new Error('I have nightmares and PTSD from this class instance.')

  describe('getById', () => {
    it('should return the quote data for a valid quote ID', async () => {
      ;(axios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResponse)

      const result = await quote.getById(quoteId)

      expect(result).toEqual(mockAxiosResponse.data)
      expect(axios.get).toHaveBeenCalledWith(`/quote/${quoteId}`, { params: {} })
    })

    it('should return the quote data with filter options', async () => {
      ;(axios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResponse)

      const result = await quote.getById(quoteId, filterOptions)

      expect(result).toEqual(mockAxiosResponse.data)
      expect(axios.get).toHaveBeenCalledWith(`/quote/${quoteId}`, { params: filterOptions })
    })

    it('should throw an error for an invalid quote ID', async () => {
      ;(axios.get as jest.Mock).mockRejectedValueOnce(mockError)

      await expect(quote.getById('invalid-id')).rejects.toThrowError(mockError.message)
      expect(axios.get).toHaveBeenCalledWith(`/quote/invalid-id`, { params: {} })
    })
  })

  describe('getAll', () => {
    it('should return all quote data', async () => {
      ;(axios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResponse)

      const result = await quote.getAll()

      expect(result).toEqual(mockAxiosResponse.data)
      expect(axios.get).toHaveBeenCalledWith(`/quote`, { params: {} })
    })

    it('should return all quote data with filter options', async () => {
      ;(axios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResponse)

      const result = await quote.getAll(filterOptions)

      expect(result).toEqual(mockAxiosResponse.data)
      expect(axios.get).toHaveBeenCalledWith(`/quote`, { params: filterOptions })
    })

    it('should throw an error if getAll request fails', async () => {
      ;(axios.get as jest.Mock).mockRejectedValueOnce(mockError)

      await expect(quote.getAll()).rejects.toThrowError(mockError.message)
      expect(axios.get).toHaveBeenCalledWith(`/quote`, { params: {} })
    })
  })
})

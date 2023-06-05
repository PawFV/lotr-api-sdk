import axios from 'axios'
import type { FilterOptions } from '../../types'
import type { MovieResponse } from './types'

const movie = {
  async getById(movieId: string, filterOptions?: FilterOptions) {
    try {
      const response = await axios.get<MovieResponse.GetById>(`/movie/${movieId}`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      console.error(error.message)
    }
  },

  async getAll(filterOptions?: FilterOptions) {
    try {
      const response = await axios.get<MovieResponse.GetAll>('/movie', { params: filterOptions })
      return response.data
    } catch (error) {
      console.error(error.message)
    }
  },

  async getQuotesById(movieId: string, filterOptions?: FilterOptions) {
    try {
      const response = await axios.get<MovieResponse.GetQuote>(`/movie/${movieId}/quote`, { params: filterOptions })
      return response.data
    } catch (error) {
      console.error(error.message)
    }
  }
}

export { movie }

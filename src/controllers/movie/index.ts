import axios from 'axios'
import type { FilterOptions } from '../../types'
import type { MovieResponse } from './types'

const movie = {
  async getById(id: string, filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<MovieResponse.GetById>(`/movie/${id}`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },

  async getAll(filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<MovieResponse.GetAll>('/movie', { params: filterOptions })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },

  async getQuotesById(id: string, filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<MovieResponse.GetQuote>(`/movie/${id}/quote`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  }
}

export { movie }

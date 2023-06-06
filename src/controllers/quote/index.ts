import axios from 'axios'
import type { FilterOptions } from '../../types'
import type { QuoteResponse } from './types'

const quote = {
  async getById(quoteId: string, filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<QuoteResponse.GetById>(`/quote/${quoteId}`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },

  async getAll(filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<QuoteResponse.GetAll>('/quote', { params: filterOptions })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  }
}

export { quote }

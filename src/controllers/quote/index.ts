import axios from 'axios'
import type { FilterOptions } from '../../types'
import type { QuoteResponse } from './types'

const quote = {
  async getById(quoteId: string, filterOptions?: FilterOptions) {
    try {
      const response = await axios.get<QuoteResponse.GetById>(`/quote/${quoteId}`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      console.error(error.message)
    }
  },

  async getAll(filterOptions?: FilterOptions) {
    try {
      const response = await axios.get<QuoteResponse.GetAll>('/quote', { params: filterOptions })
      return response.data
    } catch (error) {
      console.error(error.message)
    }
  }
}

export { quote }

import axios from 'axios'
import type { FilterOptions } from '../../types'
import type { CharacterResponse } from './types'

const character = {
  async getById(id: string, filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<CharacterResponse.GetById>(`/character/${id}`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },

  async getAll(filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<CharacterResponse.GetAll>('/character', { params: filterOptions })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },

  async getQuotesById(id: string, filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<CharacterResponse.GetQuote>(`/character/${id}/quote`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  }
}

export { character }

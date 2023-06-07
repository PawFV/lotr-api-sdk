import axios from 'axios'
import type { FilterOptions } from '../../types'
import type { BookResponse } from './types'

const book = {
  async getById(id: string, filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<BookResponse.GetById>(`/book/${id}`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },

  async getAll(filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<BookResponse.GetAll>('/book', { params: filterOptions })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },

  async getChaptersById(id: string, filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<BookResponse.GetChapter>(`/book/${id}/chapter`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  }
}

export { book }

import axios from 'axios'
import type { FilterOptions } from '../../types'
import type { ChapterResponse } from './types'

const chapter = {
  async getById(id: string, filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<ChapterResponse.GetById>(`/chapter/${id}`, {
        params: filterOptions
      })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },

  async getAll(filterOptions: FilterOptions = {}) {
    try {
      const response = await axios.get<ChapterResponse.GetAll>('/chapter', { params: filterOptions })
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  }
}

export { chapter }

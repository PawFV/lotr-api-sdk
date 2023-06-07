import type { BaseResponse } from '../../types'
import type { Chapter } from '../chapter/types'

export namespace BookResponse {
  export interface GetAll extends BaseResponse<Book> {}
  export interface GetById extends GetAll {}
  export interface GetChapter extends BaseResponse<Chapter> {}
}

export interface Book {
  _id: string
  name: string
}


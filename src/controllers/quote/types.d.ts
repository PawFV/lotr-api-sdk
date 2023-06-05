import type { BaseResponse } from '../../types'

export namespace QuoteResponse {
  export interface GetAll extends BaseResponse<Quote> {}
  export interface GetById extends GetAll {}
}

export interface Quote {
  _id: string
  dialog: string
  movie: string
  character: string
  id: string
}

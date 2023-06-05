import type { BaseResponse } from '../../types'

export namespace MovieResponse {
  export interface GetAll extends BaseResponse<Movie> {}
  export interface GetById extends GetAll {}
  export interface GetQuote extends BaseResponse<MovieQuote> {}
}

export interface Movie {
  _id: string
  name: string
  runtimeInMinutes: number
  budgetInMillions: number
  boxOfficeRevenueInMillions: number
  academyAwardNominations: number
  academyAwardWins: number
  rottenTomatoesScore: number
}

export interface MovieQuote {
  _id: string
  dialog: string
  movie: string
  character: string
  id: string
}

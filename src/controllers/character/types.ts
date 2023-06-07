import type { BaseResponse } from '../../types'
import type { Quote } from '../quote/types'

export namespace CharacterResponse {
  export interface GetAll extends BaseResponse<Character> {}
  export interface GetById extends GetAll {}
  export interface GetQuote extends BaseResponse<Quote> {}
}

export interface Character {
  _id: string
  height: string
  race: string
  gender?: string
  birth: string
  spouse: string
  death: string
  realm: string
  hair: string
  name: string
  wikiUrl?: string
}

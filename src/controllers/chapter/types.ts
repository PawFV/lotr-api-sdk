import type { BaseResponse } from '../../types'

export namespace ChapterResponse {
  export interface GetAll extends BaseResponse<Chapter> {}
  export interface GetById extends GetAll {}
}

export interface Chapter {
  _id: string
  chapterName: string
}


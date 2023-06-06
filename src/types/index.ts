interface PaginationOptions {
  /** Limit the number of results per page. */
  limit?: number
  /** Specify the page number. */
  page?: number
  /** Specify the offset for pagination. */
  offset?: number
}

interface SortingOptions {
  /**
   * Specify the sorting order for a field.
   * @example "name:asc"
   */
  sort?: string
}

interface FilteringOptions {
  /** Match values for specified fields. */
  match?: Record<string, string>
  /** Negate match values for specified fields. */
  negateMatch?: Record<string, string>
  /** Include values for specified fields. */
  include?: Record<string, string>
  /** Exclude values for specified fields. */
  exclude?: Record<string, string>
  /** Check if specified fields exist. */
  exists?: string[]
  /** Check if specified fields do not exist. */
  doesNotExist?: string[]
  /** Apply regex pattern matching to specified fields. */
  regex?: Record<string, string>
  /** Filter values less than the specified values for fields. */
  lessThan?: Record<string, string>
  /** Filter values greater than or equal to the specified values for fields. */
  greaterThanOrEqual?: Record<string, string>
}

/** For detailed information about filters please checkout the [documentation](https://the-one-api.dev/documentation) */
export interface FilterOptions extends PaginationOptions, SortingOptions, FilteringOptions {}

export interface BaseResponse<Doc> {
  docs: Doc[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

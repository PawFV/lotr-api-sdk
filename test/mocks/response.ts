/**
 * @description Since these are not doing E2E tests and for the sake of simplicity
 * we reuse this mocked value for all axios api call responses.
 */
export const mockAxiosResponse = {
  data: {
    'docs': [
      {
        '_id': '5cd95395de30eff6ebccde56',
        'name': 'The Lord of the Rings Series',
        'runtimeInMinutes': 558,
        'budgetInMillions': 281,
        'boxOfficeRevenueInMillions': 2917,
        'academyAwardNominations': 30,
        'academyAwardWins': 17,
        'rottenTomatoesScore': 94
      }
    ],
    'total': 5,
    'limit': 1000,
    'offset': 0,
    'page': 1,
    'pages': 1
  }
}

export const listNows = /* GraphQL */ `
  query ListNows(
    $id: ID
    $filter: ModelNowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNows(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        destinationLat
        destinationLong
        originLat
        originLong
        destinations
        origins
        price
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
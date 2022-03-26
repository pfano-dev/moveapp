/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNow = /* GraphQL */ `
  query GetNow($id: ID!) {
    getNow(id: $id) {
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
  }
`;
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
export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
      id
      name
      date
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
  }
`;
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $id: ID
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSchedules(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        date
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
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      surname
      roomName
      location
      province
      price
      userId
      userName
      image
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $id: ID
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        surname
        roomName
        location
        province
        price
        userId
        userName
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

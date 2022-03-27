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
export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
      surname
      yourName
      idNumber
      vehicleType
      RegistrationNumber
      vehicleModel
      province
      createdAt
      updatedAt
    }
  }
`;
export const listVehicles = /* GraphQL */ `
  query ListVehicles(
    $id: ID
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVehicles(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        surname
        yourName
        idNumber
        vehicleType
        RegistrationNumber
        vehicleModel
        province
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
      yourName
      surname
      roomName
      roomType
      location
      province
      price
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
        yourName
        surname
        roomName
        roomType
        location
        province
        price
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNow = /* GraphQL */ `
  mutation CreateNow(
    $input: CreateNowInput!
    $condition: ModelNowConditionInput
  ) {
    createNow(input: $input, condition: $condition) {
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
export const updateNow = /* GraphQL */ `
  mutation UpdateNow(
    $input: UpdateNowInput!
    $condition: ModelNowConditionInput
  ) {
    updateNow(input: $input, condition: $condition) {
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
export const deleteNow = /* GraphQL */ `
  mutation DeleteNow(
    $input: DeleteNowInput!
    $condition: ModelNowConditionInput
  ) {
    deleteNow(input: $input, condition: $condition) {
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
export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
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
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
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
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
import { gql } from "@apollo/client";


export const CREATE_PROPERTY = gql`
mutation addProperty($build: Int, $land: Int, $owner: Int) {
  createProperty(
    input: {
      property: {
        build: $build, 
        land: $land, 
        owner: $owner
      }
    }
  ) {
    property {
      build
      id
      land
      owner
    }
  }
}
`

export const EDIT_PROPERTY = gql`
mutation editProperty($idToEdit: Int!, $build: Int, $land: Int, $owner: Int) {
  updatePropertyById(
    input: { id: $idToEdit, propertyPatch: {
      build: $build, 
      land: $land, 
      owner: $owner
    }
  }
  ) {
    property {
      build
      id
      land
      owner
    }
  }
}
`

export const DELETE_PROPERTY = gql`
mutation deleteProperty($idToDelete: Int!) {
  deletePropertyById(
    input: {
      id: $idToDelete
    }
  ) {
    deletedPropertyId
  }
}
`
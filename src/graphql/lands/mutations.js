import { gql } from '@apollo/client'

export const CREATE_LAND = gql`
mutation addLand($areaLand: String, $haveBuild: String, $typeLand: String, $waterSourcesLand: String, $commercialValue: String) {
  createLand(
    input: {land: {areaLand: $areaLand, haveBuild: $haveBuild, typeLand: $typeLand, waterSourcesLand: $waterSourcesLand, commercialValue: $commercialValue}}
  ) {
    land {
      areaLand
      haveBuild
      id
      typeLand
      waterSourcesLand
      commercialValue
    }
  }
}
`

export const EDIT_LAND = gql`
mutation editLand($idToEdit: Int!, $areaLand: String, $haveBuild: String, $typeLand: String, $waterSourcesLand: String, $commercialValue: String) {
  updateLandById(
    input: { id: $idToEdit, landPatch: {
      areaLand: $areaLand, 
      haveBuild: $haveBuild, 
      typeLand: $typeLand, 
      waterSourcesLand: $waterSourcesLand,
      commercialValue: $commercialValue
    }}
  ) {
    land {
      areaLand
      haveBuild
      id
      typeLand
      waterSourcesLand
      commercialValue
    }
  }
}
`

export const DELETE_LAND = gql`
mutation deleteLand($idToDelete: Int!) {
  deleteLandById(
    input: {
      id: $idToDetele
    }
  ) {
    deletedLandId
  }
}
`
import { gql } from '@apollo/client'


export const CREATE_BUILD = gql`
mutation addBuild($adressBuild: String, $floorsBuild: String, $totalAreaBuild: String, $typeBuild: String) {
  createBuild(
    input: {
      build: {
        floorsBuild: $floorsBuild, 
        adressBuild: $adressBuild, 
        totalAreaBuild: $totalAreaBuild, 
        typeBuild: $typeBuild
      }
    }
  ) {
    build {
      adressBuild
      id
      floorsBuild
      totalAreaBuild
      typeBuild
    }
  }
}
`

export const EDIT_BUILD = gql`
  mutation editBuild ($idToEdit: Int!, $adressBuild: String, $floorsBuild: String, $totalAreaBuild: String) {
    updateBuildById(
      input: { id: $idToEdit, buildPatch: {
        adressBuild: $adressBuild
        floorsBuild: $floorsBuild
        totalAreaBuild: $totalAreaBuild
        typeBuild: $typeBuild
      }
    }
  ) {
    build {
      adressBuild
      floorsBuild
      totalAreaBuild
      typeBuild
    }
  }
}
`


export const DELETE_BUILD = gql`
mutation deleteBuild($idToDelete: Int!) {
  deleteBuildById(
    input: {
      id: $idToDelete
    }) {
    deletedBuildId
  }
}
`
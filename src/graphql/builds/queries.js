import { gql } from '@apollo/client'


export const ALL_BUILDS = gql`
  query {
    allBuilds {
      nodes {
        adressBuild
        floorsBuild
        id
        totalAreaBuild
        typeBuild
      }
    }
  }
`

export const FIND_BUILDS = gql`
  query 
    buildById($idToSearch: Int!) {
      buildById(id: $idToSearch) {
        adressBuild
        floorsBuild
        id
        totalAreaBuild
        typeBuild
      }
    }
`
import { gql } from '@apollo/client'


export const ALL_LANDS = gql`
query {
  allLands {
    nodes {
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

export const FIND_LANDS = gql`
query
  landById($idToSearch: Int!) {
    landById(id: $idToSearch) {
      areaLand
      haveBuild
      id
      typeLand
      waterSourcesLand
      commercialValue
    }
  }
`
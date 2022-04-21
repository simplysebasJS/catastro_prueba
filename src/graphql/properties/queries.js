import { gql } from "@apollo/client";

export const ALL_PROPERTIES = gql`
query {
  allProperties {
    nodes {
      build
      id
      land
      owner
    }
  }
}
`

export const ALL_SELECT_DATA = gql`
query {
  allOwners {
    nodes {
      adress
      companyName
      documentNumber
      documentType
      email
      id
      lastName
      name
      nit
      nodeId
      phone
    }
  }
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
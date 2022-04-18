import { gql } from '@apollo/client'

export const ALL_OWNERS = gql`
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
          phone
          typePerson
        }
      }
    }
    `

export const FIND_OWNER = gql`
    query 
      ownerById($idToSearch: Int!) {
        ownerById(id: $idToSearch) {
        adress
        companyName
        documentNumber
        documentType
        email
        name
        lastName
        nit
        phone
        typePerson
        } 
      }
    `
import { gql } from "@apollo/client";

export const GET_ALL_LOCATIONS = (page: number, filter: string) => gql`
  query {
    locations (page: ${page}, filter:{name:"${filter}"}){
      results {
        id
        name
        dimension
        type
        residents{
          name
        }
      }
    }
  }
`;

export const GET_LOCATION = (id: string) => gql`
  query {
    location(id: ${id}) {
        id
        name
        type
        dimension
        created
        residents{
            id
            name
            image
        }
    }
  }
`;

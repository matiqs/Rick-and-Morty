import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = (page: number, filter: string) => gql`
query {
  characters (page:${page}, filter:{name:"${filter}"}) {
    results {
      id
      name
      species
      image
    }
  }
}
`;

export const GET_CHARACTER = (id: string) => gql`
  query {
    character(id: ${id}) {
      id
      name
      status
      species
      gender
      image
      created
      type
      origin{
        id
        name
      }
      location{
        id
        name
      }
      episode{
        id
        name
        episode
      }
    }
  }
`;

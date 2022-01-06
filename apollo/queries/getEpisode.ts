import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = (page: number, filter: string) => gql`
  query {
    episodes (page: ${page}, filter:{name:"${filter}"}){
      results {
        id
        name
        air_date
        episode
        characters{
          name
        }
      }
    }
  }
`;

export const GET_EPISODE = (id: any) => gql`
  query {
    episode(id: ${id}) {
        id
        name
        air_date
        episode
        created
        characters{
          id
          name
          species
          image
        }
    }
  }
`;

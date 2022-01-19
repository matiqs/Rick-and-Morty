import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";
import { useQuery } from "@apollo/client";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import Pagination from "../components/Pagination/Pagination";
import { StyledCardContainer, StyledContainer } from "../styles/Styled_globals";
import { usePagination } from "../hooks/usePagination";
import { useSearched } from "../hooks/useSearched";
import { GET_ALL_CHARACTERS } from "../apollo/queries/getCharacter";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import Searched from "../components/Searched/Searched";
import { useEffect, useState } from "react";
import { Character } from "../models/models";
import IsNotFoundData from "../components/IsNotFoundData/IsNotFoundData";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isNotFoundData, setIsNotFoundData] = useState(false);
  const { page, setPage, nextPage, returnPage } = usePagination();
  const { filter, inputValue, handleChange } = useSearched(setPage);
  const { data, loading } = useQuery(GET_ALL_CHARACTERS(page, filter));

  useEffect(() => {
    if (data) {
      setIsNotFoundData(false);
      setCharacters(data.characters.results);
    } else {
      setIsNotFoundData(true);
    }
  }, [data]);

  if (characters.length === 0) {
    return <LoadingPage loading={loading} />;
  }

  return (
    <div>
      <Head>
        <title>Characters</title>
      </Head>
      <Wrapper title={"Characters"} />
      <StyledContainer>
        <Searched
          value={inputValue}
          searchType={"characters"}
          handleChange={handleChange}
        />
        <StyledCardContainer>
          {!loading && isNotFoundData ? (
            <IsNotFoundData searchTerm={inputValue} />
          ) : (
            characters.map((element: Character) => {
              return (
                <div key={element.id}>
                  <CharacterCard character={element} />
                </div>
              );
            })
          )}
        </StyledCardContainer>
        {!isNotFoundData ? (
          <Pagination
            nextPage={characters.length > 19 ? nextPage : null}
            returnPage={returnPage}
          />
        ) : (
          ""
        )}
      </StyledContainer>
    </div>
  );
};

export default Characters;

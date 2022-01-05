import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";
import { useQuery } from "@apollo/client";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import Pagination from "../components/Pagination/Pagination";
import { StyledCardContainer } from "../styles/Styled_globals";
import { usePagination } from "../hooks/usePagination";
import { useSearched } from "../hooks/useSearched";
import { GET_ALL_CHARACTERS } from "../apollo/queries/getCharacter";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import Searched from "../components/Searched/Searched";
import { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { page, setPage, nextPage, returnPage } = usePagination();
  const { filter, inputValue, handleChange, handleSubmit } =
    useSearched(setPage);
  const { data, loading } = useQuery(GET_ALL_CHARACTERS(page, filter));
  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data]);

  if (characters.length === 0) {
    return <LoadingPage loading={loading} />;
  }

  return (
    <div>
      {console.log(page, filter)}
      <Head>
        <title>Characters</title>
      </Head>
      <Wrapper title={"Characters"} />
      <Searched
        value={inputValue}
        searchType={"characters"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <StyledCardContainer>
        {characters.map((element, index) => {
          return (
            <div key={index}>
              <CharacterCard character={element} />
            </div>
          );
        })}
      </StyledCardContainer>
      <Pagination nextPage={nextPage} returnPage={returnPage} />
    </div>
  );
};

export default Characters;

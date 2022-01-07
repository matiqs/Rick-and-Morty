import Head from "next/head";
import { useQuery } from "@apollo/client";
import { StyledCardContainer } from "../styles/Styled_globals";
import Wrapper from "../components/Wrapper/Wrapper";
import Pagination from "../components/Pagination/Pagination";
import EpisodeCard from "../components/EpisodeCard/EpisodeCard";
import { usePagination } from "../hooks/usePagination";
import { GET_ALL_EPISODES } from "../apollo/queries/getEpisode";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import { useEffect, useState } from "react";
import { useSearched } from "../hooks/useSearched";
import Searched from "../components/Searched/Searched";
import { Episode } from "../models/models";
import IsNotFoundData from "../components/IsNotFoundData/IsNotFoundData";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isNotFoundData, setIsNotFoundData] = useState(false);
  const { page, setPage, nextPage, returnPage } = usePagination();
  const { filter, inputValue, handleChange, handleSubmit } =
    useSearched(setPage);
  const { data, loading } = useQuery(GET_ALL_EPISODES(page, filter));

  useEffect(() => {
    if (data) {
      setIsNotFoundData(false);
      setEpisodes(data.episodes.results);
    } else {
      setIsNotFoundData(true);
    }
  }, [data]);

  if (episodes.length === 0) {
    return <LoadingPage loading={loading} />;
  }

  return (
    <div>
      <Head>
        <title>Episodes</title>
      </Head>
      <Wrapper title={"Episodes"} />
      <Searched
        value={inputValue}
        searchType={"episodes"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <StyledCardContainer>
        {!loading && isNotFoundData ? (
          <IsNotFoundData searchTerm={inputValue} />
        ) : (
          episodes.map((element: Episode, index: number) => {
            return (
              <div key={index}>
                <EpisodeCard episode={element} />
              </div>
            );
          })
        )}
      </StyledCardContainer>
      {!isNotFoundData ? (
        <Pagination nextPage={nextPage} returnPage={returnPage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Episodes;

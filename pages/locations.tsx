import Head from "next/head";
import { useQuery } from "@apollo/client";
import Header from "../components/Wrapper/Wrapper";
import LocationCard from "../components/LocationCard/LocationCard";
import { StyledCardContainer } from "../styles/Styled_globals";
import Pagination from "../components/Pagination/Pagination";
import { usePagination } from "../hooks/usePagination";
import { GET_ALL_LOCATIONS } from "../apollo/queries/getLocation";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import { useEffect, useState } from "react";
import { useSearched } from "../hooks/useSearched";
import Searched from "../components/Searched/Searched";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const { page, setPage, nextPage, returnPage } = usePagination();
  const { filter, inputValue, handleChange, handleSubmit } =
    useSearched(setPage);
  const { data, loading } = useQuery(GET_ALL_LOCATIONS(page, filter));

  useEffect(() => {
    if (data) {
      setLocations(data.locations.results);
    }
  }, [data]);

  if (locations.length === 0) {
    return <LoadingPage loading={loading} />;
  }

  return (
    <div>
      <Head>
        <title>Locations</title>
      </Head>
      <Header title={"Locations"} />
      <Searched
        value={inputValue}
        searchType={"locations"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <StyledCardContainer>
        {locations.map((element, index) => {
          return (
            <div key={index}>
              <LocationCard location={element} />
            </div>
          );
        })}
      </StyledCardContainer>
      <Pagination nextPage={nextPage} returnPage={returnPage} />
    </div>
  );
};

export default Locations;

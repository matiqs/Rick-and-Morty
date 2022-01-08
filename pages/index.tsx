import Head from "next/head";
import Link from "next/link";
import * as BsIcons from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import FavoriteCard from "../components/FavoriteCharacter/FavoriteCard";
import Wrapper from "../components/Wrapper/Wrapper";
import { FavContext } from "../context/FavsContext";
import Pagination from "../components/Pagination/Pagination";
import { StyledCardButton } from "../styles/Styled_globals";
import {
  StyledDashboardContainer,
  StyledDashboardHeader,
  StyledDashboardBody,
} from "../styles/Styled_Index";
import { Character } from "../models/models";

export default function Home() {
  const { favorites } = useContext(FavContext);
  const [index, setIndex] = useState(10);

  useEffect(() => {
    if (favorites.slice(index - 10, index).length == 0) {
      setIndex(10);
    }
  }, [favorites, favorites.length, index]);

  const nextPage = () => {
    if (favorites.length > 10 && index < favorites.length) {
      setIndex(index + 10);
    }
  };

  const returnPage = () => {
    if (index > 10) {
      setIndex(index - 10);
    }
  };

  return (
    <div>
      <Head>
        <title>{`Rick & Morty`}</title>
      </Head>
      <Wrapper title={"DASHBOARD"} />
      <StyledDashboardContainer>
        <StyledDashboardHeader>
          <div>
            <BsIcons.BsStars color="#ffd100" />
            <p>Favorite characters: {favorites.length}</p>
          </div>
          <Link href={"/characters"} passHref>
            <StyledCardButton>See all characters</StyledCardButton>
          </Link>
        </StyledDashboardHeader>
        <StyledDashboardBody>
          {favorites
            .slice(index - 10, index)
            .map((element: Character, index: number) => {
              return (
                <div key={index}>
                  <FavoriteCard character={element} />
                </div>
              );
            })}
        </StyledDashboardBody>
      </StyledDashboardContainer>
      <Pagination nextPage={nextPage} returnPage={returnPage} />
    </div>
  );
}

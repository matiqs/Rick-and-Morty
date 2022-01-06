import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_CHARACTER } from "../../apollo/queries/getCharacter";
import Image from "next/image";
import Link from "next/link";
import AliveIcon from "../../components/AliveIcon/AliveIcon";
import {
  DetailsCharacter,
  DetailsCharacterHeader,
  DetailsItem,
} from "../../components/CharacterCard/StyledCharacterCard";
import {
  StyledDetailsContainer,
  StyledDetailsSection,
  StyledItem,
  StyledItemsContainer,
} from "../../styles/Styled_globals";
import { useContext, useEffect, useState } from "react";
import { FavContext } from "../../context/FavsContext";
import * as FaIcons from "react-icons/fa";
import useToast from "../../hooks/useToast";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { Character, Episode } from "../../models/models";

const DetailCharacter = () => {
  const [addedToFav, setAddedToFav] = useState(false);
  const { favorites, toggleFavorite } = useContext(FavContext);
  const { Toaster, toastSucces, toastWarning, toastError } = useToast();
  const router = useRouter();
  const { data, loading, error } = useQuery(
    GET_CHARACTER(router.query.character)
  );

  useEffect(() => {
    if (data) {
      if (favorites.find((c: Character) => c.name === data.character.name)) {
        setAddedToFav(true);
      } else {
        setAddedToFav(false);
      }
    }
  }, [loading, data, favorites]);

  if (loading) {
    return <LoadingPage loading={loading} />;
  }

  const character = data.character;

  return (
    <StyledDetailsContainer>
      <StyledDetailsSection>
        <Image
          src={character.image}
          width={400}
          height={400}
          alt={character.name}
          title={character.name}
        />
        <DetailsCharacter>
          <DetailsCharacterHeader>
            <h1>{character.name}</h1>
            <FaIcons.FaStar
              onClick={() =>
                toggleFavorite(data.character, toastSucces, toastError)
              }
              color={addedToFav ? "#ffd100" : "#333"}
            />
          </DetailsCharacterHeader>

          <Toaster />
          <DetailsItem>
            <p>
              <b>STATUS</b> {character.status}
            </p>
            <AliveIcon status={character.status} />
          </DetailsItem>
          <DetailsItem>
            <p>
              <b>SPECIES:</b> {character.species}
            </p>
          </DetailsItem>
          <DetailsItem>
            <p>
              <b>TYPE:</b> {character.type ? character.type : "unknown"}{" "}
            </p>
          </DetailsItem>
          <DetailsItem>
            <p>
              <b>GENDER</b>: {character.gender}
            </p>
          </DetailsItem>
          <DetailsItem>
            <p>
              <b>ORIGIN</b>: {character.origin.name}
            </p>
          </DetailsItem>
          <DetailsItem>
            <p>
              <b>LOCATION</b>: {character.location.name}
            </p>
          </DetailsItem>
        </DetailsCharacter>
      </StyledDetailsSection>
      <StyledDetailsSection>
        <StyledItemsContainer>
          <h2>Episodes where it appears:</h2>
          {character.episode.map((element: Episode, index: number) => {
            return (
              <StyledItem key={index}>
                <p>
                  <b>{element.episode}: </b>
                  {element.name}
                </p>
                <Link href={`/episode/${element.id}`} passHref>
                  <button>View detail</button>
                </Link>
              </StyledItem>
            );
          })}
        </StyledItemsContainer>
      </StyledDetailsSection>
      <StyledDetailsSection>
        <p>
          <b>Creation date: </b>
          {character.created}
        </p>
      </StyledDetailsSection>
    </StyledDetailsContainer>
  );
};

export default DetailCharacter;

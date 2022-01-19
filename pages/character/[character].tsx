import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_CHARACTER } from "../../apollo/queries/getCharacter";
import Image from "next/image";
import Link from "next/link";
import AliveIcon from "../../components/AliveIcon/AliveIcon";
import {
  StyledDetailsContainer,
  StyledDetailsSection,
  StyledItem,
  StyledItemsContainer,
  StyledDetailsElement,
  StyledItemBtn,
} from "../../styles/Styled_globals";
import {
  DetailsCharacterImage,
  DetailsCharacterHeader,
  DetailsCharacterItem,
} from "../../styles/Styled_DetailsCharacter";
import { useContext, useEffect, useState } from "react";
import { FavContext } from "../../context/FavsContext";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import useToast from "../../hooks/useToast";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { Character, Episode } from "../../models/models";
import { StatusContainer } from "../../components/AliveIcon/StyledAliveIcon";

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
      if (favorites.find((c: Character) => c.id === data.character.id)) {
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
        <DetailsCharacterImage>
          <Image
            src={character.image}
            layout="fill"
            alt={character.name}
            title={character.name}
            objectFit="cover"
          />
        </DetailsCharacterImage>
        <StyledDetailsElement>
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
          <DetailsCharacterItem>
            <StatusContainer>
              <p>
                <b>STATUS</b> {character.status}
              </p>
              <AliveIcon status={character.status} />
            </StatusContainer>
          </DetailsCharacterItem>
          <DetailsCharacterItem>
            <p>
              <b>SPECIES:</b> {character.species}
            </p>
          </DetailsCharacterItem>
          <DetailsCharacterItem>
            <p>
              <b>TYPE:</b> {character.type ? character.type : "unknown"}{" "}
            </p>
          </DetailsCharacterItem>
          <DetailsCharacterItem>
            <p>
              <b>GENDER</b>: {character.gender}
            </p>
          </DetailsCharacterItem>
          <DetailsCharacterItem>
            <p>
              <b>ORIGIN</b>: {character.origin.name}
            </p>
          </DetailsCharacterItem>
          <DetailsCharacterItem>
            <p>
              <b>LOCATION</b>: {character.location.name}
            </p>
          </DetailsCharacterItem>
        </StyledDetailsElement>
      </StyledDetailsSection>
      <StyledDetailsSection>
        <StyledItemsContainer>
          <h3>Episodes where it appears:</h3>
          {character.episode.map((element: Episode) => {
            return (
              <StyledItem key={element.id}>
                <p>
                  <b>{element.episode}: </b>
                  {element.name}
                </p>
                <Link href={`/episode/${element.id}`} passHref>
                  <StyledItemBtn>
                    <BiIcons.BiDetail />
                    <p>View detail</p>
                  </StyledItemBtn>
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

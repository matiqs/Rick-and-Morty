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

const Character = () => {
  const [addedToFav, setAddedToFav] = useState(false);
  const { favorites, toggleFavorite } = useContext(FavContext);
  const { Toaster, toastSucces, toastWarning, toastError } = useToast();
  const router = useRouter();
  const { data, loading, error } = useQuery(
    GET_CHARACTER(router.query.character)
  );

  useEffect(() => {
    if (data) {
      if (favorites.find((c) => c.name === data.character.name)) {
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
            <p>ESTADO: {character.status}</p>
            <AliveIcon status={character.status} />
          </DetailsItem>
          <DetailsItem>
            <p>ESPECIE: {character.species}</p>
          </DetailsItem>
          <DetailsItem>
            <p>TIPO: {character.type ? character.type : "unknown"} </p>
          </DetailsItem>
          <DetailsItem>
            <p>GENERO: {character.gender}</p>
          </DetailsItem>
          <DetailsItem>
            <p>ORIGEN: {character.origin.name}</p>
          </DetailsItem>
          <DetailsItem>
            <p>UBICACION: {character.location.name}</p>
          </DetailsItem>
        </DetailsCharacter>
      </StyledDetailsSection>
      <StyledDetailsSection>
        <StyledItemsContainer>
          <h2>Episodios en donde aparece:</h2>
          {character.episode.map((element, index) => {
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
          <b>Fecha de creacion: </b>
          {character.created}
        </p>
      </StyledDetailsSection>
    </StyledDetailsContainer>
  );
};

export default Character;

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../apollo/queries/getCharacter";
import { useContext, useEffect, useState } from "react";
import { FavContext } from "../../context/FavsContext";
import { StyledCardButton } from "../../styles/Styled_globals";
import { Card, FavContainer } from "./StyledCharacterCard";
import * as FaIcons from "react-icons/fa";
import useToast from "../../hooks/useToast";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Character } from "../../models/models";

const CharacterCard = ({ character }: { character: Character }) => {
  const [addedToFav, setAddedToFav] = useState(false);
  const { data, loading } = useQuery(GET_CHARACTER(character.id));
  const { favorites, toggleFavorite } = useContext(FavContext);
  const { Toaster, toastSucces, toastError } = useToast();

  useEffect(() => {
    if (favorites.find((c: Character) => c.id === character.id)) {
      setAddedToFav(true);
    } else {
      setAddedToFav(false);
    }
  }, [character.id, favorites]);

  if (!character) {
    return <LoadingPage loading={loading} />;
  }

  return (
    <Card>
      <FavContainer>
        <FaIcons.FaStar
          onClick={() =>
            toggleFavorite(data.character, toastSucces, toastError)
          }
          color={addedToFav ? "#ffd100" : "#333"}
        />
      </FavContainer>
      <Toaster />
      <Image src={character.image} width={260} height={240} alt="" />
      <h2>{character.name}</h2>
      <Link href={`/character/${character.id}`} passHref>
        <StyledCardButton>View detail</StyledCardButton>
      </Link>
    </Card>
  );
};
export default CharacterCard;

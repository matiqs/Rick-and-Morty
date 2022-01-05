import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FavContext } from "../../context/FavsContext";
import { StyledCardButton } from "../../styles/Styled_globals";
import { Card, DeleteButton } from "../FavoriteCharacter/StyledFavoriteCard";
import useToast from "../../hooks/useToast";

const FavoriteCard = ({ character }) => {
  const { removeToFavorites } = useContext(FavContext);
  const { Toaster, toastSucces, toastError } = useToast();

  return (
    <Card>
      <Image src={character.image} width={120} height={120} alt="" />
      <p>{character.name}</p>
      <Link href={`/character/${character.id}`} passHref>
        <StyledCardButton>See detail</StyledCardButton>
      </Link>
      <DeleteButton onClick={() => removeToFavorites(character, toastError)}>
        Delete
      </DeleteButton>
      <Toaster />
    </Card>
  );
};

export default FavoriteCard;

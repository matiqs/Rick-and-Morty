import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FavContext } from "../../context/FavsContext";
import { StyledCardButton } from "../../styles/Styled_globals";
import { Card, DeleteButton } from "../FavoriteCharacter/StyledFavoriteCard";
import useToast from "../../hooks/useToast";
import { Character } from "../../models/models";
import * as RiIcons from "react-icons/ri";

const FavoriteCard = ({ character }: { character: Character }) => {
  const { removeToFavorites } = useContext(FavContext);
  const { Toaster, toastError } = useToast();

  return (
    <Card>
      <Image src={character.image} width={120} height={120} alt="" />
      <p>{character.name}</p>
      <Link href={`/character/${character.id}`} passHref>
        <StyledCardButton>View detail</StyledCardButton>
      </Link>
      <DeleteButton onClick={() => removeToFavorites(character, toastError)}>
        <RiIcons.RiDeleteBin5Line />
        <p>Delete</p>
      </DeleteButton>
      <Toaster />
    </Card>
  );
};

export default FavoriteCard;

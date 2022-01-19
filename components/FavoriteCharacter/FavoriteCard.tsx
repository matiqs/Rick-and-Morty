import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FavContext } from "../../context/FavsContext";
import {
  Card,
  CardImage,
  CardText,
  DeleteButton,
  DetailSButton,
} from "../FavoriteCharacter/StyledFavoriteCard";
import useToast from "../../hooks/useToast";
import { Character } from "../../models/models";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

const FavoriteCard = ({ character }: { character: Character }) => {
  const { toggleFavorite } = useContext(FavContext);
  const { Toaster, toastError, toastSucces } = useToast();

  console.log(character.image);

  return (
    <Card>
      <CardImage>
        <Image src={character.image} layout="fill" alt="" />
      </CardImage>
      <CardText>
        <p>{character.name}</p>
      </CardText>
      <Link href={`/character/${character.id}`} passHref>
        <DetailSButton>
          <BiIcons.BiDetail />
          <p>View detail</p>
        </DetailSButton>
      </Link>
      <DeleteButton
        onClick={() => toggleFavorite(character, toastSucces, toastError)}
      >
        <RiIcons.RiDeleteBin5Line />
        <p>Delete</p>
      </DeleteButton>
      <Toaster />
    </Card>
  );
};

export default FavoriteCard;

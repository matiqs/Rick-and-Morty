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
  const { removeToFavorites } = useContext(FavContext);
  const { Toaster, toastError } = useToast();

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
      <DeleteButton onClick={() => removeToFavorites(character, toastError)}>
        <RiIcons.RiDeleteBin5Line />
        <p>Delete</p>
      </DeleteButton>
      <Toaster />
    </Card>
  );
};

export default FavoriteCard;

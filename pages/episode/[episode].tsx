import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GET_EPISODE } from "../../apollo/queries/getEpisode";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { Character } from "../../models/models";
import * as BiIcons from "react-icons/bi";
import {
  StyledDetailsContainer,
  StyledDetailsElement,
  StyledDetailsSection,
  StyledItem,
  StyledItemBtn,
  StyledItemsContainer,
} from "../../styles/Styled_globals";

const DetailEpisode = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_EPISODE(router.query.episode));

  if (loading) {
    return <LoadingPage loading={loading} />;
  }

  const episode = data.episode;

  return (
    <StyledDetailsContainer>
      <StyledDetailsSection>
        <StyledDetailsElement>
          <h2>{`"${episode.name}"`}</h2>
          <p>
            <b>Episode: </b>
            {episode.episode}
          </p>
          <p>
            This episode aired for the first time on <b>{episode.air_date}</b>
          </p>
        </StyledDetailsElement>
      </StyledDetailsSection>
      <StyledDetailsSection>
        <StyledItemsContainer>
          <h3>Characters that appear</h3>
          {episode.characters.map((element: Character) => {
            return (
              <StyledItem key={element.id}>
                <Image src={element.image} width={60} height={60} alt="" />
                <p>
                  <b>{element.name}</b>
                </p>
                <Link href={`/character/${element.id}`} passHref>
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
          <b>Creation date:</b>
          {episode.created}
        </p>
      </StyledDetailsSection>
    </StyledDetailsContainer>
  );
};
export default DetailEpisode;

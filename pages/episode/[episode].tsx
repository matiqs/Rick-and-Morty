import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GET_EPISODE } from "../../apollo/queries/getEpisode";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { Character } from "../../models/models";
import {
  StyledDetailsContainer,
  StyledDetailsElement,
  StyledDetailsSection,
  StyledItem,
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
          <h1>{`"${episode.name}"`}</h1>
          <p>
            <b>Episode: </b>
            {episode.episode}
          </p>
        </StyledDetailsElement>
      </StyledDetailsSection>
      <StyledDetailsSection>
        <p>
          This episode aired for the first time on <b>{episode.air_date}</b>
        </p>
      </StyledDetailsSection>
      <StyledDetailsSection>
        <StyledItemsContainer>
          <h2>Characters that appear</h2>
          {episode.characters.map((element: Character, index: number) => {
            return (
              <StyledItem key={index}>
                <Image src={element.image} width={60} height={60} alt="" />
                <p>
                  <b>{element.name}</b>
                </p>
                <Link href={`/character/${element.id}`} passHref>
                  <button>View detail</button>
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

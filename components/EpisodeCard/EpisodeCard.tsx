import Link from "next/link";
import { StyledCardButton } from "../../styles/Styled_globals";
import { Card } from "../EpisodeCard/StyledEpisodeCard";

const EpisodeCard = ({ episode }) => {
  return (
    <Card>
      <h2>{episode.name}</h2>
      <p>
        <b>Episode: </b>
        {episode.episode}
      </p>
      <p>
        <b>Characters: </b>
        {episode.characters.length}
      </p>
      <Link href={`/episode/${episode.id}`} passHref>
        <StyledCardButton>See detail</StyledCardButton>
      </Link>
    </Card>
  );
};

export default EpisodeCard;

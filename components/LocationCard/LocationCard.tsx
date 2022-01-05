import Link from "next/link";
import { StyledCardButton } from "../../styles/Styled_globals";
import { Card } from "../LocationCard/StyledLocationCard";

const LocationCard = ({ location }) => {
  return (
    <Card>
      <h1>{location.name}</h1>
      <p>
        <b>Dimension: </b>
        {location.dimension}
      </p>
      <p>
        <b>Type: </b>
        {location.type}
      </p>
      <p>
        <b>Residents: </b>
        {location.residents.length}
      </p>
      <Link href={`/location/${location.id}`} passHref>
        <StyledCardButton>See detail</StyledCardButton>
      </Link>
    </Card>
  );
};

export default LocationCard;

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_LOCATION } from "../../apollo/queries/getLocation";
import Image from "next/image";
import Link from "next/link";
import {
  StyledDetailsContainer,
  StyledDetailsElement,
  StyledDetailsSection,
  StyledItem,
  StyledItemsContainer,
} from "../../styles/Styled_globals";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

const Location = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(
    GET_LOCATION(router.query.location)
  );

  if (loading) {
    return <LoadingPage loading={loading} />;
  }

  const location = data.location;

  return (
    <StyledDetailsContainer>
      <StyledDetailsSection>
        <StyledDetailsElement>
          <h1>{`"${location.name}"`}</h1>
          <p>
            <b>Dimension: </b>
            {location.dimension}
          </p>
          <p>
            <b>Type: </b>
            {location.type}
          </p>
        </StyledDetailsElement>
      </StyledDetailsSection>
      <StyledDetailsSection>
        <StyledItemsContainer>
          <h2>Residents</h2>
          {location.residents.map((element, index) => {
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
          <b>Creation date: </b>
          {location.created}
        </p>
      </StyledDetailsSection>
    </StyledDetailsContainer>
  );
};
export default Location;

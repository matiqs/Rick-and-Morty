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
  StyledItemBtn,
  StyledItemsContainer,
} from "../../styles/Styled_globals";
import * as BiIcons from "react-icons/bi";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { Character } from "../../models/models";

const DetailLocation = () => {
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
          <h2>{`"${location.name}"`}</h2>
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
          <h3>Residents</h3>
          {location.residents.map((element: Character, index: number) => {
            return (
              <StyledItem key={index}>
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
          <b>Creation date: </b>
          {location.created}
        </p>
      </StyledDetailsSection>
    </StyledDetailsContainer>
  );
};
export default DetailLocation;

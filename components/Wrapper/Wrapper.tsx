import { Container } from "./StyledWrapper";
const Wrapper = ({ title }: { title: String }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};
export default Wrapper;

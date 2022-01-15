import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusIcon = styled.div`
  svg {
    color: ${(props) => props.color}
`;

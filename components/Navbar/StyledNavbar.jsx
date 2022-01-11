import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #121919;
  padding: 0px 2vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    background-color: none;
    color: #00dcbe;
    font-size: 2rem;
    cursor: pointer;
  }
  img:hover {
    cursor: pointer;
  }
`;

export const SideBarMenu = styled.ul`
  padding: 20px 0;
  list-style: none;
`;

export const SideBarItem = styled.li`
  margin: 26px 0;
  padding: 10px 0px 10px 16px;
  color: #00dcbe;
  font-size: 18px;
  display: flex;
  align-items: center;
  width: 100%;
  svg {
    color: #00dcbe;
    margin-right: 14px;
  }
  &:hover {
    transition: 0.5s;
    cursor: pointer;
    color: #fff;
    background: #009f9a;
    svg {
      transition: 0.5s;
      color: #fff;
    }
  }
`;

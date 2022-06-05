import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../shared/components/container";

const OutContainer = styled.main`
  width: 100%;
  flex-grow: 1;
  background-color: #ecf2f9;
  padding: 0 1rem;

`;

function Main() {
  return (
    <OutContainer>
      <Container>
        <Outlet />
      </Container>
    </OutContainer>
  );
}

export default Main;

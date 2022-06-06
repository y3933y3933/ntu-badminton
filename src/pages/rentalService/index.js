import Search from "./search";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 2.5rem;
`;

function RentalService() {
  return (
    <Wrapper>
      <Search />
      {/* <Precautions /> */}
    </Wrapper>
  );
}

export default RentalService;

import styled from "styled-components";
import { MdSportsHandball } from "react-icons/md";
import { IconContext } from "react-icons";
import { Container } from "../../shared/components/container";

const HeaderWrapper = styled.header`
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  flex-shrink: 0;
`;

const HeaderInnerWrapper = styled(Container)`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const Title = styled.h2`
  color: #647693;
  font-weight: 600;
  font-size: 1.2rem;
  margin-left: 0.5rem;
  letter-spacing: 1px;

  & span {
    font-size: 0.8rem;
    margin-left: 10px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <IconContext.Provider
          value={{
            size: "2rem",
            color: "#72b1eb",
            style: { cursor: "pointer" },
          }}
        >
          <MdSportsHandball />
        </IconContext.Provider>
        <Title>
          合太綜合體育館
          <span>線上預約系統</span>
        </Title>
      </HeaderInnerWrapper>
    </HeaderWrapper>
  );
}

export default Header;

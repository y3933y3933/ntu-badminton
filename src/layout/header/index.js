import styled from "styled-components";
import { MdSportsHandball } from "react-icons/md";
import { Container } from "../../shared/components/container";
import Menu from "../../components/menu";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  flex-shrink: 0;
`;

const HeaderInnerWrapper = styled(Container)`
  padding: 0 1rem;
  display: flex;
  height: 3rem;
  align-items: center;
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

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <Link to="/">
          <Logo>
            <MdSportsHandball size="2rem" color="#72b1eb" />
            <Title>
              合太綜合體育館
              <span>線上預約系統</span>
            </Title>
          </Logo>
        </Link>
        <Menu />
      </HeaderInnerWrapper>
    </HeaderWrapper>
  );
}

export default Header;

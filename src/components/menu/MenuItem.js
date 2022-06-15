import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  display: inline-block;
  color: #647693;
  font-weight: 600;
  &:hover {
    color: #63a8e7;

    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background: #63a8e7;
    transition: width 0.5s 0.1s;
  }
`;

const ItemWrapper = styled.div`
  .active {
    color: #63a8e7;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: #63a8e7;
    }
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

function MenuItem({ menu }) {
  console.log(menu);
  if (!menu) {
    return null;
  }
  return (
    <ItemWrapper>
      <StyledLink to={menu.route}>{menu.label}</StyledLink>
    </ItemWrapper>
  );
}

export default MenuItem;

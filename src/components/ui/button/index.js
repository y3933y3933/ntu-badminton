import styled from "styled-components";

const CustomButton = styled.button`
  min-width: 5rem;
  text-align: center;
  background: #6cb1f5;
  font-weight: 500;
  border-radius: 5px;
  padding: 4px 16px;
  color: white;
  transition: border-color 0.2s;
  &:hover {
    filter: brightness(1.1);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Button({ children }) {
  return <CustomButton>{children}</CustomButton>;
}

export default Button;

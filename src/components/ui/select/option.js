import styled from "styled-components";

const OptionWrapper = styled.div`
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  &:hover {
    background: #ecf2f9;
  }
`;

function Option({ option, selectOption = (f) => f }) {
  if (!option) {
    return null;
  }
  return (
    <OptionWrapper onClick={() => selectOption(option)}>
      {option.label}
    </OptionWrapper>
  );
}

export default Option;

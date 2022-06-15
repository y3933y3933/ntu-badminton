import Option from "./option";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const OutContainer = styled.div`
  min-width: 10rem;
  position: relative;
`;

const SelectContainer = styled.div`
  // border: 1px solid #dfdfdf;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const OptionsWrapper = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  z-index: 5;
`;

function Select({ placeholder = "請選擇", options = [], defaultValue = null }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  function toggle() {
    setOpen(!open);
  }

  function selectOption(value) {
    setOpen(false);
    setSelected(value);
  }

  return (
    <OutContainer ref={wrapperRef}>
      <SelectContainer
        onClick={toggle}
        style={{ borderColor: open ? "#63a8e7" : "#dfdfdf" }}
      >
        {selected ? selected.label : placeholder}
        {open ? <BiChevronUp size="1.5rem" /> : <BiChevronDown size="1.5rem" />}
      </SelectContainer>
      {open && options.length > 0 && (
        <OptionsWrapper>
          {options.map((option) => (
            <Option
              selectOption={selectOption}
              key={option.id}
              option={{
                label: option.label,
                value: option.value,
              }}
            />
          ))}
        </OptionsWrapper>
      )}
    </OutContainer>
  );
}

export default Select;

import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackDrop = styled.div`
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ModalContent = styled.div`
  background: white;
  position: relative;
  z-index: 20;
  min-width: 30rem;
  height: 20rem;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 320px;
`;

const ModalHeader = styled.div`
  color: #4c688e;
  font-weight: 600;
  padding: 4px 8px;
  flex-shirnk: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ModalBody = styled.div`
  flex-grow: 1;
  padding: 4px 8px;
  white-space: pre-line;
  // background: blue;
`;
const ModalFooter = styled.div`
  padding: 4px 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  text-align: right;
`;

function Modal({
  show = false,
  hasBackDrop = true,
  hasClose = true,
  onClose = (f) => f,
  header,
  footer,
  body,
}) {
  if (!show) {
    return null;
  }
  return (
    <ModalContainer>
      {hasBackDrop && <BackDrop />}
      <ModalContent>
        <ModalHeader>
          {header}
          {hasClose && (
            <AiOutlineClose
              onClick={onClose}
              cursor="pointer"
              style={{ marginLeft: "auto" }}
            />
          )}
        </ModalHeader>
        <ModalBody>{body}</ModalBody>
        {footer && (
          <ModalFooter>
            <small>{footer}</small>
          </ModalFooter>
        )}
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;

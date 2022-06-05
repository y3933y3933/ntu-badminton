import styled from "styled-components";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container } from "../../shared/components/container";

const Bg = styled.footer`
  background-color: #63a8e7;
`;

const FooterWrapper = styled(Container)`
  min-height: 3rem;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

// const FooterWrapper = styled.footer`
// color: #eceff1;
// & h2 {
//   font-weight: 600;
// }
// & > div:not(:last-child) {
//   margin-right: 4rem;
// }
// @media screen and (min-width: 1024px) {
//   max-width: 1024px;
// }
// margin: 0 auto;
// `;

const IconText = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  & > svg {
    margin-right: 8px;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  &:not(:last-child) {
    margin-right: 1rem;
  }

  & span {
    text-align: right;
  }
  & span:not(:last-child) {
    margin-bottom: 4px;
  }
`;

function Footer() {
  return (
    <Bg>
      <FooterWrapper>
        {/* <div>
          <h2 style={{ marginBottom: "8px" }}>本館開放時間</h2>
          <div style={{ display: "flex" }}>
            <FlexColumn>
              <span>週一~週五</span>
              <span>週六</span>
              <span>週日</span>
            </FlexColumn>
            <FlexColumn>
              <span>6:00~22:00</span>
              <span>9:00~22:00</span>
              <span>9:00~18:00</span>
            </FlexColumn>
          </div>
        </div> */}
      </FooterWrapper>
      {/* <div>
        <h2 style={{ marginBottom: "8px" }}>本館開放時間</h2>
        <div style={{ display: "flex" }}>
          <FlexColumn>
            <span>週一~週五</span>
            <span>週六</span>
            <span>週日</span>
          </FlexColumn>
          <FlexColumn>
            <span>6:00~22:00</span>
            <span>9:00~22:00</span>
            <span>9:00~18:00</span>
          </FlexColumn>
        </div>
      </div>
      <div>
        <h2 style={{ marginBottom: "8px" }}>本館訂位處服務時間</h2>
        <div style={{ display: "flex" }}>
          <FlexColumn>
            <span>週一~週五</span>
            <span>週六</span>
            <span>週日</span>
          </FlexColumn>
          <FlexColumn>
            <span>8:00~21:30</span>
            <span>9:00~21:30</span>
            <span>9:00~17:30</span>
          </FlexColumn>
        </div>
      </div>
      <div>
        <h2 style={{ marginBottom: "8px" }}>聯絡我們</h2>
        <IconText>
          <HiPhone />
          (02)xxxx-xxxx
        </IconText>
        <IconText>
          <HiMail />
          xxxx@ntu.edu.tw
        </IconText>
        <IconText>
          <FaMapMarkerAlt />
          臺北市羅斯福路四段一號{" "}
        </IconText>
      </div> */}
    </Bg>
  );
}

export default Footer;

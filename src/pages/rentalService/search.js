import styled from "styled-components";
import Select from "../../components/ui/select";
import DatePicker from "react-datepicker";
import { useState } from "react";
import Button from '../../components/ui/button'
import "react-datepicker/dist/react-datepicker.css";
import { FcInfo } from "react-icons/fc";
import Modal from "../../components/ui/modal";

const SearchWrapper = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
`;

const Row = styled.div`
  display: flex;
  color: #647693;
  font-weight: 600;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const CustomDatePicker = styled(DatePicker)`
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  &:focus {
    outline: none;
    border-color: #63a8e7;
  }
`;

const WidthAuto = styled.div`
  width: auto;
  margin-right: 1rem;
`;

const options = [
  {
    id: 0,
    label: "3F羽球場",
    value: "3F-badminton",
  },
  {
    id: 1,
    label: "1F羽球場",
    value: "1F-badminton",
  },
  {
    id: 2,
    label: "B1桌球室",
    value: "B1-table-tennis",
  },
  {
    id: 3,
    label: "B1壁球",
    value: "B1-wall-ball",
  },
  {
    id: 4,
    label: "B109教室(桌球)",
    value: "B109-table-tennis",
  },
];

function ModalBody() {
  return (
    <ul>
      <li>1.場地租借只開放一個星期內的場地借用，二個星期內場地查詢。</li>
      <li>
        2.線上開放時間：週一至週五 08:00-22:00，週六 09:00-22:00，週日
        09:00-22:00
      </li>

      <li>
        3.售票辦證時間：週一至週五 08:00-21:30，週六 09:00-21:30，週日
        09:00-17:30
      </li>
      <li>
        4.尖峰時段：週一至週五
        17:00-22:00;週六，日及國定假日　離峰時段：週一至週五　06:00-17:00
      </li>
      <li>
        5.若有任何線上預約的問題，請洽電(02)33665959轉600-606，或至綜合體育館B1櫃台處詢問，謝謝。
      </li>
    </ul>
  );
}

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <SearchWrapper>
        <Row>
          <Label>場地：</Label>
          <Select options={options} defaultValue={options[0]} />
          <FcInfo
            onClick={() => setShowModal(true)}
            size="1.2rem"
            cursor="pointer"
            style={{ marginLeft: "1rem" }}
          />
        </Row>
        <Row>
          <Label>日期：</Label>
          <WidthAuto>
            <CustomDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </WidthAuto>
          <Button>查詢</Button>
        </Row>
      </SearchWrapper>
      <Modal
        show={showModal}
        header="使用說明"
        onClose={closeModal}
        body={<ModalBody />}
      />
    </>
  );
}

export default Search;

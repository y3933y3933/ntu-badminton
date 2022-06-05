import styled from "styled-components";
import Modal from "../ui/modal";
import { useState } from "react";

const TagWrapper = styled.div`
  flex: 0 0 3rem;
  margin-right: 0.5rem;
`;

const Tag = styled.span`
  background: #fde7ea;
  padding: 0 0.5rem;
  border-radius: 1rem;
  line-height: 20px;
  height: 20px;
  color: #e98790;
`;

const DateText = styled.span`
  color: #a2a09f;
  flex-shrink: 0;
  margin-right: 0.5rem;
`;

const Title = styled.p`
  color: #485f82;
  font-weight: 600;
  flex-grow: 1;
  cursor: pointer;
  &:hover {
    color: #63a8e7;
  }
`;

const ItemWrapper = styled.li`
  display: flex;
`;

function NewsItem({ news }) {
  const [show, setShow] = useState(false);

  if (!news) {
    return null;
  }

  return (
    <>
      <ItemWrapper>
        <TagWrapper>{news.tag && <Tag>{news.tag}</Tag>}</TagWrapper>
        <DateText>{news.date}</DateText>
        <Title onClick={() => setShow(true)}>{news.title}</Title>
      </ItemWrapper>
      <Modal
        show={show}
        header={news.title}
        footer={"更新日期：" + news.date}
        onClose={() => setShow(false)}
        body={news.content}
      />
    </>
  );
}

export default NewsItem;

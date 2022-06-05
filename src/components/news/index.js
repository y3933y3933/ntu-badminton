import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsWrapper = styled.ul`
  min-height: 10rem;
  width: 100%;
  max-width: 40rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 0 auto;
  padding: 0.4rem 1rem;
  & li:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const Title = styled.h4`
  color: #485f82;
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
`;

const mock = [
  {
    id: 0,
    date: "2022/05/11",
    title: "球類場地新收費標準與新制於5/21起正式實施",
    tag: "new",
    content: `球類場地收費標準與收費機制
    詳細內容請參考綜合體育館網站之最新消息。
    https://ntusportscenter.ntu.edu.tw/#/news/2269/news
    除校外身分之外，其他身分別略有價格上之調整，
    且收費的計算機制調整成
    "同一場地中同時有多種身分別使用，則以最高身分別8折計價"，
    敬請場地使用者務必攜帶證件以供佐證。`,
  },
  {
    id: 1,
    date: "2022/03/12",
    title: "線上付款系統上尚未開放，目前為測試階段",
    tag: "",
    content: `各位會員好：
    本館線上付款系統尚未開放，
    目前皆為系統測試階段，
    請勿點入線上付款之連結！
    若有疑問，請撥打3366-5959#601林小姐。`,
  },
];

function News() {
  return (
    <>
      <Title>最新消息</Title>
      <NewsWrapper>
        {mock.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
      </NewsWrapper>
    </>
  );
}

export default News;

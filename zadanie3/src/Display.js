import styled from "styled-components";

const DisplayWrapper = styled.div`
  margin: 100px 100px 30px 100px;
`;
const DisplayQuote = styled.h1`
  margin-bottom: 20px;
`;
const DisplayAuthor = styled.h2``;

export const Display = (props) => {
  return (
    <DisplayWrapper>
      <DisplayQuote>
        {props.quote ? props.quote.quote : "LET'S GO !"}
      </DisplayQuote>
      <DisplayAuthor>
        {props.quote ? props.quote.author : "gimme some quotes"}
      </DisplayAuthor>
    </DisplayWrapper>
  );
};

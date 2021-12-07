import styled from "styled-components";
import { drawNumber } from "./utils";

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
const PreviousButton = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid black;
  margin-right: 50px;
`;
const NextButton = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid black;
  background-color: green;
  cursor: pointer;
`;

export const Navigation = (props) => {
  console.log(props.quotes.length);
  return (
    <NavigationWrapper>
      <PreviousButton
        style={{
          backgroundColor: `${props.firstQuote ? "grey" : "green"}`,
          cursor: `${props.firstQuote ? "not-allowed" : "pointer"}`,
        }}
        onClick={() => {
          if (props.quotes.length <= 1) {
            props.changeFirst(true);
          }
          props.changeQuotes(props.quotes.slice(0, -1));
        }}
      >
        {props.firstQuote ? "" : "PREVIOUS"}
      </PreviousButton>
      <NextButton
        onClick={() => {
          props.changeFirst(false);
          props.changeQuotes([
            ...props.quotes,
            drawNumber(props.databaseLength),
          ]);
        }}
      >
        {props.firstQuote ? "QUOTES !" : "NEXT"}
      </NextButton>
    </NavigationWrapper>
  );
};

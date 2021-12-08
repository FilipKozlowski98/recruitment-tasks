import styled from "styled-components";
import { drawNumber } from "./utils";

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0;
`;
const PreviousButton = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 20px;
  border: 5px solid black;
  margin-right: 50px;
  &:active {
    box-shadow: inset -8px 9px 21px 2px #000000;
  }
`;
const NextButton = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 20px;
  border: 5px solid black;
  background-color: green;
  cursor: pointer;
  &:active {
    box-shadow: inset -8px 9px 21px 2px #000000;
  }
`;

export const Navigation = (props) => {
  return (
    <NavigationWrapper>
      <PreviousButton
        style={{
          backgroundColor: `${props.firstQuote ? "grey" : "green"}`,
          cursor: `${props.firstQuote ? "not-allowed" : "pointer"}`,
        }}
        onClick={() => {
          if (props.firstQuote) {
            return;
          }
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
          if (props.firstQuote) {
            props.changeFirst(false);
          }
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

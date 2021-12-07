import { useEffect, useState } from "react";
import styled from "styled-components";
import { Display } from "./Display";
import { Navigation } from "./Navigation";
import { fetchQuotes } from "./utils";

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const App = () => {
  const [quotes, changeQuotes] = useState([]);
  const [firstQuote, changeFirst] = useState([true]);
  const [database, changeDatabase] = useState([]);
  useEffect(() => {
    fetchQuotes(changeDatabase);
  }, []);

  return (
    <MainWrapper>
      <Display quote={database[quotes.at(-1)]} />
      <Navigation
        changeQuotes={changeQuotes}
        changeFirst={changeFirst}
        databaseLength={database.length}
        firstQuote={firstQuote}
        quotes={quotes}
      />
    </MainWrapper>
  );
};

export default App;

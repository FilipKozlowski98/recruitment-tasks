import { useEffect, useState } from "react";
import styled from "styled-components";
import { Display } from "./Display";
import { Navigation } from "./Navigation";
import { fetchQuotes } from "./utils";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [quotes, changeQuotes] = useState([]);
  const [firstQuote, changeFirst] = useState([true]);
  const [database, changeDatabase] = useState([]);
  useEffect(() => {
    fetchQuotes(changeDatabase);
  }, []);
  console.log(quotes);

  return (
    <MainWrapper>
      <Display quote={"test"} />
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

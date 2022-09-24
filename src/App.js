import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import { GlobalStyle } from "./styles/styledglobal";

const App = () => {
  return (
    <section>
      <GlobalStyle />
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
    </section>
  );
};

export default App;

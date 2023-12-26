import { useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";

function App() {
  const [selectedOrigin, setSelectedOrigin] = useState("Beryllgatan");

  return (
    <>
      <Header />
      <SubHeader
        selectedOrigin={selectedOrigin}
        setSelectedOrigin={setSelectedOrigin}
      />
    </>
  );
}

export default App;

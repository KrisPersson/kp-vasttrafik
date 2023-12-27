import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import { getApiToken, getResource } from "./api/api.jsx";
import endpoints from "./endpoints.json";

if (!localStorage.getItem("access_token")) {
  const apiToken = await getApiToken();
  localStorage.setItem("access_token", JSON.stringify(apiToken.access_token));
}

const endPointBeryllgatan = endpoints.find(
  (endpoint) => endpoint.name === "Beryllgatan"
);
const endPointFrolundaTorg = endpoints.find(
  (endpoint) => endpoint.name === "Frölunda Torg"
);
const endPointKungsportsplatsen = endpoints.find(
  (endpoint) => endpoint.name === "Kungsportsplatsen"
);
const endPointRedbergsplatsen = endpoints.find(
  (endpoint) => endpoint.name === "Redbergsplatsen"
);
const resource = await getResource(
  `/journeys?originGid=${endPointBeryllgatan.gid[0]}&destinationGid=${endPointFrolundaTorg.gid[0]}`
);
console.log(resource);

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

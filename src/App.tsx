import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import DestinationBoard from "./components/DestinationBoard/DestinationBoard";
import { getApiToken, getResource } from "./api/api.jsx";
import { Endpoint } from "./types/index";
import { JourneyResult, JourneyResultArray } from "./types/journey";
import endpoints from "./endpoints.json";

if (!localStorage.getItem("access_token")) {
  const apiToken = await getApiToken();
  localStorage.setItem("access_token", JSON.stringify(apiToken));
}

// const endPointBeryllgatan = endpoints.find(
//   (endpoint: Endpoint) => endpoint.name === "Beryllgatan"
// );
// const endPointFrolundaTorg = endpoints.find(
//   (endpoint: Endpoint) => endpoint.name === "Frölunda Torg"
// );
// const endPointKungsportsplatsen = endpoints.find(
//   (endpoint: Endpoint) => endpoint.name === "Kungsportsplatsen"
// );
// const endPointRedbergsplatsen = endpoints.find(
//   (endpoint: Endpoint) => endpoint.name === "Redbergsplatsen"
// const resource = await getResource(
//   `/journeys?originGid=${endPointBeryllgatan.gid[0]}&destinationGid=${endPointFrolundaTorg.gid[0]}`
// );
// console.log(resource);

function App() {
  const [selectedOrigin, setSelectedOrigin] = useState("Beryllgatan");
  const [currentJourneys, setCurrentJourneys] = useState<JourneyResultArray>([
    [],
    [],
    [],
  ]);

  async function getCurrentJourneys(selectedOrigin: string) {
    let returnArr: JourneyResultArray = [[], [], []];
    const originEndpoint = endpoints.find(
      (endpoint: Endpoint) => endpoint.name === selectedOrigin
    );
    const destinationEndpoints = endpoints.filter(
      (endpoint: Endpoint) => endpoint.name !== selectedOrigin
    );
    const endpoint1 = await getResource(
      `/journeys?originGid=${originEndpoint?.gid[0]}&destinationGid=${destinationEndpoints[0].gid[0]}`
    );
    const endpoint2 = await getResource(
      `/journeys?originGid=${originEndpoint?.gid[0]}&destinationGid=${destinationEndpoints[1].gid[0]}`
    );
    const endpoint3 = await getResource(
      `/journeys?originGid=${originEndpoint?.gid[0]}&destinationGid=${destinationEndpoints[2].gid[0]}`
    );
    returnArr = [
      [...endpoint1.results],
      [...endpoint2.results],
      [...endpoint3.results],
    ];

    console.log(returnArr);
    setCurrentJourneys([...returnArr]);
  }

  // useEffect(() => {
  //   getCurrentJourneys(selectedOrigin);
  // }, [selectedOrigin]);

  return (
    <>
      <Header />
      <SubHeader
        selectedOrigin={selectedOrigin}
        setSelectedOrigin={setSelectedOrigin}
      />
      <main>
        <DestinationBoard />
      </main>
    </>
  );
}

export default App;

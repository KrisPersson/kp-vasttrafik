import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import DestinationBoard from "./components/DestinationBoard/DestinationBoard";
import DesignBall from "./components/DesignBall/DesignBall";
import { getApiToken, getResource } from "./api/api.jsx";
import { Endpoint } from "./types/index";
import { JourneyResultArray } from "./types/journey";
import endpoints from "./endpoints.json";

if (!localStorage.getItem("access_token")) {
  const apiToken = await getApiToken();
  localStorage.setItem("access_token", JSON.stringify(apiToken));
}

const testFetch = await getResource(
  `/journeys?originGid=9021014005460000&destinationGid=9021014004090000`
);

if (!testFetch) {
  const apiToken = await getApiToken();
  localStorage.setItem("access_token", JSON.stringify(apiToken));
}

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [selectedOrigin, setSelectedOrigin] = useState("Beryllgatan");
  const [currentJourneys, setCurrentJourneys] = useState<JourneyResultArray>([
    [],
    [],
    [],
  ]);

  async function getCurrentJourneys(selectedOrigin: string) {
    setIsFetching(true);
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
    setIsFetching(false);
    setCurrentJourneys([...returnArr]);
  }

  useEffect(() => {
    getCurrentJourneys(selectedOrigin);
  }, [selectedOrigin]);

  return (
    <>
      <DesignBall
        color="#E2A2EE"
        leftPx={"155px"}
        rightPx="unset"
        topPx={"-285px"}
      />
      <DesignBall
        color="#A2A5EE"
        leftPx="unset"
        rightPx="-123px"
        topPx={"-250px"}
      />
      <Header />
      <SubHeader
        selectedOrigin={selectedOrigin}
        setSelectedOrigin={setSelectedOrigin}
      />
      <main>
        {isFetching ? (
          <p className="error-message">Laddar resor...</p>
        ) : currentJourneys.every((arr) => arr.length === 0) ? (
          <p className="error-message">Could not fetch journeys</p>
        ) : (
          currentJourneys.map((journeys, i: number) => {
            return <DestinationBoard key={i} journeyResults={journeys} />;
          })
        )}
      </main>
    </>
  );
}

export default App;

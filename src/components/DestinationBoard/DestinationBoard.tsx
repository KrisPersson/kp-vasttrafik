import "./DestinationBoard.scss";
import endpoints from "../../endpoints.json";
import { Endpoint } from "../../types/index";
import { JourneyResult } from "../../types/journey";
import JourneyItem from "../JourneyItem/JourneyItem";

export default function DestinationBoard({
  journeyResults,
}: {
  journeyResults: JourneyResult[];
}) {
  const destinationName =
    journeyResults[0].tripLegs[journeyResults[0].tripLegs.length - 1]
      .destination.stopPoint.stopArea.name || "error";

  const fiveFirstResults = journeyResults.filter((result, i) => i < 5);

  return (
    <article className="destination-board">
      <section className="destination-board__header">
        <h3>{destinationName.replace("Spårvagn", "")}</h3>
      </section>
      <section className="destination-board__main">
        {journeyResults.length > 0 &&
          fiveFirstResults.map((result) => {
            return <JourneyItem journey={result} />;
          })}
      </section>
    </article>
  );
}

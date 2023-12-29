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

  return (
    <article className="destination-board">
      <section className="destination-board__header">
        <h3>{destinationName}</h3>
      </section>

      <section className="destination-board__main">
        <JourneyItem journey={journeyResults[0]} />
      </section>
    </article>
  );
}

import "./DestinationBoard.scss";
import endpoints from "../../endpoints.json";
import { Endpoint } from "../../types/index";
import { JourneyResult } from "../../types/journey";

export default function DestinationBoard({
  journeyResults,
}: {
  journeyResults: JourneyResult[];
}) {
  return (
    <article className="destination-board">
      <section className="destination-board__header">
        <h3>Kungsportsplatsen</h3>
      </section>

      <section className="destination-board__main"></section>
    </article>
  );
}

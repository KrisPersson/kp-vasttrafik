import "./AggregateTripLeg.scss";
import { JourneyResult } from "../../types/journey";

export default function AggregateTripLeg({
  journey,
}: {
  journey: JourneyResult;
}) {
  const departureTime = new Date(
    journey.tripLegs[0].origin.estimatedTime ||
      journey.tripLegs[0].origin.estimatedOtherwisePlannedTime
  );
  const arrivalTime = new Date(
    journey.tripLegs[journey.tripLegs.length - 1].destination.estimatedTime ||
      journey.tripLegs[journey.tripLegs.length - 1].destination
        .estimatedOtherwisePlannedTime
  );

  const lineStyles = journey.tripLegs.map((leg, i: number) => {
    return {
      color: leg.serviceJourney.line.foregroundColor || "",
      backgroundColor: leg.serviceJourney.line.backgroundColor || "",
      borderColor: leg.serviceJourney.line.borderColor || "",
      transform: `translateX(${i * 8}px)`,
      zIndex: 10 - i,
    };
  });

  return (
    <section className="journey-item__tripleg">
      <section className="tripleg-grid-item tripleg__departure-time">
        <p className="time time--departure">
          {departureTime.toTimeString().slice(0, 5)}
        </p>
      </section>
      <section className="tripleg-grid-item tripleg__departure-endpoint">
        <p className="endpoint-name endpoint--departure">
          {journey.tripLegs[0].origin.stopPoint.stopArea.name}
        </p>
        <p className="endpoint-name platform">
          {journey.tripLegs[0].origin.stopPoint.platform}
        </p>
      </section>
      <section className="tripleg-grid-item tripleg__lines tripleg__lines--agg">
        {journey.tripLegs.map((leg, i) => {
          return (
            <span
              className="line-container line-container--agg"
              style={lineStyles[i]}
            >
              {leg.serviceJourney.line.shortName}
            </span>
          );
        })}

        <i
          title={journey.tripLegs[0].serviceJourney.line.transportMode}
          className={`fa-solid fa-${journey.tripLegs[0].serviceJourney.line.transportMode}`}
        ></i>
      </section>
      <section className="tripleg-grid-item tripleg__arrival-endpoint">
        <p className="endpoint-name endpoint--arrival">
          {
            journey.tripLegs[journey.tripLegs.length - 1].destination.stopPoint
              .stopArea.name
          }
        </p>
        <p className="endpoint-name platform">
          {
            journey.tripLegs[journey.tripLegs.length - 1].destination.stopPoint
              .platform
          }
        </p>
      </section>
      <section className="tripleg-grid-item tripleg__arrival-time">
        <p className="time time--arrival">
          {arrivalTime.toTimeString().slice(0, 5)}
        </p>
      </section>
    </section>
  );
}

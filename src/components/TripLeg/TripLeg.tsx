import "./TripLeg.scss";
import { TypeTripLeg } from "../../types/journey";

export default function TripLeg({ tripLeg }: { tripLeg: TypeTripLeg }) {
  console.log(tripLeg);
  const departureTime = new Date(tripLeg.origin.estimatedTime);
  const arrivalTime = new Date(tripLeg.destination.estimatedTime);

  const lineStyle = {
    color: tripLeg.serviceJourney.line.foregroundColor || "",
    backgroundColor: tripLeg.serviceJourney.line.backgroundColor || "",
    borderColor: tripLeg.serviceJourney.line.borderColor || "",
  };

  return (
    <section className="journey-item__tripleg">
      <section className="tripleg-grid-item tripleg__departure-time">
        <p className="time time--departure">
          {departureTime.toTimeString().slice(0, 5)}
        </p>
      </section>
      <section className="tripleg-grid-item tripleg__departure-endpoint">
        <p className="endpoint-name endpoint--departure">
          {tripLeg.origin.stopPoint.stopArea.name}
        </p>
        <p className="endpoint-name platform">
          {tripLeg.origin.stopPoint.platform}
        </p>
      </section>
      <section className="tripleg-grid-item tripleg__lines">
        <span className="line-container" style={lineStyle}>
          {tripLeg.serviceJourney.line.shortName}
        </span>
        <i
          title={tripLeg.serviceJourney.line.transportMode}
          className={`fa-solid fa-${tripLeg.serviceJourney.line.transportMode}`}
        ></i>
      </section>
      <section className="tripleg-grid-item tripleg__arrival-endpoint">
        <p className="endpoint-name endpoint--arrival">
          {tripLeg.destination.stopPoint.stopArea.name}
        </p>
        <p className="endpoint-name platform">
          {tripLeg.destination.stopPoint.platform}
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

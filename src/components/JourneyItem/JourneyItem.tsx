import "./JourneyItem.scss";
import { JourneyResult } from "../../types/journey";
import TripLeg from "../TripLeg/TripLeg";

export default function JourneyItem({ journey }: { journey: JourneyResult }) {
  const tripLegs = journey.tripLegs.map((leg, i: number) => {
    return (
      <>
        <TripLeg tripLeg={leg} />
        {i !== journey.tripLegs.length - 1 && (
          <aside className="tripleg-divider"></aside>
        )}
      </>
    );
  });
  console.log(tripLegs);
  return <article className="journey-item">{tripLegs}</article>;
}

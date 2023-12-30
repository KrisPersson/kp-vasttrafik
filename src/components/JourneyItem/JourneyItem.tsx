import "./JourneyItem.scss";
import { JourneyResult } from "../../types/journey";
import { useState } from "react";
import TripLeg from "../TripLeg/TripLeg";
import AggregateTripLeg from "../AggregateTripLeg/AggregateTripLeg";

export default function JourneyItem({ journey }: { journey: JourneyResult }) {
  const [isExtended, setIsExtended] = useState(false);

  const tripLegs = journey.tripLegs.map((leg, i: number) => {
    return (
      <>
        <TripLeg key={i} tripLeg={leg} />
        {i !== journey.tripLegs.length - 1 && (
          <aside className="tripleg-divider"></aside>
        )}
      </>
    );
  });
  console.log(tripLegs.length);
  if (tripLegs.length === 1) {
    return <article className="journey-item">{tripLegs}</article>;
  } else {
    return (
      <article className="journey-item">
        {isExtended ? tripLegs : <AggregateTripLeg journey={journey} />}
        <button
          onClick={() => setIsExtended((prev) => !prev)}
          className="open-close-btn"
        >
          <i
            className={`fa-solid fa-caret-${
              isExtended ? "up" : "down"
            } btn-arrow`}
          ></i>
        </button>
      </article>
    );
  }
}

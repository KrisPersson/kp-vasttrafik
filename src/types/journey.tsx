export type JourneyResultArray = [
  JourneyResult[],
  JourneyResult[],
  JourneyResult[]
];

export type JourneyResult = {
  connectionLinks: unknown[];
  detailsReference: string;
  isDeparted: boolean;
  reconstructionReference: string;
  tripLegs: TypeTripLeg[];
};

export type TypeTripLeg = {
  destination: DestinationOrigin;
  estimatedArrivalTime: string;
  estimatedDepartureTime: string;
  estimatedDurationInMinutes: number;
  estimatedOtherwisePlannedArrivalTime: string;
  estimatedOtherwisePlannedDepartureTime: string;
  isCancelled: boolean;
  isPartCancelled: boolean;
  journeyLegIndex: number;
  notes: unknown[];
  origin: DestinationOrigin;
  plannedArrivalTime: string;
  plannedDepartureTime: string;
  plannedDurationInMinutes: number;
  serviceJourney: ServiceJourney;
};

export type ServiceJourney = {
  direction: string;
  gid: string;
  line: Line;
  number: string;
};

export type Line = {
  backgroundColor: string;
  borderColor: string;
  designation: string;
  foregroundColor: string;
  isWheelchairAccessible: boolean;
  name: string;
  shortName: string;
  transportMode: string;
  transportSubMode: string;
};

export type DestinationOrigin = {
  estimatedOtherwisePlannedTime: string;
  estimatedTime: string;
  notes: unknown[];
  plannedTime: string;
  stopPoint: StopPoint;
};

export type StopPoint = {
  gid: string;
  name: string;
  platform: string;
  stopArea: StopArea;
};

export type StopArea = {
  gid: string;
  latitude: number;
  longitude: number;
  name: string;
  tariffZone1?: {
    gid: string;
    name: string;
    number: number;
    shortName: string;
  };
};

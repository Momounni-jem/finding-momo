export type MomoLocation = {
  id: string;
  city: string;
  lat: number;
  lng: number;
  image: string;
};

export const MOMO_LOCATIONS: MomoLocation[] = [
  {
    id: "sydney",
    city: "Sydney",
    lat: -33.8688,
    lng: 151.2093,
    image: "/momo1.png",
  },
  {
    id: "seoul",
    city: "Seoul",
    lat: 37.5665,
    lng: 126.9780,
    image: "/momo2.png",
  },
  {
    id: "tokyo",
    city: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
    image: "/momo3.png",
  },
  {
    id: "paris",
    city: "Paris",
    lat: 48.8566,
    lng: 2.3522,
    image: "/momo4.png",
  },
  {
    id: "new-york",
    city: "New York",
    lat: 40.7128,
    lng: -74.0060,
    image: "/momo5.png",
  },
];

export const TOTAL_MOMOS = MOMO_LOCATIONS.length;

/** Cute hidden spots for Street View overlays — one per city */
export const STREET_VIEW_OVERLAY_POSITION: Record<string, string> = {
  sydney: "bottom-[32%] right-[20%]",
  seoul: "bottom-[38%] left-[18%]",
  tokyo: "bottom-[28%] right-[28%]",
  paris: "bottom-[34%] left-[22%]",
  "new-york": "bottom-[30%] right-[14%]",
};

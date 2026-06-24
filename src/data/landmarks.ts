export type Landmark = {
  id: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  heading: number;
  pitch: number;
  zoom: number;
  momoImage: string;
  overlay: {
    top: string;
    left: string;
    width: number;
  };
  foundText: string;
};

export const LANDMARKS: Landmark[] = [
  {
    id: "eiffel",
    name: "Eiffel Tower",
    city: "Paris",
    country: "France",
    lat: 48.8584,
    lng: 2.2945,
    heading: 20,
    pitch: 5,
    zoom: 1,
    momoImage: "/momo1.png",
    overlay: { top: "28%", left: "55%", width: 60 },
    foundText: "Momo was climbing the Eiffel Tower!",
  },
  {
    id: "sydney-bridge",
    name: "Sydney Harbour Bridge",
    city: "Sydney",
    country: "Australia",
    lat: -33.8523,
    lng: 151.2108,
    heading: 140,
    pitch: 0,
    zoom: 1,
    momoImage: "/momo2.png",
    overlay: { top: "62%", left: "22%", width: 56 },
    foundText: "Momo fell asleep near the Harbour Bridge.",
  },
  {
    id: "shibuya",
    name: "Shibuya Crossing",
    city: "Tokyo",
    country: "Japan",
    lat: 35.6595,
    lng: 139.7005,
    heading: 210,
    pitch: 2,
    zoom: 1,
    momoImage: "/momo3.png",
    overlay: { top: "48%", left: "68%", width: 58 },
    foundText: "Momo got lost in the crossing.",
  },
  {
    id: "times-square",
    name: "Times Square",
    city: "New York",
    country: "USA",
    lat: 40.758,
    lng: -73.9855,
    heading: 45,
    pitch: 3,
    zoom: 1,
    momoImage: "/momo4.png",
    overlay: { top: "70%", left: "40%", width: 62 },
    foundText: "Momo is hiding under the bright lights.",
  },
  {
    id: "gyeongbokgung",
    name: "Gyeongbokgung Palace",
    city: "Seoul",
    country: "South Korea",
    lat: 37.5796,
    lng: 126.977,
    heading: 330,
    pitch: 4,
    zoom: 1,
    momoImage: "/momo5.png",
    overlay: { top: "35%", left: "30%", width: 60 },
    foundText: "Momo is waiting near the palace.",
  },
];

export const TOTAL_LANDMARKS = LANDMARKS.length;

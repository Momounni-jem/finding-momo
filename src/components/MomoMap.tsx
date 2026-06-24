"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import type { MomoLocation } from "@/data/momoLocations";
import { createMomoMarkerIcon } from "@/lib/momoIcon";

type MomoMapProps = {
  locations: MomoLocation[];
  foundIds: Set<string>;
  onFindMomo: (location: MomoLocation) => void;
};

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = { lat: 20, lng: 0 };

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  minZoom: 2,
  restriction: {
    latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
    strictBounds: true,
  },
};

export default function MomoMap({
  locations,
  foundIds,
  onFindMomo,
}: MomoMapProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  if (loadError) {
    const isApiNotActivated =
      loadError.message?.includes("ApiNotActivated") ?? false;

    return (
      <div className="flex h-full items-center justify-center bg-pink-50 p-6">
        <div className="max-w-md rounded-3xl bg-white p-6 text-center shadow-lg">
          <p className="mb-3 text-lg font-semibold text-pink-400">
            Could not load the map
          </p>
          {isApiNotActivated ? (
            <p className="text-sm text-slate-600">
              Enable the{" "}
              <strong>Maps JavaScript API</strong> for your Google Cloud
              project, then refresh this page.
            </p>
          ) : (
            <p className="text-sm text-slate-600">
              Check your API key in{" "}
              <code className="rounded bg-pink-50 px-1">.env.local</code> and
              make sure billing is enabled on your Google Cloud project.
            </p>
          )}
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex h-full items-center justify-center rounded-2xl bg-pink-50">
        <p className="animate-pulse text-pink-400">Loading map…</p>
      </div>
    );
  }

  const visibleLocations = locations.filter((loc) => !foundIds.has(loc.id));

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={defaultCenter}
      zoom={2}
      options={mapOptions}
    >
      {visibleLocations.map((location) => (
        <Marker
          key={location.id}
          position={{ lat: location.lat, lng: location.lng }}
          icon={createMomoMarkerIcon(location.image)}
          title={`Momo might be in ${location.city}…`}
          onClick={() => onFindMomo(location)}
        />
      ))}
    </GoogleMap>
  );
}

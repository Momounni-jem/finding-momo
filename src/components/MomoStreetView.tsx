"use client";

import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import type { Landmark } from "@/data/landmarks";
import { findPanoramaAt, type PanoramaResult } from "@/lib/streetView";

type MomoStreetViewProps = {
  landmark: Landmark;
  hideMomo: boolean;
  onFindMomo: () => void;
  onPanoramaReady: () => void;
};

const panoramaOptions: google.maps.StreetViewPanoramaOptions = {
  addressControl: false,
  showRoadLabels: false,
  motionTracking: false,
  motionTrackingControl: false,
  linksControl: true,
  panControl: true,
  zoomControl: true,
  fullscreenControl: true,
};

export default function MomoStreetView({
  landmark,
  hideMomo,
  onFindMomo,
  onPanoramaReady,
}: MomoStreetViewProps) {
  const panoramaContainerRef = useRef<HTMLDivElement>(null);
  const panoramaRef = useRef<google.maps.StreetViewPanorama | null>(null);
  const [panoramaData, setPanoramaData] = useState<PanoramaResult | null>(
    null,
  );
  const [unavailable, setUnavailable] = useState(false);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  useEffect(() => {
    if (!isLoaded) return;

    let cancelled = false;

    async function loadPanorama() {
      setPanoramaData(null);
      setUnavailable(false);

      const result = await findPanoramaAt(landmark.lat, landmark.lng);

      if (cancelled) return;

      if (!result) {
        setUnavailable(true);
        return;
      }

      setPanoramaData(result);
      onPanoramaReady();
    }

    loadPanorama();

    return () => {
      cancelled = true;
    };
  }, [isLoaded, landmark.id, landmark.lat, landmark.lng, onPanoramaReady]);

  useEffect(() => {
    if (!isLoaded || !panoramaContainerRef.current || !panoramaData) return;

    const position = { lat: panoramaData.lat, lng: panoramaData.lng };
    const pov: google.maps.StreetViewPov = {
      heading: landmark.heading,
      pitch: landmark.pitch,
    };

    if (!panoramaRef.current) {
      panoramaRef.current = new google.maps.StreetViewPanorama(
        panoramaContainerRef.current,
        {
          ...panoramaOptions,
          position,
          pano: panoramaData.panoId ?? undefined,
          pov,
          zoom: landmark.zoom,
        },
      );
      return;
    }

    if (panoramaData.panoId) {
      panoramaRef.current.setPano(panoramaData.panoId);
    } else {
      panoramaRef.current.setPosition(position);
    }
    panoramaRef.current.setPov(pov);
    panoramaRef.current.setZoom(landmark.zoom);
  }, [isLoaded, panoramaData, landmark.heading, landmark.pitch, landmark.zoom]);

  if (loadError) {
    return (
      <div className="flex h-full items-center justify-center bg-pink-50 p-6">
        <div className="max-w-md rounded-3xl bg-white p-6 text-center shadow-lg">
          <p className="mb-3 text-lg font-semibold text-pink-400">
            Could not load Street View
          </p>
          <p className="text-sm text-slate-600">
            Check your API key in{" "}
            <code className="rounded bg-pink-50 px-1">.env.local</code> and
            make sure the Maps JavaScript API is enabled.
          </p>
        </div>
      </div>
    );
  }

  if (unavailable) {
    return (
      <div className="flex h-full items-center justify-center bg-pink-50 p-6">
        <div className="max-w-md rounded-3xl bg-white p-6 text-center shadow-lg">
          <p className="mb-2 text-lg font-semibold text-pink-400">
            Street View unavailable
          </p>
          <p className="text-sm text-slate-600">
            No panorama found near {landmark.name}. Try adjusting the landmark
            coordinates in{" "}
            <code className="rounded bg-pink-50 px-1">src/data/landmarks.ts</code>
            .
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded || !panoramaData) {
    return (
      <div className="flex h-full items-center justify-center bg-pink-50">
        <p className="animate-pulse text-pink-400">Loading Street View…</p>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div ref={panoramaContainerRef} className="h-full w-full" />

      {!hideMomo && (
        <button
          type="button"
          onClick={onFindMomo}
          className="absolute z-10 cursor-pointer transition duration-200 hover:scale-110 active:scale-95"
          style={{
            top: landmark.overlay.top,
            left: landmark.overlay.left,
            width: landmark.overlay.width,
            height: landmark.overlay.width,
          }}
          aria-label={`Find Momo at ${landmark.name}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={landmark.momoImage}
            alt=""
            className="h-full w-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]"
          />
        </button>
      )}
    </div>
  );
}

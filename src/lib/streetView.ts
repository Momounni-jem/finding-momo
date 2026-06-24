export type PanoramaResult = {
  lat: number;
  lng: number;
  panoId: string | null;
};

const SEARCH_RADIUS_METERS = 1000;

export function findPanoramaAt(
  lat: number,
  lng: number,
): Promise<PanoramaResult | null> {
  return new Promise((resolve) => {
    const service = new google.maps.StreetViewService();

    service.getPanorama(
      {
        location: { lat, lng },
        radius: SEARCH_RADIUS_METERS,
        source: google.maps.StreetViewSource.OUTDOOR,
      },
      (data, status) => {
        if (
          status === google.maps.StreetViewStatus.OK &&
          data?.location?.latLng
        ) {
          const position = data.location.latLng;
          resolve({
            lat: position.lat(),
            lng: position.lng(),
            panoId: data.location.pano ?? null,
          });
          return;
        }

        resolve(null);
      },
    );
  });
}

const MOMO_MARKER_SIZE = 48;

export function createMomoMarkerIcon(imageUrl: string): google.maps.Icon {
  return {
    url: imageUrl,
    scaledSize: new google.maps.Size(MOMO_MARKER_SIZE, MOMO_MARKER_SIZE),
    anchor: new google.maps.Point(MOMO_MARKER_SIZE / 2, MOMO_MARKER_SIZE / 2),
  };
}

export function convertToGooglePolyline(polyline) {
  return polyline.map((point) => {
    return {
      lat: point[0],
      lng: point[1],
    }
  })
}

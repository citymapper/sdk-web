const initialStart = [51.5218926, -0.0834238]
const initialEnd = [51.495949, -0.176351]

const initialMapCenter = [
  (initialStart[0] + initialEnd[0]) / 2,
  (initialStart[1] + initialEnd[1]) / 2,
]

module.exports = {
  initialStart,
  initialEnd,
  initialMapCenter,
}

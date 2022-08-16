const initialStart = [51.473379, -0.199225]
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

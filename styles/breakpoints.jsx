const size = {
  xs: "374px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};
const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { size, device };

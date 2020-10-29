/**
 *
 * @param {Number} size
 */
export function generateGridWidth(size) {
  if (!size) return "max-width: 100%;";
  let width = (Number(size) / 12) * 100;
  return `max-width: ${width}%;`;
}

/**
 *
 * @param {Object} props
 * @param {Number} props.xs breakpoint width for mobile devices
 * @param {Number} props.sm breakpoint width for mobile devices
 * @param {Number} props.md breakpoint width for tablets
 * @param {Number} props.lg breakpoint width for desktop
 *
 * @returns {String} media queries
 */
export function generateMediaQueries({ xs = 12, sm, md, lg = 12 }) {
  return `
    ${xs ? generateGridWidth(xs) : "max-width: 100%"};
    flex-basis: ${(Number(xs) / 12) * 100 - 1}%;
    @media only screen and (min-width: 768px) {
      ${generateGridWidth(sm)}
      flex-basis: ${(Number(sm) / 12) * 100 - 1}%;
    }
    @media only screen and (min-width: 992px) {
      ${generateGridWidth(md)}
      flex-basis: ${(Number(md) / 12) * 100 - 1}%;
    }
    @media only screen and (min-width: 1200px) {
      ${generateGridWidth(lg)}
      flex-basis: ${(Number(lg) / 12) * 100 - 1}%;
  `;
}

/**
 *
 * @param {Object} flexProperties
 * @param {String} flexProperties.direction
 * @param {String} flexProperties.justify
 * @param {String} flexProperties.alignItems
 * @param {String} flexProperties.alignContent
 * @param {String} flexProperties.xs
 *
 * @returns {String} flex styles
 */
export function generateFlexStyle({
  direction,
  justify,
  alignItems,
  alignContent,
  flex,
}) {
  return `
    ${flex ? `display: flex;` : ""}
    ${direction ? `flex-direction: ${direction};` : ""}
    ${justify ? `justify-content: ${justify};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
    ${alignContent ? `align-content: ${alignContent};` : ""}
    flex-shrink: 1;
    flex-grow: 1;
  `;
}

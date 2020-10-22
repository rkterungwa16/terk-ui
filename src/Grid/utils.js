export function getWidthString(span) {
  if (!span) return;
  let width = (Number(span) / 12) * 100;
  return `width: ${width}%;`;
}

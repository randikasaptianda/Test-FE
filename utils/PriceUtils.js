export default function formatPrice(num) {
  if (!num) {
    return 0;
  }
  const trim = `${num}`.replaceAll('.', '');
  return parseInt(trim)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

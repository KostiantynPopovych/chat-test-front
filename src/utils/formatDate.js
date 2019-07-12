export const formatToMessageDate = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.toLocaleDateString('en-EN', { weekday: 'short' });
  const year = date.getFullYear().toString().substring(2);
  return `${month < 10 ? `0${month}` : `${month}`}, ${day}, ${year}`;
}
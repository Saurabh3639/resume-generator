export function formatDate(dateString) {
  return dateString
    ? new Intl.DateTimeFormat("en-GB").format(new Date(dateString))
    : "";
}

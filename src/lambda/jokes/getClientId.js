export const getClientId = (event) => {
  const cookie = event?.headers?.cookie; // ex: "foo=bar; _ga=GA1.1.1598453576.1606934459"
  if (!cookie) {
    return 'unknown';
  }
  const cookies = Object.fromEntries(
    cookie.split(';').map((cookie) => cookie.trim().split('='))
  );
  const clientId = cookies._ga?.substr(6); // ex: "GA1.1.1598453576.1606934459"
  return clientId || 'unknown';
};

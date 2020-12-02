export const getClientId = (event) => {
  const cookie = event?.headers?.cookie;
  if (!cookie) {
    return 'unknown';
  }
  const cookies = Object.fromEntries(
    cookie.split(';').map((cookie) => cookie.trim().split('='))
  );
  const clientId = cookies._ga.substr(6); // ex: "GA1.1.1598453576.1606934459"
  return clientId;
};

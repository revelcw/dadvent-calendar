import fetch from 'node-fetch';

const apiSecret = process.env.API_SECRET;
const measurementId = process.env.MEASUREMENT_ID;
const measurementEndpoint = 'https://www.google-analytics.com/mp/collect';

const url = `${measurementEndpoint}?measurement_id=${measurementId}&api_secret=${apiSecret}`;

const getClientId = (event) => {
  try {
    const cookies = Object.fromEntries(
      event.headers.cookie.split(';').map((cookie) => cookie.trim().split('='))
    );
    const clientId = cookies._ga.substr(6); // ex: "GA1.1.1598453576.1606934459"
    return clientId;
  } catch (ex) {
    return '123';
  }
};

export const postMeasurement = async (event, day) => {
  const clientId = getClientId(event);
  const payload = {
    clientId,
    nonPersonalizedAds: false,
    events: [{ name: 'joke', params: { day } }],
  };

  try {
    const resp = await fetch(url, { method: 'POST', body: payload });
    console.log('postMeasurement success', day, clientId, resp.status);
  } catch (ex) {
    console.log('postMeasurement failed', day, clientId);
    // fail silently
  }
};

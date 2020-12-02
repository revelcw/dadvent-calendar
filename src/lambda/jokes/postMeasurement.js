import fetch from 'node-fetch';

const apiSecret = process.env.API_SECRET;
const measurementId = process.env.MEASUREMENT_ID;
const measurementEndpoint = 'https://www.google-analytics.com/mp/collect';

const url = `${measurementEndpoint}?measurement_id=${measurementId}&api_secret=${apiSecret}`;

export const postMeasurement = async (day) => {
  const payload = {
    clientId: '123',
    nonPersonalizedAds: false,
    events: [{ name: 'joke', params: { day } }],
  };

  try {
    const resp = await fetch(url, { method: 'POST', body: payload });
    console.log('postMeasurement success', resp.status);
  } catch (ex) {
    console.log('postMeasurement failed');
    // fail silently
  }
};

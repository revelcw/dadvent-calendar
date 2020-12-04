import fetch from 'node-fetch';
import { getClientId } from './getClientId';

const apiSecret = process.env.API_SECRET;
const measurementId = process.env.MEASUREMENT_ID;
const measurementEndpoint = 'https://www.google-analytics.com/mp/collect';
const url = `${measurementEndpoint}?measurement_id=${measurementId}&api_secret=${apiSecret}`;

export const postMeasurement = async (event, day) => {
  try {
    const clientId = getClientId(event);
    const payload = {
      clientId,
      events: [{ name: 'joke', params: { day } }],
    };

    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    console.log('postMeasurement success', day, clientId, resp.status);
  } catch (ex) {
    console.log('postMeasurement failed', day, clientId);
  }
};

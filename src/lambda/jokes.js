const jokes = require('../jokes.json');

exports.handler = async (event, context) => {
  const requestDate = parseInt(event.path.split('/')[4], 10);
  const utcDate = new Date(new Date().getTime() - 28800000).getUTCDate(); // local time + 8 hours

  if (requestDate > utcDate) {
    return {
      statusCode: 425,
      statusText: 'Too early',
    };
  }

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(jokes[requestDate - 1]),
  };
};

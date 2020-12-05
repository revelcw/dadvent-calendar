import { getClientId } from './getClientId';

test('returns "unknown" if there are no headers', () => {
  const expectedResponse = getClientId({});
  expect(expectedResponse).toBe('unknown');
});

test('returns "unknown" if there is no "cookie" headers', () => {
  const expectedResponse = getClientId({ headers: {} });
  expect(expectedResponse).toBe('unknown');
});

test('returns "unknown" if there is an empty cookie', () => {
  const expectedResponse = getClientId({ headers: { cookie: '' } });
  expect(expectedResponse).toBe('unknown');
});

test('returns "unknown" if there isn\'t a "_ga" cookie', () => {
  const expectedResponse = getClientId({
    headers: { cookie: 'foo=foo;bar=bar' },
  });
  expect(expectedResponse).toBe('unknown');
});

test('returns "unknown" if the "_ga" cookie is less than 6 characters long', () => {
  const expectedResponse = getClientId({
    headers: { cookie: 'foo=foo; _ga=ga' },
  });
  expect(expectedResponse).toBe('unknown');
});

test('returns the clientId from the "_ga" cookie', () => {
  const expectedResponse = getClientId({
    headers: { cookie: 'foo=foo; _ga=GA1.1.1598453576.1606934459' },
  });
  expect(expectedResponse).toBe('1598453576.1606934459');
});

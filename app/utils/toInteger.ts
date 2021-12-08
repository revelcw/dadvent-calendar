export const toInteger = (value: unknown): number => {
  if (typeof value !== 'string') {
    throw new Response(`Expected a string but got ${typeof value}`, {
      status: 500,
    });
  }
  const int = parseInt(value, 10);
  if (isNaN(int)) {
    // received something like "/day/foo" vs "/day/1"
    throw new Response(`Expected a number but got ${value}`, { status: 400 });
  }
  return int;
};

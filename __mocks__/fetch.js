
const fetch = global.fetch;

export const setupFetch = (res) => {
  const mockJsonPromise = Promise.resolve(res);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  global.fetch = () => {
      return mockFetchPromise
  }
}

export default fetch;

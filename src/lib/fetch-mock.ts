import delay from './delay';

const fetchMock = async <T extends any>(
  data: T,
  errMsg?: string,
  delayTime = 500
): Promise<T> => {
  await delay(delayTime);

  if (errMsg !== undefined) {
    throw new Error(errMsg);
  }

  return data;
};

export default fetchMock;

const delay = (delayTime: number): Promise<undefined> =>
  new Promise((resolve) => setTimeout(resolve, delayTime));

export default delay;

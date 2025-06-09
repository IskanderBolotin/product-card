export const fetchApi = <T>(data: T, timeMs: number = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeMs)
  })
};
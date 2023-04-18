type FetchStatus = 'pending' | 'failed' | 'success';

export const wrapPromise = <T>(promise: Promise<T>) => {
  let status = 'pending';
  let result: T | Error;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'failed';
      result = e;
    }
  );
  return {
    read() {
      if (status == 'pending') {
        throw suspender;
      } else if (status == 'failed') {
        throw result;
      } else {
        return result;
      }
    },
  };
};

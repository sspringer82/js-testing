function myAsync(cb, value, time) {
  setTimeout(() => {
    cb(value);
  }, time);
}

function myAsyncPromise(value, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

async function myAsyncAsync(value, time) {
  const result = await myAsyncPromise(value, time);
  return result;
}

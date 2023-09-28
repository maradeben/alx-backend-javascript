export default function handleResponseFromAPI(then) {
  const promise = new Promise((resolve, reject) => {
    if (then) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error());
    }
  });

  promise.then(() => {
    console.log('Got a response from the API');
  });

  return promise;
}

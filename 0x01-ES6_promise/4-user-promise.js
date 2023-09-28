export default function signUpUpser(firstName, lastName) {
  const promise = new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
  return promise;
}

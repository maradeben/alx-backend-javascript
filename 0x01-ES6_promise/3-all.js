import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises).then((responses) => {
    console.log(`${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`);
  }).catch(() => {
    // error
  });
}

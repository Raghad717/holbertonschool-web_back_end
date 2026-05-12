import { uploadPhoto, createUser } from './utils';

/**
 * Resolves multiple promises and logs profile information.
 * In case of failure, logs an error message.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // results[0]  uploadPhoto
      // results[1] createUser
      const { body } = results[0];
      const { firstName, lastName } = results[1];

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

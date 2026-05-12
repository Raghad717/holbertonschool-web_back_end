/**
 * Returns a promise based on the success boolean argument.
 * @param {Boolean} success - The flag to resolve or reject the promise.
 * @returns {Promise} A promise that resolves with an object or rejects with an error.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

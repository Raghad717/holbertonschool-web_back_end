/**
 * Appends handlers to a promise to manage API responses.
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise} The promise with appended handlers.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}

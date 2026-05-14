/**
 * Returns a rejected promise with an error message about the file.
 * @param {String} fileName - The name of the file that failed to upload.
 * @returns {Promise} A rejected promise with an Error object.
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

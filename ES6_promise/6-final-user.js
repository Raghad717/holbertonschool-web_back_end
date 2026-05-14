import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles profile signup by calling signUpUser and uploadPhoto.
 * Returns a promise that resolves to an array of results after all promises are settled.
 * @param {String} firstName - User's first name.
 * @param {String} lastName - User's last name.
 * @param {String} fileName - Name of the photo file.
 * @returns {Promise<Array>} Array of objects with status and value/reason.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const formattedResults = [];

    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        formattedResults.push({
          status: result.status,
          value: result.value,
        });
      } else {
        
        formattedResults.push({
          status: result.status,
          value: String(result.reason),
        });
      }
    });

    return formattedResults;
  });
}

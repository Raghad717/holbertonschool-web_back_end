/**
 * Returns a resolved promise with an object containing firstName and lastName.
 * @param {String} firstName - The user's first name.
 * @param {String} lastName - The user's last name.
 * @returns {Promise} A resolved promise with the user data.
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

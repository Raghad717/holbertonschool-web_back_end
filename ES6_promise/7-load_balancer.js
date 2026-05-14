/**
 * Returns the result of the promise that settles first.
 * @param {Promise} chinaDownload - The first promise to race.
 * @param {Promise} USDownload - The second promise to race.
 * @returns {Promise} The value of the first promise that resolves.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

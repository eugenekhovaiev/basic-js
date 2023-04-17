const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let results = {};

  let dns = [[], [], []];

  for (let i = 0; i < domains.length; i++) {
    let domainDNS = domains[i].split('.');

    if (domainDNS.length === 3) {
      dns[0].push(domainDNS[0]);
      dns[1].push(domainDNS[1]);
      dns[2].push(domainDNS[2]);
    } else if (domainDNS.length === 2) {
      dns[1].push(domainDNS[0]);
      dns[2].push(domainDNS[1]);
    } else if (domainDNS.length === 1) {
      dns[2].push(domainDNS[0]);
    }
  }

  if (dns[2].length) {
    results[`.${dns[2][0]}`] = dns[2].length;
  }
  if (dns[1].length) {
    results[`.${dns[2][0]}.${dns[1][0]}`] = dns[1].length;
  }
  if (dns[0].length) {
    results[`.${dns[2][0]}.${dns[1][0]}.${dns[0][0]}`] = dns[0].length;
  }

  return results;
}

module.exports = {
  getDNSStats
};

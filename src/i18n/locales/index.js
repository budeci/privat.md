/* eslint-disable global-require */

const localeData = [
  ...require('react-intl/locale-data/ro'),
  ...require('react-intl/locale-data/ru'),
];

module.exports = {
  localeData,
  languages: [{ value: 'ro', text: 'Ro' }, { value: 'ru', text: 'Ру' }],
};

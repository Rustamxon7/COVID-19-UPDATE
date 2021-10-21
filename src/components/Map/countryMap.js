// eslint-disable-next-line consistent-return
const countryMap = (value) => {
  if (value !== '') {
    return `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${value.substring(0, 2)}/vector.svg`;
  }
};

export default countryMap;

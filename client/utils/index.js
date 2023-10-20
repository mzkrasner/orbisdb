/** Wait for x ms in an async function */
export const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/** Returns a shortened version of a string */
export function shortAddress(address, number = 5) {
  if(!address) {
    return "-";
  }

  const firstChars = address.substring(0, number);
  const lastChars = address.substr(address.length - number);
  return firstChars.concat('-', lastChars);
}

/** Use enum instead of magic numbers for statuses */
export const STATUS = {
  ACTIVE: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: 3,
};
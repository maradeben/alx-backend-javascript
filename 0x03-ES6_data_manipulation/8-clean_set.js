export default function cleanSet(set, startString) {
  const cleanset = [];

  if (startString.length < 1) {
    return '';
  }

  for (const value of set) {
    if (value.startsWith(startString)) {
      cleanset.push(value.substring(startString.length));
    }
  }
  return cleanset.join('-');
}

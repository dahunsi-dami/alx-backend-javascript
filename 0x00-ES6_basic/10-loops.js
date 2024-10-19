export default function appendToEachArrayValue(array, appendString) {
  const outp = [];
  for (const i of array) {
    outp.push(appendString + i);
  }

  return outp;
}

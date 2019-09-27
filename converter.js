const converter = (str) => {
  if (str !==  String(str)) {
    throw new Error('The parameter does not make sense');
  }
  let result = '';
  const nstr = str.toUpperCase();
  for (let i = 0; i < str.length; i += 1) {
    if (nstr[i] === 'A') {
      result += 'U';
      }
    else if (nstr[i] === 'C') {
      result += 'G';
      }
    else if (nstr[i] === 'G') {
      result += 'C';
      }
    else if (nstr[i] === 'T') {
      result += 'A';
      }
    else {
        throw new Error('Invalid character in string!');
      }
    }
  return result;
}
export default converter;

function CommaSeperator(number) {
  const finalString = typeof number === 'string' ? Number(number) : number;
  
  function formatNumberWithCommas(num) {
    return num?.toLocaleString('en-IN');
  }
  const formattedNumber = formatNumberWithCommas(finalString);

  return formattedNumber;
}

export default CommaSeperator;

const dotter = (amount, decimalCount = 2, decimal = ",", thousands = ".") => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};

/**
 * Bu method float olarak aldığı para biriminin ana parasını normal kuruş kısmını daha küçük olacak şekilde return eder.
 * @param {float} amount 
 * @returns {string} moneyFormatter
 */
const moneyFormatter = (amount) => {
  const costs = dotter(amount).split(',');
  const changeMoney = costs[1] ? `,<small>${costs[1]} TL</small>` : '<small> TL</small>';
  return costs[0] + changeMoney;
};

export default moneyFormatter;

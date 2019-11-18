import writtenNumber from 'written-number';

/**
 * Bu method float olarak aldığı para birimini yazıyla lira ve kuruşunu ayırarak yazdırır.
 * @param {float} money 
 * @returns {string} writtenMoney
 */
const writtenMoney = (money) => {
  const costs = money.split('.');
  const mainMoneyText = `${writtenNumber(costs[0], {lang: 'tr'})} lira`;
  const changeMoneyText = costs[1] ? ` ${writtenNumber(costs[1], {lang: 'tr'})} kuruş` : '';
  return mainMoneyText + changeMoneyText;
}

export default writtenMoney;

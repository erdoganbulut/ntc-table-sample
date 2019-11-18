import writtenNumber from 'written-number';

const writtenMoney = (money) => {
  const costs = money.split('.');
  const mainMoneyText = `${writtenNumber(costs[0], {lang: 'tr'})} lira`;
  const changeMoneyText = costs[1] ? ` ${writtenNumber(costs[1], {lang: 'tr'})} kuruş` : '';
  return mainMoneyText + changeMoneyText;
}

export default writtenMoney;

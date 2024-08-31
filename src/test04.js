const revenuesPerState = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const calculatePercentage = revenue => {
  const totalRevenue = Object.values(revenue).reduce((acc, value) => acc + value, 0);
  const percentages = {};

  for(const state in revenue) {
    percentages[state] = (revenue[state] / totalRevenue * 100).toFixed(2) + '%';
  };

  return percentages
};

const percentages = calculatePercentage(revenuesPerState);
console.log('Percentual de Representação por Estado:');

for(const state in percentages) {
  console.log(`${state}: ${percentages[state]}`)
}

const updatePage = () => {
  document.getElementById('sp').textContent = percentages.SP;
  document.getElementById('rj').textContent = percentages.RJ;
  document.getElementById('mg').textContent = percentages.MG;
  document.getElementById('es').textContent = percentages.ES;
  document.getElementById('others').textContent = percentages.Outros;
};
document.addEventListener('DOMContentLoaded', updatePage);
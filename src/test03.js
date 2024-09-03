const calculateRevenue = () => {
  fetch('./src/faturamento.json')
    .then(res => res.json())
    .then(datas => {
      const validRevenues = datas.filter(d => d.valor > 0);
      const lowestRevenues = Math.min(...validRevenues.map(d => d.valor));
      const highestRevenues = Math.max(...validRevenues.map(d => d.valor));

      const monthlyAverage = validRevenues.reduce((acc, current) => acc + current.valor, 0) / validRevenues.length;
      const daysAboveMonthlyAverage = validRevenues.filter(d => d.valor > monthlyAverage).length;

      document.getElementById('lowest').textContent = `R$ ${lowestRevenues.toFixed(2)}`;
      document.getElementById('highest').textContent = `R$ ${highestRevenues.toFixed(2)}`;
      document.getElementById('daysAboveAverage').textContent = `${daysAboveMonthlyAverage} dias`;

      console.log(`Questão 3: Menor valor de faturamento: ${lowestRevenues.toFixed(2)}`)
      console.log(`Questão 3: O maior valor de faturamento: ${highestRevenues.toFixed(2)}`)
      console.log(`Questão 3: Dias com Faturamento Superior à Média: ${daysAboveMonthlyAverage}`)
    })
};

// document.getElementById('calc').addEventListener('click', calculateRevenue);
document.addEventListener('DOMContentLoaded', calculateRevenue);
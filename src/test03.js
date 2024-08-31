const calculateRevenue = () => {
  fetch('./src/faturamento.json')
    .then(res => res.json())
    .then(datas => {
      const validRevenues = datas.dias.filter(d => d.faturamento > 0);
      const lowestRevenues = Math.min(...validRevenues.map(d => d.faturamento));
      const highestRevenues = Math.max(...validRevenues.map(d => d.faturamento));

      const monthlyAverage = validRevenues.reduce((acc, current) => acc + current.faturamento, 0) / validRevenues.length;
      const daysAboveMonthlyAverage = validRevenues.filter(d => d.faturamento > monthlyAverage).length;

      document.getElementById('lowest').textContent = lowestRevenues.toFixed(2);
      document.getElementById('highest').textContent = highestRevenues.toFixed(2);
      document.getElementById('daysAboveAverage').textContent = daysAboveMonthlyAverage;

      console.log(lowestRevenues.toFixed(2))
      console.log(highestRevenues.toFixed(2))
      console.log(daysAboveMonthlyAverage)

    })
};

document.getElementById('calc').addEventListener('click', calculateRevenue);
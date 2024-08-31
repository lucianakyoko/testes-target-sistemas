const isFibonacci = num => {
  if (num < 0) return false;
  if (num === 0) return true;

  let a = 0, b = 1;
  while (a < num) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return a === num;
};

const checkFibonacci = event => {
  event.preventDefault(); 

  const input = document.getElementById('numberInput').value.trim();
  if (input === '') {
    document.getElementById('result').innerText = 'Por favor, insira um número válido';
    return;
  }

  const num = parseInt(input, 10);
  let resultMessage = '';

  if (isNaN(num) || num < 0) {
    resultMessage = 'Por favor, insira um número válido';
  } else {
    if (isFibonacci(num)) {
      resultMessage = `${num} pertence à sequência Fibonacci`;
    } else {
      resultMessage = `${num} não pertence à sequência Fibonacci`;
    }
  }

  document.getElementById('result').innerText = resultMessage;
  console.log(resultMessage);
};

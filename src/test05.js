const reverseString = string => {
  let reversed = '';
  for(let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  };
  return reversed;
};

const handleClick = (event) => {
  event.preventDefault();
  const input = document.getElementById('stringInput').value;
  const reversed = reverseString(input);

  document.getElementById('reversedText').textContent = reversed;
  console.log(`Questão 5: Texto invertido: ${reversed}`)
};


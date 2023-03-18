function computePower(num, exponent) {
  // your code here
  var resultado = 1;
  for (let i = 1; i <= exponent; i++) {
    resultado = resultado * num ;
  };
  return (resultado);
}

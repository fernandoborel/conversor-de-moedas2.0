// variáveis para exibir valores na tela
var elementoValorConvertido = document.getElementById("valorConverter");
var elementoValorConvertido = document.getElementById("valorConvertido");
var elementoValorConvertido = document.getElementById("valorConvertidoL");

// Converter para Euro
function Converter() {
  let valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  let valorEmEuroNumerico = parseFloat(valor);

  let valorEmReal = valorEmEuroNumerico / 6.25;

  let valorConvertido = "O resultado em euro é € " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

// Converter para Dólar
function ConverterUs() {
  let valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  let valorEmRealNumerico = parseFloat(valor);

  let valorEmDolar = valorEmRealNumerico / 5.34;

  let valorConverter = "O resultado em dólar é U$ " + valorEmDolar.toFixed(2);
  elementoValorConvertido.innerHTML = valorConverter;
}

// Converter para Libra
function ConverterLi() {
  let valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  let valorEmLibraNumerico = parseFloat(valor);

  let valorEmLibra = valorEmLibraNumerico / 7.3;

  let valorConvertidoL = "O resultado em libra é £ " + valorEmLibra.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertidoL;
}

// Limpar
function Limpar() {
  let limpar = document.getElementById("valor");
  let zerar = (limpar.value = "");
  elementoValorConvertido.innerHTML = "";
}
// const saudacao = 'Bem-vindo ao sistema';

// const aviso = 'Você está no sistema';

// const despedida = 'Até logo'

// console.log(saudacao);

// setTimeout(() => {
//   console.log(aviso)
// }, 2000);

// setTimeout(() => {
//   console.log(despedida)
// }, 0)

fetch("https://fakestoreapi.com/products/1")
  .then((resposta) => resposta.json())
  .then((resposta) => console.log(resposta))
  .catch((erro) => console.log(erro));

  fetch
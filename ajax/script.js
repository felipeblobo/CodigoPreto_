
let cep = document.querySelector("#cep");
let cepValue = document.querySelector("#cep").value;


// function dotsInCep(cepValue) {
//   let cepWithDots = cepValue.match(/.{1,3}/g).join(".");
// }

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

cep.addEventListener("keyup", (event) => {
  let search = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => console.log("Erro ao consultar CEP: " + e));
});

// const doc = fetch('https://viacep.com.br/ws/41720051/json/');
// doc.then((resolucao) => {
//  return resolucao.json()
//   }). then(corpo => console.log(corpo.bairro))

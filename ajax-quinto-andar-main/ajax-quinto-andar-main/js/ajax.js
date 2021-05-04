const paisFocado = document.querySelector('#id-pais');
const sigla = document.getElementById('sigla');
const capital = document.getElementById('capital');
const regiao = document.getElementById('regiao');
const ddi = document.getElementById('ddi');
const botao = document.getElementById('botao');


 const mudaPais = (event) => {
     const pais = event.target.value;
     fetch(`https://restcountries.eu/rest/v2/name/${pais}`)
     .then(res => res.json())
     .then(response => {
       const responsePais = response[0];

       nome.innerText = responsePais.name;
       sigla.innerText = responsePais.alpha3Code;
       capital.innerText = responsePais.capital;
       regiao.innerText = responsePais.region;
       ddi.innerText = responsePais.callingCodes[0]
     })
     .catch(erro => {
       console.error('Deu ruim: ' + erro)
     })
}


paisFocado.addEventListener('change', mudaPais);
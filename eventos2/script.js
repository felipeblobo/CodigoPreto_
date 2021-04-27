const form = document.querySelector('form');

const eventoSubmit = form.addEventListener('submit', (event) => {
  const name = document.getElementById('name').value;
  const nameWithoutSpaces = name.trim();
  const nomeESobrenome = nameWithoutSpaces.split(' ');

  const blocklist = [
    'porra',
    'canalha',
    'merda',
    'caralho'
    ]  

  const nomeSujo = blocklist.map(word => nomeESobrenome.includes(word))
  .find(elemento => elemento === true);

  if(nomeSujo) {
    alert('lave a boca com ')
    event.preventDefault();
  }

  if(nameWithoutSpaces === '') {
    alert('Não pode enviar vazio.')
    event.preventDefault();
    return;
  }

  if(nomeESobrenome.length < 2){
    alert('coloca o sobrenome');
    event.preventDefault();
    return
  }


})
  const httpRequest = new XMLHttpRequest();
  document.getElementById("botao").addEventListener('click', fazendoRequisicao);


  function fazendoRequisicao() {
    
    if (!httpRequest) {
      alert('Não foi possível criar a instância XMLHTTP');
      return false;
    }
    httpRequest.onreadystatechange = inserindoTexto;
    httpRequest.open('GET', 'teste.txt');
    httpRequest.send();
  }

  function inserindoTexto() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const alertBox = document.querySelector('#div');
        const h2 = document.createElement('h2');
        alertBox.appendChild(h2);
        h2.innerText = httpRequest.responseText;
        console.log(httpRequest.responseText);

      } else {
        alert('Houve problema com a requisição.');
      }
    }
  }
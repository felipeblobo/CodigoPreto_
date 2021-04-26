
// 2
let botaoCumprimenta = document.getElementById("botaoCumprimenta");

botaoCumprimenta.onclick = function () {
  alert("Olá!");
};



// 3
let botaoAlterarFundo = document.getElementById("botaoAlterarFundo");

botaoAlterarFundo.onclick = function () {
  document.querySelector("body").style.backgroundColor = "green";
};


// 4


function vendoImagem() {
  console.log("estou vendo a imagem");
}

document.getElementById("imagem1").addEventListener("mouseover", vendoImagem);



// 5
let imagem2 = document.getElementById("imagem2");

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log(x, y)
}
  

function clicandoImagem(event) {

  console.log("estou clicando na imagem");
  console.log(event.pagex, event.pagey)
}


imagem2.addEventListener("click", showCoords);




// 6 // 7

let body = document.querySelector("body");

function bodyVermelho () {
    this.style.backgroundColor = 'red';
    this.removeEventListener('click', bodyVermelho);
}

body.addEventListener('click', bodyVermelho);




// 8

let botaoFormulario = document.getElementById('botaoFormulario');



function bloqueandoGoogle(event) {
    event.preventDefault();
    alert('Não é possível enviar.');
}

botaoFormulario.addEventListener('click', bloqueandoGoogle);

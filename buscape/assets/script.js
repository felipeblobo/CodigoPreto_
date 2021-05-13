const root = document.querySelector(".root");

const puttingCards = async() => {
  const fetching = await fetch("https://raw.githubusercontent.com/buscape-company/exercicios/master/frontend/resources/data.json")
  const res = await fetching.json();
  const arrayProdutos = res.items; 

    arrayProdutos.forEach((produto) => {
      const precoFormatado = new Intl.NumberFormat('pt-BR', {style: "currency", currency: 'BRL'}).format(produto.product.price.value)
      const parcelaFormatada = new Intl.NumberFormat('pt-BR', {style: "currency", currency: 'BRL'}).format(produto.product.price.installmentValue)
      root.innerHTML += 
      `<div class='produto'>
        <div class='divImg'>          
           <img class='backClick' onClick={backPhoto()} src='./assets/left.svg'/>          
           <img class='image' src="https://source.unsplash.com/random/900x1200">      
            <img class='forwardClick' onClick={nextPhoto()} src='./assets/right.svg'/> 
          
        </div>
          <h2>${produto.product.name}</h2>
        <div class='financialAspects'>
          <span><strong>${precoFormatado}</strong></span>
          <span>ou pague somente: ${parcelaFormatada}</span>
          <span> em ${produto.product.price.installments} parcelas.</span>
        </div>
        <button  id=${produto.product.id} onClick={addingToCar()} class='buyButton'>COMPRAR</button>
      </div>
      `
    });
}

puttingCards()

const teste = document.querySelectorAll(".test");
console.log(teste)

teste.forEach((button) => {
  console.log('oi')
})


// function backPhoto() {
 
//   const back = event.target;
//   let nextSibling = back.nextElementSibling;
//   nextSibling.setAttribute('src', 'https://source.unsplash.com/daily')
  
// }

// function nextPhoto() {
 
//   const forth = event.target;
//   let previousSibling = forth.previousElementSibling;
//   previousSibling.setAttribute('src', 'https://source.unsplash.com/weekly?nature/900x1200')
// }

// function addingToCar() {
//   const shopsButton = event.target;
//   shopsButton.addEventListener('click', sendingData )
// }


// function sendingData(event) {
//   console.log(event.target)
// }

// function addingToCar() {
//   console.log(items)
// }



// buyButtons.forEach((button) => {
//   button.addEventListener('click',() => {
//     let key = this.getAttribute('id');
//     items[key].quantity++;
//     addingToCar()

//   })
// })
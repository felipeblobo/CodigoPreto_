const container = document.querySelector(".container");
const arrayImages = ["https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1563699182-58375278b2b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80", "https://images.unsplash.com/photo-1617861133022-e475ee397af3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1557869240-a807b7472dfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1587083281498-7e451ddf5273?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1550074711-dd6c5aba1d45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80","https://images.unsplash.com/photo-1602409202727-4c6f0ac96bcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80", "https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=412&q=80", "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"];

const sortPicture = arrayImages[Math.ceil(Math.random() * arrayImages.length)]

const puttingCards = async() => {
  const fetching = await fetch("https://raw.githubusercontent.com/buscape-company/exercicios/master/frontend/resources/data.json")
  const res = await fetching.json();
  const arrayProdutos = res.items; 
 

    arrayProdutos.forEach((produto) => {
      const precoFormatado = new Intl.NumberFormat('pt-BR', {style: "currency", currency: 'BRL'}).format(produto.product.price.value)
      const parcelaFormatada = new Intl.NumberFormat('pt-BR', {style: "currency", currency: 'BRL'}).format(produto.product.price.installmentValue)
      container.innerHTML += 
      `<div class='produto'>
        <div class='divImg'>          
           <img class='backClick' onClick={backPhoto()} src='./assets/left.svg'/>          
           <img class='image' src="https://source.unsplash.com/random/900x1200">      
            <img class='forwardClick' onClick={nextPhoto()} src='./assets/right.svg'/> 
          
        </div>
          <h3>${produto.product.name}</h3>
        <div class='financialAspects'>
          <span><strong>${precoFormatado}</strong></span>
          <span>ou pague somente: ${parcelaFormatada}</span>
          <span> em ${produto.product.price.installments} parcelas.</span>
        </div>
        <button  id=${produto.product.id} onClick={changingCarAndAddingProducts()} class='buyButton'>COMPRAR</button>
      </div>
      `
    });
}

puttingCards()

// const buyButtons = document.querySelectorAll("button.buyButton");
// console.log(buyButtons)


function backPhoto() {
 
  const back = this.event.target;
  let nextSibling = back.nextElementSibling;
  nextSibling.setAttribute('src', sortPicture)
  
}

function nextPhoto() {
 
  const forth = this.event.target;
  let previousSibling = forth.previousElementSibling;
  previousSibling.setAttribute('src', sortPicture)
}


function changingCarAndAddingProducts() {

 const carro = document.getElementById('shopsCar');
 carro.setAttribute('src', "./assets/shopping-cart-plus.svg");

 const dinamicTable = document.getElementById('shopsTable');
 console.log(dinamicTable)
//  tbody.innerHTML += `
//           <tr>
//             <td>${this.event.path[1].children[1].innerText}</td>
//             <td>2</td>
//             <td>5</td>
//             <td>5000</td> 
//           </tr>

//  `

 console.log(this.event.path[1].children[1]);

}

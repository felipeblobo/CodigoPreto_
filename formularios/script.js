const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');
const errorList = document.getElementById('errorList')
const error1 = document.getElementById('li1');
const error2 = document.getElementById('li2');
const form = document.querySelector('form');

const fillingForm = form.addEventListener('keyup', () => {
  
  if (password.value !== passwordConfirmation.value) {
    
    error1.innerText = "Insira senhas iguais para prosseguir";
    errorList.style.backgroundColor = '#f14e4e';
   
   }

   if (password.value === passwordConfirmation.value) {
    error1.innerHTML = "";
    errorList.style.backgroundColor = '#ffff';
  
   }
  
})



const submitForm = form.addEventListener('submit', (event) => {
  if (password.value !== passwordConfirmation.value) {
   event.preventDefault();
  }

  if(password.value < 9) {
    error2.innerHTML = 'Sua senha deve ter no mínimo 8 caracteres.'
    event.preventDefault();
  }
})

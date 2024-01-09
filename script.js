let inputName = document.getElementById('USERNAME')
let inputPhone = document.getElementById('PHONE')
let sendButton = document.getElementById('sendButton')

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".BTN-close");







//-----------------------МОДАЛЬНОЕ ОКНО


const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);



document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();

  }
  
});


const openModal = function () {

    


  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  inputName.value = ""
  inputPhone.value = ""

    

};


openModalBtn.addEventListener("click", openModal);



const sendModal = function(){
    if (inputPhone.value.length < 11 & inputName.value.length < 3){

       
        alert("Заполните поля перед отправкой формы")
        
        inputName.value = ""
        inputPhone.value = ""
    
    } else if ( (inputPhone.value.length < 11 & inputName.value.length > 0) ){
        alert("Введите номер телефона")
        inputName.value = ""
        inputPhone.value = ""
        
        
    } else{
        alert("Спасибо за обращение! Ваша заявка принята")
        closeModal();
        }




}

sendButton.addEventListener("click",sendModal );







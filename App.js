let btns = document.querySelectorAll(".btn");
let number = document.querySelector(".number");
let container2 = document.querySelector("#container-2");
let container1 = document.querySelector("#container");
var count = 0;

let submit = document.querySelector(".submit");


btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    
    
    let text = e.currentTarget.classList;
    if(text.contains("1")){
      submit.addEventListener("click", function (){

     
     container1.style.display = "none";
       container2.style.display = "block";
    number.textContent = "1";
      
    })
    }
    
    
    if (text.contains("2")) {
    submit.addEventListener("click", function (){

      container1.style.display = "none";
      container2.style.display = "block";
      number.textContent = "2";
    })
    }
    
    if (text.contains("3")) {
    submit.addEventListener("click", function (){

      container1.style.display = "none";
      container2.style.display = "block";
      number.textContent = "3";
    })
    }
    if (text.contains("4")) {
    submit.addEventListener("click", function (){

      container1.style.display = "none";
      container2.style.display = "block";
      number.textContent = "4";
    })
    }
    if (text.contains("5")) {
    submit.addEventListener("click", function (){

      container1.style.display = "none";
      container2.style.display = "block";
      number.textContent = "5";
    })
    }
    
    
    
  })
  
})



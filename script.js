'use strict';

const modal=document.querySelectorAll(".show-modal");

const overlay=document.querySelector(".overlay");
const btnCloseWindow=document.querySelector(".close-modal");
const modelShow=document.querySelector(".modal");

// for(let i=0;i<modal.length;i++){
//   modal[i].addEventListener("click", 
//   function (){ 

//     modelShow.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//     // overlay.style.opacity=0.1;  
//     // modelShow.style.display="inline-block";})

//   btnCloseWindow.onclick= function(){
//     modelShow.style.display="none";
//     overlay.classList.remove("overlay");
//   }
// })}

modal.forEach( function(modal){
    modal.addEventListener("click", 
    function (){ 
  
      modelShow.classList.remove("hidden");
      overlay.classList.remove("hidden");
      // overlay.style.opacity=0.1;  
      // modelShow.style.display="inline-block";})
  
    // btnCloseWindow.onclick= function(){
    //   modelShow.style.display="none";
    //   overlay.classList.remove("overlay");
    // }
  })})

  const closeWindow=function(){

    modelShow.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  btnCloseWindow.addEventListener("click", closeWindow);

  overlay.addEventListener("click",closeWindow)

// overlay.addEventListener("click", function(){
//     modelShow.classList.add("hidden");
//     overlay.classList.add("hidden");
// })

document.addEventListener("keydown", function(e){
    if(e.key==="Escape"){
        // console.log(e.key);
        if(!modelShow.classList.contains("hidden")){
        closeWindow();
        }
    }
    
    
});

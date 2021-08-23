var addBtn = document.querySelector ("#addbutton a");
var popup = document.querySelector("#popupbackground");
var closeBtn = document.querySelector("#popup form a");

addBtn.addEventListener("click",()=>{
    popup.style.display ="flex";
    popup.style.transition ="display 5s";

})

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
    popup.style.transition = "display 5s";
})
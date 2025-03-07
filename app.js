let modal = document.querySelector(".burger-face")
let opener = document.querySelector("#opener")
let closer = document.querySelector("#closer")

console.log(closer);



opener = addEventListener("click", () => {
   console.log("Close button clicked");
   modal.classList.add("show_modal")    

    }
);


// closer = addEventListener("click", () => {
    
//     modal.classList.remove("show_modal")
// });

modal.addEventListener("click", (e)=> {
    console.log(e.target);
    if(e.target.id === "closer" || e.target.id === "modal") {
        modal.classList.remove("show_modal")
    };
})
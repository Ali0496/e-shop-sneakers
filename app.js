let modal = document.querySelector("#modal")
let opener = document.querySelector("#opener")
let closer = document.querySelector("#closer")




opener.addEventListener("click", () => {
   modal.classList.add("show_modal")       
    }
);


closer.addEventListener("click", () => {  
    modal.classList.remove("show_modal")
});

modal.addEventListener("click", (e)=> {
    console.log(e.target);
    if(e.target.id === "closer" || e.target.id === "modal") {
        modal.classList.remove("show_modal")
    };
})



// let phrase = "Bugun boramizmi"

// let a = {
//     key: "yes"
// }
// let b = a;
// b.key = "no"

// let x = {
//     ok: "ok"
// }
// let z = x;
// let y = {
//     ok: "ok"
// }

// console.log(y);


// const obj = {
//     firstName: "jhon",
//     age: 30
// }
// obj.age = 40;

// let first = {
//     name: "Jhon",
//     age: 30
// }

// for(let key in first) {
//     clone
// }

// let f = {
//     address:"Toshkent"

// }
// let clone = Object.assign(f, first);
// clone.address = "Zomin";
// console.log(f);

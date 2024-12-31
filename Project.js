let box = document.querySelector("#light")

let btn1 = document.querySelector("#on")
let btn2 = document.querySelector("#off")

btn1.addEventListener("click", function(){
    box.style.backgroundColor = "yellow"
}
)

btn2.addEventListener("click", function(){
    box.style.backgroundColor = "white"
}
)
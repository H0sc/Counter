const decrement = document.getElementById("decrement")
const increment = document.getElementById("increment")
const reset = document.getElementById("reset")
let count = document.getElementById("count")

count.innerHTML = 0;
decrement.addEventListener("click", decrementFunction)
increment.addEventListener("click", incrementFunction)
reset.addEventListener("click", resetFunction)

function decrementFunction() {
    count.innerHTML--
}

function incrementFunction() {
    count.innerHTML++
}

function resetFunction() {
    count.innerHTML = 0
}
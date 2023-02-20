let count = 0
let countEl = document.getElementById("count-el")
let total = document.getElementById("total")

function increment() {
    count+= 1
    countEl.innerText = count
    console.log(countEl)
}

function save() {
    let xp = count + " -"
    total.textContent+= xp
    countEl.textContent = 0
    count = 0
    
}
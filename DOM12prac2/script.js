

let q = document.querySelector('h1')
let w = document.querySelector('ol')
let e = document.querySelector('.five')
let r = document.querySelector('input')

console.log(q)
console.log(w)
console.log(e)
console.log(r)

e.addEventListener('click',function(){
    let txt = r.value
    let newli = document.createElement('li')
    newli.textContent = txt
    addButtons(newli)
    w.appendChild(newli)
    r.value = " "
})

function addButtons(li){
    let rem = document.createElement('button')
    rem.textContent = "Remove"
    rem.classList.add('Remove')
    li.appendChild(rem)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.classList.add("Up")
    li.appendChild(up)

    let dow = document.createElement('button')
    dow.textContent = "Down"
    dow.classList.add("Down")
    li.appendChild(dow)
}



w.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.className === "Remove") {
            let h = e.target.parentElement
            let k = h.parentElement
            w.removeChild(h)
        }
        else if (e.target.className === "Up") {
            let h = e.target.parentElement
            let k = h.parentElement
            let pE = h.previousElementSibling
            if (pE) {
                w.insertBefore(h, pE)
            }
        }
        else if (e.target.className === 'Down') {
            let h = e.target.parentElement
            let k = h.parentElement
            let nE = h.nextElementSibling
            if (nE) {
                w.insertBefore(nE, h)
            }
        }
    }
})
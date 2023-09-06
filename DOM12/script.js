



let u = document.querySelector('ul')
let i = document.querySelector('input')
let b = document.querySelector('#one')

console.log(u)
console.log(i)
console.log(b)


b.addEventListener('click',function(){
    let txt = i.value
    let Nli = document.createElement('li')
    Nli.textContent = txt
    addButtons(Nli)
    u.appendChild(Nli)
    i.value = " "
})



function addButtons(li){
    let r = document.createElement("button")
    r.textContent = 'Remove'
    r.classList.add('Remove')
    li.appendChild(r)

    let u = document.createElement("button")
    u.textContent = 'Up'
    u.classList.add('Up')
    li.appendChild(u)

    let d = document.createElement("button")
    d.textContent = 'Down'
    d.classList.add('Down')
    li.appendChild(d)
}


u.addEventListener('click', function (e) {
    if (e.target.tagName === "BUTTON") {
        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let u = li.parentElement
            u.removeChild(li)
        }
        else if (e.target.className === 'up') {
            let li = e.target.parentElement
            let u = li.parentElement
            let previousli = li.previousElementSibling
            if(previousli){
                u.insertBefore(li,previousli)
            }
         }
         else if (e.target.className === 'down'){
            let li = e.target.parentElement
            let u = li.parentElement
            let nextli = li.nextElementSibling
            if (nextli){
                u.insertBefore(nextli,li)
            }
         }
    }

})
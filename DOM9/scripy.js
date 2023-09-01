


let w = document.querySelector('h1')
let r = document.querySelector('input')
let t = document.querySelector("button")


console.log(w)
console.log(r)
console.log(t)

t.addEventListener('click',function(){
     let txt = r.value
     w.style.color = txt
     r.value = " "
})
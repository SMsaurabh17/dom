let  h = document.querySelector('h1')
let  u = document.querySelector('ul')
let  i = document.querySelector('input')
let  b = document.querySelector('button')

console.log(h)
console.log(u)
console.log(i)
console.log(b)

b.addEventListener('click',function(){
    let txt = i.value
    let newli = document.createElement('li')
   newli.textContent = txt
   u.appendChild(newli)
   i.value = " " 
})

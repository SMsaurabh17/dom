


let head = document.querySelector('h1')
let ol = document.querySelector('ol')
let i = document.querySelector('input')
let b = document.querySelector('button')

console.log(head)
console.log(ol)
console.log(i)
console.log(b)


b.addEventListener('click',function(){
    let txt = i.value
    let newELE = document.createElement('li')
    newELE.textContent = txt
    ol.appendChild(newELE)
    i.value = " "
})

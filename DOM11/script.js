


let u = document.querySelector('ul')
let i = document.querySelector('input')
let b = document.querySelector('#one')
console.log(u)
console.log(i)
console.log(b)


b.addEventListener('click',function(){
   let txt = i.value
   let newli = document.createElement('li')
   newli.textContent = txt
   addButtons(newli)
   u.appendChild(newli)
   i.value = ' '
})


function addButtons(li){
   let r = document.createElement('button')
   r.textContent = 'Remove'
   r.classList.add('Remove')
   li.appendChild(r)

   let up = document.createElement('button')
   up.textContent = 'Up'
   up.classList.add('Up')
   li.appendChild(up)

   let d = document.createElement('button')
   d.textContent = "Down"
   d.classList.add('Down')
   li.appendChild(d)
}
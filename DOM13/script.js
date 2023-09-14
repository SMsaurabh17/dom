
// DIFFERENT WAYS TO SELECT AN ELEMENT USING [querySelector ,querySelectorAll ,getElementById]

let q = document.querySelector('#one')
// let w = document.querySelector('.frontend')
// let e = document.querySelector('.backend')

console.log(q)
// console.log(w)
// console.log(e)


// when we want to see all elements under ul and ol
// returns node lists

let r = document.querySelectorAll('#one')
let t = document.querySelectorAll('.frontend')
let y = document.querySelectorAll('.backend')


console.log(r)
console.log(t)
console.log(y)

// ---------------

q.addEventListener('click',function(){
    for(let i = 0 ; i < t.length ; i++){
        t[i].style.color = 'red'
        y[i].style.color = 'yellow'
    }
})



// let u = document.getElementById('one')
// let i = document.getElementsByClassName('frontend')
// let o = document.getElementsByName('be')
// let p = document.getElementsName('li[name = "be"]')

// console.log(u)
// console.log(i)
// console.log(o)
// console.log(p)


// css selectors

// 1.by tagname
let bytagname=document.querySelector('h1')
console.log(bytagname)

// 2.by class
let byclass=document.querySelector('.four')
console.log(byclass)

// 3.by id
let byid = document.querySelector('#two')
console.log(byid)

// 4.by attribute
let byattribute = document.querySelector('h2[name="n"]')
console.log(byattribute)


// program 1     why we have used {} brackets

let h2 = document.querySelector('#two')
console.log(h2)
h2.addEventListener('click',function(){                               
    h2.textcontent = "shyam"
    h2.textContent = "ram"

})

// console.log(h2.textContent)
// h2.textContent = 'ram'



// program 2

let h2 =document.querySelector('h2[name="n"]')
h2.addEventListener('click',function(){
    h2.textContent = 'shyam'
    h2.style.color = "blue";

})



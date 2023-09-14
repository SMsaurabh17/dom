


// let q = document.getElementById('two')
// let w = document.getElementsByTagName('li')
// let e = document.getElementsByName('n')
// let r = document.getElementsByClassName('three')

// console.log(q)
// console.log(w)
// console.log(e)
// console.log(r)


/* <p id="two" class="three" name="n">this is lists of fruits</p> */

let Element = document.querySelector('p')
console.log(Element.className)
Element.classList.add('four')
Element.classList.remove('four')
Element.classList.toggle('seven')
Element.classList.toggle('seven')
console.log(Element)



let d1 = Element.getAttribute('id')
console.log(d1)

let d2 = Element.setAttribute('id','nine')
console.log(Element)

// Element.removeAttribute('id')
// console.log(Element)
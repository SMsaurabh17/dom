

// string as parameter and string as return type

function greet(word){
    return `good ${word} !`
}
let q = greet('afternoon')
console.log(q)


// array as parameter and array as returntype

let a = ['saurabh','himanshu','abhi']
function name(arr){
    a.push ('nayan')
    return arr
}
let w = name(a)
console.log(w)


// object as parameter and object as returntype

let e = {
    firstname : 'saurabh',
    lastname : 'mahajan'
}

function addcity(obj){
    obj.city = 'pune'
    return obj
}
let q1 = addcity(e)
console.log(q1)

// boolean as paramter and boolean as return type 
 function cardrive(age,vehicalAvailable){
    if (age >= 18 && vehicalAvailable){
        return true
    }
 }
 let r = cardrive(20,true)
 console.log(r)

 // function as a parameter to another function  
let add = function(x,y){
    return x + y
}

function add2(fn,x,y){
    let t = fn(x,y)
    return t
}

let q2 = add2(add,12,15)
console.log(q2)


// function as a return type to another function 

function substraction(){
    let s = 23
    let x = 56
    return function sub(){
        return s - x
    }
}

let q3 = substraction()
console.log(q3)
console.log(q3())

// function expression

let v = function add3(m,n){
    return m + n
}
let q4 = v(12,12)
console.log(q4)

// arrow function (1st way only when there is only one condition)
let u = (a,b) =>  a*b
console.log(12,9)

// 2nd way(always used)
let z = (k,l) =>{
    return k/l
}
let q5 = z(365,12)
console.log(q5)



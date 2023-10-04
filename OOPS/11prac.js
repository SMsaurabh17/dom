

// string as parameter and string as return type
function string(word){
    return `good ${word}`
}
let q = string('night')
console.log(q)

// array as parameter and array as returntype
let w = ['saurabh','ubaid','himanshu','nayan']
function names(arr){
    w.push('abhi')
    return arr
}
let q2 = names(w)
console.log(w)

// object as parameter and object as returntype
let e = {
    firstname : 'saurabh',
    lastname : 'mahajan'
}
function info(obj){
    e.city = 'nagpur'
    return obj
}
let q3 = info(e)
console.log(q3)


// boolean as paramter and boolean as return type 
function lic(age,gear){
    if( age >=18 && gear){
        return true
    }
}
let q4 = lic(18,true)
console.log(q4)


// function as a parameter to another function  (1 way using function declaration)
function substraction(g,h){
    return g - h
}
function cal(fn,g,h){
    let d = fn(g,h)
    return d
}
let q5 = cal(substraction,73,49)
console.log(q5)

//  2 way using function expression 
let sub = function(i,j){
    return i - j
}
function calculation(fn,i,j){
    let b = fn(i,j)
    return b
}
let q6 = calculation(sub,45,98)
console.log(q6)

// function as a return type to another function 

function multiply(){
    let l = 89
    let m = 76
    return function cal2(){
        // console.log(l * m)
        return l * m
    }
}
let q7 = multiply()
console.log(q7())


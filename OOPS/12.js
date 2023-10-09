

// let / const / var

// 
let q = 19
console.log(q)
q = 24
console.log(q)

// only updated value is printed
let w = 20
w  = 28
console.log(w)

// 
// const e = 55
// console.log(e)
// e = 66
// console.log(e)

// 
// const r = 77
// r = 33
// console.log(r)


// scope related differences
// let and var are block scopes

// program 1 
let  t = 90
{
  let t = 88
    console.log(t)
}
console.log(t)

// program 2
let y = 55
{
    console.log(y)
    y = 66
    console.log(y)
}
console.log(y)           //here it's returning the updated value


// program 3

const u = 1111
{
    const u = 2222
    console.log(u)
}
console.log(u)

// program 4 
const i = 3333
{
    const i = 4444
    console.log(i)
}
console.log(i)


// program 5
var o = 789
{
    console.log(o)
}
console.log(o)
 o = 786
 console.log(o)


//  program 6

var p = 7345
function show(){
    var p = 5678
    console.log(p)
    {
        console.log(p)
    }
}
show()
console.log(p)


// program 7

var a = 1000
function show2(){
    var a = 2000
    console.log(a)
    {
        console.log(a)
    }
}
console.log(a)
show2()
console.log(a)


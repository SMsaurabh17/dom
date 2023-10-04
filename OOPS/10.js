


// function declaration

function info(fn,ln){
    this.firstname = fn
    this.lastname = ln
}
let saurabh = new info('saurabh','mahajan')
console.log(saurabh)


// function expression

let saurav = function(x,y){
    return x + y
}
let q = saurav(10,29)
console.log(q)


// arrow function

let w = (x,y) =>{
    return x + y
}
let e = w(11,90)
console.log(e)

// function as a parametet to another function
function substraction(fn,a,b){
     a = 12
     b = 24
     fn = function(){
        return a + b
     }

}
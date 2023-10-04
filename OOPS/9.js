


// lexical scoping

// program 1
function calculation(){
    let a = 10
    let b = 20
    function add(){
       console.log(a + b) 
    }
    add()
    function add2(){
        let x = 19
        let y = 71
        console.log(a+b+x+y)
    }
    add2()
    
}
calculation()


// program 2
function calculation2() {
    let d = 20
    let e = 50
    function sub() {
        let r = 100
        console.log(d - e)
        function sub2() {
            console.log(r - d - e)
        }
        sub2()
    }
    sub()

}
calculation2()

// program 3

function calculation3(){
    let f = 23
    let g = 30
    function multiply(){
        let t = 1000
        console.log(f * g)
    }
    multiply()
    function multiply2(){
        console.log(f * g * t)
    }
    multiply2()
}
calculation3()

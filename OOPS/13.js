

// 1.

let q = {
    firstname : 'saurabh',
    lastname : 'mahajan',
    display:function(){
        console.log(this.firstname,"" + this.lastname)
    }
}

console.log(q.firstname)
console.log(q.lastname)
q.display()


// 2.
var firstname = 'saurav'                          // window
var lastname = 'mahajan'                          //window
let q1 = {
    firstname : 'himanshu',
    lastname : 'kumre',
    display1:function(){
         // this   =====> info2
        console.log(q1)
        console.log(this.firstname,"" + this.lastname)
        function display2(){
            // this ====> window
            console.log(this.firstname + this.lastname)                    //undefined + undefined = not a number(NaN)
        }
        display2()
    }
}

q1.display1()


// 3.
var firstname = 'himanshu'
var lastname = 'kumre'
let q2 = {
    firstname : 'nayan',
    lastname : 'kalmegh',
    display3:function(){
        console.log(q2)
        console.log(this.firstname,"" + this.lastname)
        let display4 = () =>{
            console.log(this.firstname + this.lastname)
        }
        display4()
    }
}

q2.display3()

// 4. creating both the functions using arrow func in an object

var firstname = 'obaid'
var lastname = 'sheikh'
let q3 = {
    firstname : 'aniket',
    lastname : 'gawali',
    display4:() =>{
        // this ====> window
        console.log(q3)
        console.log(this.firstname + this.lastname)
        let display5 = () =>{
            // this ====> window
            console.log(this.firstname + this.lastname)
        }
        display5()
    }
}

q3.display4()

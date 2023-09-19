
// 1.

// let q = {
//     firstname : 'saurabh',
//     lastname : 'mahajan',
//     age : 24,
//     add : 'sadar',
//     displayName:function(){
//         console.log(this.firstname + this.lastname)
//     }
// }

// console.log(q.add)
// q.displayName


// 2. using function constructor

function info(fn,ln,age,add){
    this.firstname = fn,
    this.lastname = ln,
    this.age = age,
    this.add = add
}


let gaurav = new info('gaurav','bhoyar',24,'pune')
console.log(gaurav)



// 3. es6 class

class info2{
    constructor(fn,ln,age,add){
        this.firstname = fn,
        this.lastname = ln ,
        this.age = age,
        this.add = add,
        this.display = function(){
            console.log(this.firstname, " "+ this.lastname )
        }
    }
}

let himanshu = new info2('himanshu','kumare',26,'gokulpeth')
himanshu.display()
console.log(himanshu)

// 4. object.create

let amol = Object.create({})
console.log(amol)
amol.firstname = 'anmol'
amol.lastname = 'kumar'
amol.age = 27
amol.skills = ['python','java']
console.log(amol)

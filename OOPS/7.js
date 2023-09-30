// 1. single inheritance

// class student{
//     constructor(fn,ln,AadNo){
//         this.firstname = fn
//         this.lastname = ln
//         this.AadharNo = AadNo
//     }
//     displayName(){
//         console.log(this.firstname,"" + this.lastname)
//     }
// }

// class teacher extends student{
//     constructor(fn,ln,AadNo,salary){
//         super(fn,ln,AadNo)
//         this.salary = salary
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// let rohan = new teacher('rohan','shahu',4560,'5 lakhs')
// console.log(rohan.firstname)
// console.log(rohan.lastname)
// console.log(rohan.AadharNo)
// console.log(rohan.salary)

// rohan.displayName()
// rohan.displaySalary()


// 2. Multi-level inheritance

class Grandfather{
    constructor(fn,ln,age){
        this.firstname = fn
        this.lastname = ln
        this.age = age
    }
    displayName(){
        console.log(this.firstname,"" + this.lastname)
    }
}

class Father extends Grandfather{
    constructor(fn,ln,age,Fname){
        super(fn,ln,age)
        this.Fname = Fname
    }
    displayFname(){
        console.log(this.Fname)
    }
}

class Son extends Father{
    constructor(fn,ln,age,Fname,Sname){
        super(fn,ln,age,Fname)
        this.Sname = Sname
    }
    displaySname(){
        console.log(this.Sname)
    }
}

let saurabh = new Son('hariappa','mahajan',68,'kailash','saurabh')

console.log(saurabh.firstname)
console.log(saurabh.lastname)
console.log(saurabh.age)
console.log(saurabh.Fname)
console.log(saurabh.Sname)

saurabh.displayName()
saurabh.displayFname()
saurabh.displaySname()


// 3.hierarchical inheritance



// console.log()
// console.log()
// console.log()

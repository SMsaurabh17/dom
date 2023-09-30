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

// class Grandfather{
//     constructor(fn,ln,age){
//         this.firstname = fn
//         this.lastname = ln
//         this.age = age
//     }
//     displayName(){
//         console.log(this.firstname,"" + this.lastname)
//     }
// }

// class Father extends Grandfather{
//     constructor(fn,ln,age,Fname){
//         super(fn,ln,age)
//         this.Fname = Fname
//     }
//     displayFname(){
//         console.log(this.Fname)
//     }
// }

// class Son extends Father{
//     constructor(fn,ln,age,Fname,Sname){
//         super(fn,ln,age,Fname)
//         this.Sname = Sname
//     }
//     displaySname(){
//         console.log(this.Sname)
//     }
// }

// let saurabh = new Son('hariappa','mahajan',68,'kailash','saurabh')

// console.log(saurabh.firstname)
// console.log(saurabh.lastname)
// console.log(saurabh.age)
// console.log(saurabh.Fname)
// console.log(saurabh.Sname)

// saurabh.displayName()
// saurabh.displayFname()
// saurabh.displaySname()


// 3.hierarchical inheritance

class mother{
    constructor(fn,ln,ag){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
    }
    displayM(){
        console.log(this.firstname , "" + this.lastname)
    }
}

class son extends mother {
    constructor(fn,ln,ag,addr,sn){
        super(fn,ln,ag)
        this.address = addr
        this.sonN = sn
    }
    displayS(){
        console.log(this.sonN , "" + this.lastname)
    }
}

class daughter extends mother {
    constructor(fn,ln,ag,addr,dn){
        super(fn,ln,ag)
        this.address = addr
        this.daughterN = dn
    }
    displayS(){
        console.log(this.daughterN , "" + this.lastname)
    }
}

let s = new son('neeta','mahajan',51,'sadar','saurabh')
console.log(s.firstname)
console.log(s.lastname)
console.log(s.age)
console.log(s.address)
console.log(s.sonN)

s.displayM()
s.displayS()

let d = new son('neeta','mahajan',51,'indore','pratiksha')
console.log(d.firstname)
console.log(d.lastname)
console.log(d.age)
console.log(d.address)
console.log(d.sonN)

d.displayM()
d.displayS()




// class student {
//     firstname = "saurabh"
//     lastname = 'mahajan'
//     aadharNo = 24

//     displayName(){
//         console.log(this.firstname,"" + this.lastname)
//     }
// }

// class teacher{
//     firstname = 'chinmay'
//     lastname = 'deshpande'
//     aadharNo1 = 28
//     salary = 2000

//     displayName(){
//         console.log(this.firstname,"" + this.lastname)
//     }
//     displayAadharNo(){
//         console.log(this.aadharNo1)
//     }
// }

// let chinmay = new teacher()
// console.log(chinmay.firstname)
// console.log(chinmay.lastname)
// console.log(chinmay.aadharNo1)
// console.log(chinmay.salary)

// chinmay.displayAadharNo()
// chinmay.displayName()



//  program 2

// class student1{
//     firstname = "saurabh"
//     lastname = 'mahajan'
//     aadharNo = 2900
//     displayName(){
//         console.log(this.firstname,"" + this.lastname)
//     }
// }


// class teacher1 extends student1{
//     salaryy = 6000
//     displaySalary(){
//         console.log(this.salaryy)
//     }
// }


// let w = new teacher1()
// console.log(w.firstname)
// console.log(w.lastname)
// console.log(w.aadharNo)
// console.log(w.salaryy)

// w.displayName()
// w.displaySalary()

// program 3

// class student2 {
//     constructor(fn,ln,AadNo){
//         this.firstname = fn
//         this.lastname = ln
//         this.AadharNo = AadNo
//     }
//     displayName(){
//         console.log(this.firstname,"" + this.lastname)
//     }
// }

// class teacher2 extends student2{
//     salary = 9000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let  e = new teacher2('mayuri','khade',3996)
// console.log(e.firstname)
// console.log(e.lastname)
// console.log(e.AadharNo)
// console.log(e.salary)

// e.displayName()
// e.displaySalary()


// program 4

class student3{
    constructor(fn,ln,AadNo){
        this.firstname = fn
        this.lastname = ln
        this.AadharNo = AadNo
    }
    displayName(){
        console.log(this.firstname,"" + this.lastname)
    }
}


class teacher3 extends student3{
    constructor(fn,ln,AadNo,salary){
        super(fn,ln,AadNo)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}

let rohan = new teacher3('rohan','kapse',7890,'2 lakhs')
console.log(rohan.firstname)
console.log(rohan.lastname)
console.log(rohan.AadharNo)
console.log(rohan.salary)
rohan.displaySalary()
rohan.displayName()

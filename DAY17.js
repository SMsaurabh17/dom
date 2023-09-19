
// program 1

let q = {
    firstname : 'saurabh',
    lastname : 'mahajan',
    age : 24,
    skills : ['js']
}

class info{
    constructor(fn,ln,age,skills){
        this.firstname = fn
        this.lastname = ln
        this.age = age
        this.skills = skills
    }
}

let w = new info('yash','kohale',22,['python'])
 console.log(w)

let e = new info('rushikesh','prasad',23,['java'])
console.log(e)

let r = new info('akshay','kamble',26,['c#'])
console.log(r)


// retieving data
// 1     .notation
// 2     []notation


console.log(w.firstname)
console.log(e['skills'])
console.log(r.age)

// updating value
r.lastname = 'kumar'
console.log(r)

// deleting value
delete r.skills
console.log(r)


// program 2

let student = [
    new info('akshay1','kumar',25,['c#']),
    new info('akshay2','kamble',26,['java']),
    new info('akshay3','rao',27,['python']),
    new info('akshay4','lunge',28,['c#'])
]

// student.forEach(function(el){
//     el.display()
// })


// creating a class using function

class info2{
    setFirstname(fn){
        this.firstname = fn
    }
    setLastname(ln){
        this.lastname = ln 
    }
    setAge(ag){
        this.age = ag
    }
}

let gaurav = new info2
console.log(gaurav)

gaurav.setFirstname('gaurav')
gaurav.setLastname('bhoyar')
gaurav.setAge(26)
console.log(gaurav)
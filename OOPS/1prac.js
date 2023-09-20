
// 1.function constructor

function inf(fn,ln,age){
    this.firstname = fn,
    this.lastname = ln,
    this.age = age,
    this.display = function(){
        console.log(this.firstname + this.lastname)
    }
}

let q = new inf('saurabh','mahajan',24)
console.log(q)

q.display()


// 2.es6 class

class inf2{
    constructor(fn,ln,skills){
        this.firstname = fn,
        this.lastname = ln,
        this.skills = skills
    }
}

let w = new inf2('saurabh','mahajan',['python','java'])
console.log(w)


// 3.object.create


let e = Object.create({})
e.firstname = 'sujal'
e.lastname = 'deshmukh'
e.skills = ['js','c#']
e.age = 23

console.log(e)


// 4.object literal


let r = {
    firstname : 'shravan',
    lastname : 'joshi',
    age : 27,
    displayName: function(){
        console.log(this.firstname,""+ this.age)
    }
}

console.log(r.age)
console.log(r['lastname'])
r.displayName()


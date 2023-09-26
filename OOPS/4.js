


// es6

// 1.
class info{
    constructor(fn,ln,age){
        this.firstname = fn
        this.lasttname = ln
        this.age = age 
    }
    display(){
        console.log(this.firstname + this.age)
    }
}

let anmol = new info('anmol','kumar',24)
console.log(anmol)

console.log(anmol.__proto__ === info.prototype)


// 2. 
class info2{
    setfirstname(fn){
        this.firstname = fn
    }
    setlastname(ln){
        this.lastname = ln
    }
    setage(ag){
        this.age = ag
    }
}

let dinesh = new info2()
console.log(dinesh)
dinesh.setFirstname('dinesh')
dinesh.lastname('lal')
dinesh.age(27)
console.log(dinesh)



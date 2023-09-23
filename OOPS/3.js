

//  es6 


class person{
    constructor(fn,ln,age){
        this.firstname = fn
        this.lastname = ln
        this.age = age
    }
    display(){
        console.log(this.firstname + this.lastname)
    }
}

let amol = new person('amol','kumar',24)
console.log(amol)

let divya = new person('divya','gajbiye',29)
console.log(divya)

divya.display()
amol.display()       


// instanseof (returns boolean value)

console.log(amol instanceof person)
console.log(divya instanceof person)


// hasOwnproperty (checks whether the property is present in that object)

console.log(amol.hasOwnProperty('country'))
console.log(amol.hasOwnProperty('firstname'))
console.log(amol.hasOwnProperty('lastname'))





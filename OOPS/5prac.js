

class info{
    constructor(fn,ln,ag){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
    }
    displayName(){
        console.log(this.firstname,"" + this.lastname)
    }
    displayAge(){
        return this.age
    }
}


let anmol = new info('anmol','kumar',23)
let divya = new info('divya','shahu',25)
let dinesh = new info('dinesh','mohadiker',28)

console.log(anmol)
console.log(divya)
console.log(dinesh)

anmol.displayName()
console.log(divya.displayAge())


// 
let q = [anmol,divya,dinesh]
q.forEach(function(el){
    console.log(el.displayAge())
})

// 
q.forEach(function(el){
    console.log(el.city = 'nagpur')
})

// 
let t = q.reduce(function(acc,el){
     return acc + el.displayAge()
},0)
console.log(t)


// 

let w = {
    person1:new info('anmol','kumar',23),
    person2:new info('divya','shahu',25),
    person3:new info('dinesh','mohadiker',28)
}


for (let i in w){
    w[i].displayName()
    console.log(w[i])
}
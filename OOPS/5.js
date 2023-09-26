


 class info3{
    constructor(fn,ln,age){
        this.firstname = fn
        this.lastname = ln
        this.age = age
    }
    displayName(){
        return this.firstname + this.lastname
    }
    displayAge(){
        return this.age
    }
 }


 let anmol = new info3('anmol','kumar',24)
 let anmol1 = new info3('anmol1','kumar1',25)
 let anmol2 = new info3('anmol2','kumar2',26)
 let anmol3 = new info3('anmol3','kumar3',27)
 console.log(anmol)
 console.log(anmol1)
 console.log(anmol2)
 console.log(anmol3)


 console.log(anmol.displayAge())
 console.log(anmol.displayName())




//  program 1

let q = [anmol,anmol1,anmol2,anmol3]
q.forEach(function(el){
    console.log(el.displayAge())
})


// program 2
q.forEach(function(el){
    el.city = 'pune'
})
console.log(q)


// program 3
let total = q.reduce(function(acc,el){
    return acc + el.displayAge()
},0)
console.log(total)


// program 4

let w = [
    new info3('anmol','kumar',24),
  new info3('anmol1','kumar1',25),
  new info3('anmol2','kumar2',26),
 new info3('anmol3','kumar3',27)
]

console.log(w[2].displayAge())

console.log("--------------------------------")

// program 5
let  r = {
    person1:new info3('anmol','kumar',24),
    person2:new info3('anmol1','kumar1',25),
    person3:new info3('anmol2','kumar2',26),
    person4:new info3('anmol3','kumar3',27)
}

for(let i in r){
    console.log(r[i].displayName())
    console.log(r[i])
}

    




// es6 class


class info{
    constructor(brand,model,type,color){
        this.brand = brand
        this.model = model
        this.type = type
        this.color = color
    }
    display(){
        console.log(this.model," " + this.type)
    }
}

let q = new info('AUDI','Q6','AUTOMATIC','RED')
console.log(q)

let w = new info('BMW','X7','MANUAL','NAVY')
console.log(w)

w.display()
q.display()

// 1.
console.log(q.__proto__ === info.prototype)
console.log(w.__proto__ === info.prototype)


// 2. instanceof
console.log(q instanceof info)
console.log(w instanceof info)

// 3. hasOwnProperty
console.log(q.hasOwnProperty('fuel type'))
console.log(q.hasOwnProperty('model'))

// 4. adding values
q.fuelType = "Diesel"
console.log(q)





let dinesh = Object.create({})

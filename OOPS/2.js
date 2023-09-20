


function person(fn,ln,age){
    this.firstname =  fn,
    this.lastname = ln,
    this.age = age 
//     this.display = function(){
//         console.log(this.firstname,"" + this.lastname)
//     }

}

let saurabh = new person('saurabh','mahajan',26,['python','java'])
console.log(saurabh)

let sujal = new person('sujal','deshmukh',28,['java'])
console.log(sujal)

// saurabh.display()


// 
console.log(saurabh.__proto__ === person.prototype) 
console.log(sujal.__proto__ === person.prototype)


// 
person.prototype.display = function(){
    console.log(this.firstname,"" + this.lastname)
}

saurabh.display()


// 
person.prototype.address = 'sadar'







function person(fn,ln,age){
    this.firstname = fn,
    this.lastname = ln ,
    this.age = age
    // this.display = function(){
    //     console.log(this.firstname + this.age)
    // }
}

let dinesh = new person('dinesh','shahu',24)
console.log(dinesh)


console.log(dinesh.__proto__ === person.prototype)


person.prototype.display = function(){
    console.log(this.firstname + this.age)
}
dinesh.display()


person.prototype.skills = 'python'
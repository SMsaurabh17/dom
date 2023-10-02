


// polymorphism

class addition{
    addition(a,b,c,d){
        if(a != undefined && b != undefined){
            console.log(a+b)
        }
        else if(a != undefined && b != undefined && c != undefined){
            console.log(a+b+c)
        }
        else if(a != undefined && b != undefined && c != undefined && d != undefined){
            console.log(a+b+c+d)
        }
    }
}

let total = new addition()
total.addition(20,20,20,20)
// total.addition(20,20,20)
// total.addition(20,20)



// overloading ( same class, same method name but different signatory)

class worldBank{
    loan(){
        console.log('loan from worldbank')
    }
    save(){
        console.log('save from worldbank')
    }
}


class SBI extends worldBank{
    loan(){
        console.log('loan from Sbi')
    }
    save(){
        console.log('save from Sbi')
    }
    displayBranch(){
        console.log('sbi sadar branch')
    }
}


class BOB extends worldBank{
    loan(){
        console.log('loan from Bob')
        super.loan()
    }
    save(){
        console.log('save from Bob')
        super.save()
    }
    displayBranch(){
        console.log('Bob manish nagar branch')
    }
}

let q = new SBI()
q.displayBranch()
q.save()
q.loan()

console.log("--------------------------")

let w = new BOB()
w.displayBranch()
w.loan()
w.save()

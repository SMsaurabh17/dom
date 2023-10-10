

// sync

function add(){
    console.log('ADDD')
}

function sub(){
    console.log('SUBB')
}
add()
sub()


// async
// function add2(){
//     setTimeout(function(){
//         console.log('c is printed')
//     },3000)
// }
// function sub2(){
//     console.log('d is printed')
// }

// add2()
// sub2()

// 
function getinfo(){
    setTimeout(function(){
        console.log('user created')
    },3000)
    
    setTimeout(function(){
        console.log('get user id')
    },2000)

    setTimeout(function(){
        console.log('get info by id')
    },1000)
}

getinfo()


// call back hell

function getinfo2(){
    setTimeout(function(){
        console.log('user created')
        setTimeout(function(){
            console.log('get user id')
            setTimeout(function(){
                console.log('get info by id')
            },1000)
        },2000)
    },3000)
}

getinfo2()


// promises

let promise = new Promise(function(resolve,reject){
    let a = 100
    let b = 450
    if(a == b){
        console.log(resolve)
    }
    else {
        console.log(reject)
    }
})

promise.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})
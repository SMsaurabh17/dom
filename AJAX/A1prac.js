


// async

// function add(){
//     setTimeout(function(){
//         console.log('a is printed')
//     },3000)
// }
// function add2(){
//     console.log('b is printed')
// }

// add()
// add2()
console.log('---------------------')

// 

// function add3(){
//     setTimeout(function(){
//         console.log('user created')
//     },3000)

//     setTimeout(function(){
//         console.log('get id')
//     },2000)

//     setTimeout(function(){
//         console.log('get info by id')
//     },1000)
// }

// add3()

// console.log('----------------')



// call back hell

function add4(){
    setTimeout(function(){
        console.log('user created')
        setTimeout(function(){
            console.log('get id')
            setTimeout(function(){
                console.log('get info by id')
            },1000)
        },2000)
    },3000)
}

// add4()

// promises

// let sub = new Promise(function(resolve,reject){
//     let u = 100
//     let v = 456
//     if(u == v){
//         resolve('both are equal')
//     }
//     else{
//         reject('both are not equal')
//     }
// })

// sub.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })





// let pro = new Promise(function(resolve,reject){
//     let e = 20
//     let f = 20
//     if(e == f){
//         resolve('both are equal')
//     }
//     else{
//         reject('both are not equal')
//     }
// })

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })



// 

let p = new Promise(function(resolve,reject){
    let s = 55
    let t = 66
    if(s == t){
        resolve('both are equal')
    }
    else{
        reject('both are not equal')
    }
})

p.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})






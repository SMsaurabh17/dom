// 

// sync
// function add(){
//     console.log('a')
// }
// function add2(){
//     console.log('b')
// }
// add()
// add2()


// async

// function add3(){
//     setTimeout(function(){
//         console.log('a')
//     },3000)
    
// }
// function add4(){
//     console.log('b')
// }
// add3()
// add4()

// 
// function add5(){
//     setTimeout(function(){
//         console.log('a')
//     },3000)
    
//     setTimeout(function(){
//         console.log('b')
//     },2000)

//     setTimeout(function(){
//         console.log('c')
//     },1000)
// }

// add5()


// call back hell

// function add6() {
//     setTimeout(function () {
//         console.log('a')
//         setTimeout(function () {
//             console.log('b')
//             setTimeout(function () {
//                 console.log('c')
//             }, 1000)
//         }, 2000)
//     }, 3000)

// }

// add6()


// promise

// let q = new Promise(function(resolve,reject){
//     let name = 'saurabh'
//     if (name.endsWith('h')){
//         resolve('correct name')
//     }
//     else{
//         reject('incorrect name')
//     }
// })

// q.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// 
// let q1 = new Promise(function(resolve,reject){
//     let cities = ['pune','mumbai','banglore','nagpur']
//     if (cities.includes('nagpu')){
//         resolve({firstname : 'saurabh' , lastname : 'mahajan'})
//     }
//     else{
//         reject('incorrect name')
//         console.log({firstname : 'himanshu' , lastname : 'kumar'})

//     }
// })
// q1
// .then(function(obj){
//     let {firstname,lastname} = obj
//     console.log(firstname)
//     console.log(lastname)   
// })

// .catch(function(obj){
//     console.log(obj)
// })


// 

let q2 = new Promise(function(resolve,reject){
    let s = 100
    let b = 100
    if( s == b){
        resolve('equal')
    }
    else{
        reject('not equal')
    }
})
q2
.then(function(str){
    console.log(str)
    return('hello')
})
.then(function(str){
    console.log(str)
    return('hii')
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
    
})
.finally(function(){
    console.log('i will always run no matter what')
    
})



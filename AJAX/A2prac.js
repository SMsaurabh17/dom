


// program 1

// let q1 = new Promise(function(resolve,reject){
//     let a = 100
//     let b = 100
//     if(a == b){
//         resolve('equal')
//     }
//     else{
//         reject('not equal')
//     }
// })

// q1
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 2

// let q2 = new Promise(function(resolve,reject){
//     let name = 'saurabh'
//     if(name.includes('bh')){
//         resolve([11,22,33])
//         console.log('pass')
//     }
//     else{
//         reject([-11,-12,13])
//         console.log('fail')
//     }
// })

// q2
// .then(function(a){
//     console.log(a)
// })

// .catch(function(b){
//     console.log(b)
// })


// program 3 (using finally func)

// let q3 = new Promise(function(resolve,reject){
//     let city = ['pune','mumbai','nagpur']
//     if (city.includes('banglore')){
//         resolve({firstname : 'saurabh', lastname : 'mahajan'})
//     }
//     else{
//         reject({firstname : 'nayan', lastname : 'kale'})
//     }
// })

// q3.then(function(obj){
//     let {firstname,lastname} = obj
//     console.log(firstname)
//     console.log(lastname)
// })

// .catch(function(obj){
//     let {firstname,lastname} = obj
//     console.log(firstname)
//     console.log(lastname)
// })

// .finally(function(){
//     console.log('finally block runs always no matter what')
// })


// program 4


let q4 = new Promise(function(resolve,reject){
    let a = 100
    let b = 100
    if(a == b){
        resolve('equal')
    }
    else{
        reject('not equal')
    }
})

q4.then(function(str){
    console.log(str)
    return ('hello')
})

.then(function(str){
    console.log(str)
})

.catch(function(str){
    console.log(str)
    return ('bye')
})

.finally(function(){
    console.log('finally block runs always no matter what')

})
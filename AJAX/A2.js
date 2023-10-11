

// program 1

// let q = new Promise(function(resolve,reject){
//     let a = 100
//     let b = 200
//     if (a == b){
//         resolve('equal')
//     }
//     else{
//         reject('not equal')
//     }
// })

// q.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// using catch func

// let q1 = new Promise(function(resolve,reject){
//     let a = 100
//     let b = 200
//     if (a == b){
//         resolve([11,22,33])
//         console.log('equal')
//     }
//     else{
//         reject([-11,-22,-33])
//         console.log('not equal')

//     }
// })

// q1
// .then(function(arr){
//     console.log(arr)
// })

// .catch(function(arr){
//     console.log(arr)
// })

// .finally(function(){
//     console.log('it always runs not matter what')                       //it always runs not matter what
// })


// program 3


// let q2 = new Promise(function(resolve,reject){
//     let s = ['pune','mumbai','delhi','nagpur']
//     if (s.includes('pun')){
//         resolve({firsstname : 'saurabh', lastname : 'mahajan'})
//     }
//     else{
//         reject({firsstname : 'himanshu', lastname : 'kumre'})
//     }
// })

// q2
// .then(function(obj){
//     console.log(obj)
//     // console.log(obj.firsstname)
//     // console.log(obj.lastname)
//     let {firsstname,lastname} = obj
//     console.log(firsstname)
//     console.log(lastname)
// })

// .catch(function(obj){
//     let {firsstname,lastname} = obj
//     console.log(firsstname)
//     console.log(lastname)
// })
// .finally(function(){
//     console.log('just')
// })


// program 4

let q6 = new Promise(function(resolve,reject){
    let a = 100
    let b = 100
    if (a == b){
        resolve('equal')
    }
    else{
        reject('not equal')
    }
})


q6
.then(function(str){
    console.log(str)
    return('nun')
})

.then(function(str){
    console.log(str)
})

.catch(function(str){
    console.log(str)
})

.finally(function(){
    console.log('llllll')
})
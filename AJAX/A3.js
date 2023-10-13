


// 
function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get id')
        },2000)
    })
}

function getinfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get info')
        },1000)
    })
}

// 1st way using then and catch function


// userCreated()
// .then(function(str){
//     console.log(str)
//     return getId()
// })

// .then(function(str){
//     console.log(str)
//     return getinfo()
// })

// .then(function(str){
//     console.log(str)
// })

// .catch(function(){
//     console.log("error")
// })

// .finally(function(){
//     console.log('i will always run no matter what')
// })



//2nd way using async function and await user

async function user(){
    let a = await userCreated()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c = await getinfo()
    console.log(c)
}

user()
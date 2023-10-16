



// 
function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)
        
    })
}

function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('get Id')
        },2000)

    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            resolve('user info')
        },1000)
    })
}


// userCreated()
// .then(function(str){
//     console.log(str)
//     return getId()
// })

// .then(function(str){
//     console.log(str)
//     return getInfo()
// })

// .then(function(str){
//     console.log(str)
// })

// .catch(function(){
//     console.log('reject function not available')
// })

// .finally(function(){
//     console.log('it always execute no matter what')
// })



// async way

async function user(){
    let a = await userCreated()
    console.log(a)

    let b = await getId()
    console.log(b)

    let c = await getInfo()
    console.log(c)

}

user()
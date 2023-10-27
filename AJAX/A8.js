


function getUserId(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

function error(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject('error')
        },3000)
    })
}


// Promise.all([getUserId(2),getUserId(3),getUserId(4),getUserId(5),getUserId(6)])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(error){
//     console.log(error)
// })




// Promise.race([getUserId(2),getUserId(6)])
// .then(function(r){
//     console.log(r)
// })


// allSettled
// Promise.allSettled([getUserId(2),getUserId(3),getUserId(4),getUserId(5)])
// .then(function(qq){
//     console.log(qq)
// })


// any

Promise.any([getUserId(12),getUserId(3),getUserId(14),getUserId(15)])
.then(function(str){
    console.log(str)
})

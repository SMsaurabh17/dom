



function getInfo(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(id % 2 == 0){
                resolve('pass')
            }
            else{
                reject('fail')
            }
        },1000)
    })
}

// Promise.all([getInfo(2),getInfo(6),getInfo(4)])
// .then(function(pass){
//     console.log(pass)
// })
// .catch(function(fail){
//     console.log(fail)
// })



// race


function getInfo1(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(id % 2 == 0){
                resolve('pass 1')
            }
            else{
                reject('fail 1')
            }
        },1000)
    })
}

function getInfo2(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(id % 2 == 0){
                resolve('pass 2')
            }
            else{
                reject('fail 2')
            }
        },2000)
    })
}


function getInfo3(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(id % 2 == 0){
                resolve('pass 3')
            }
            else{
                reject('fail 3')
            }
        },3000)
    })
}


// Promise.race([getInfo1(2),getInfo2(4)])
// .then(function(pass){
//     console.log(pass)
// })
// .catch(function(fail){
//     console.log(fail)
// })

// allsetteled

Promise.allSettled([getInfo1(2),getInfo2(3),getInfo3(8)])
.then(function(result){
    console.log(result)
})


// any

Promise.any([getInfo1(3),getInfo1(5),getInfo3(7),getInfo2(5),getInfo2(4)])
.then(function(resul){
    console.log(resul)
})
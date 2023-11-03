

function getinfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

function getErrorState(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject ('error occured')
        },3000)
    })
}

// Promise.all
// async function PromiseAll(){
//     let a = await Promise.all([
//         getinfo(1),
//         getinfo(2),
//         getinfo(3)
//     ])
//     console.log(a)
// }
// PromiseAll()


// Promise.allsetteled
async function Allsetteled(){
    let b = await Promise.allSettled([
        getinfo(2),
        getinfo(3),
        getinfo(4)
    ])
    console.log(b)
}
Allsetteled()


// Promise.any
async function Any(){
    let c = await Promise.any([
        getinfo(6),
        getinfo(7),
        getinfo(8),
        getinfo(9)

    ])
    console.log(c)
}
// Any()

// Promise.race

async function PromiseRace(){
    try{
        let d = await Promise.race([
            getinfo(7),
            getinfo(1)
            // getinfo()
        ])
        console.log(d)
    }
    catch{
        console.log('error happen')
    }
}
// PromiseRace()
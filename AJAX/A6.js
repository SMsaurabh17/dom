

function getListofUser(pagenumber){
    return fetch(`https://reqres.in/api/users?page=${pagenumber}`)
    .then(function(response){
        // console.log(response)
        return response.json()
    })
    .then(function(response){
        // console.log(response)
        return response.data
    })
}


function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        // console.log(response)
        return response.json()
    })
    .then(function(response){
        // console.log(response)
        return response.data
    })
}


function renderHtml(el){
    document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
    document.write(`<p>${el.email}</p>`)
     document.write(`<p>${el.id}</p>`)
    document.write(`<img src = "${el.avatar}">`)

}

// getListofUser()
// .then(function(data){
//     let id = data[1].id
//     return getSingleUser(id)  
// })
// .then(function(el){
//      renderHtml(el)
// })
// getListofUser(2)


async function getUserInfo(){
    let a = await getListofUser(2)
    let b = a[2].id
    let c = await getSingleUser(b)
    renderHtml(c)
}

getUserInfo()
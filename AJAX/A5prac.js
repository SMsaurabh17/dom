

let click = document.querySelector('button')


function getUsers(pagenumber){
    fetch(`https://reqres.in/api/users?page=${pagenumber}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        console.log(response.data)
        response.data.forEach(el => {
            document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
            document.write(`<p>${el.email}</p>`)
            document.write(`<p>${el.id}</p>`)
            document.write(`<img src = "${el.avatar}">`)
        });
    })
}

click.addEventListener('click',function(){
    getUsers(1)
})
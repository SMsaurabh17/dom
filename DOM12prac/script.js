


let o = document.querySelector('ol')
let i = document.querySelector('input')
let  button = document.querySelector('#one')

console.log(o)
console.log(i)
console.log(button)


button.addEventListener('click',function(){
    let txt = i.value
    let Nl = document.createElement('li')
    Nl.textContent = txt
    addButtons(Nl)
    o.appendChild(Nl)
    i.value = " "
})

function addButtons(li){
    let r =  document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u =  document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    let d =  document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)
}


o.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
        if(e.target.className === 'Remove'){
            let LE = e.target.parentElement
            let PE = LE.parentElement
            o.removeChild(LE)
            
        }
        else if(e.target.className === 'Up'){
            let LE = e.target.parentElement
            let PE = LE.parentElement
            let prevE = LE.previousElementSibling
            if(prevE){
                o.insertBefore(LE,prevE)
            }
        }
        else if(e.target.className === 'Down'){
            let LE = e.target.parentElement
            let PE = LE.parentElement
            let nexE = LE.nextElementSibling
            if(nexE){
                o.insertBefore(nexE,LE)
            }
        }
    }
})




















// o.addEventListener('click', function (e) {
//     if (e.target.tagName === 'BUTTON') {
//         if (e.target.className === 'Remove') {
//             let p = e.target.parentElement
//             let l = p.parentElement
//             l.removeChild(p)
//         }
//         else if (e.target.className === 'Up') {
//             let p = e.target.parentElement
//             let l = p.parentElement
//             let prev = p.previousElementSibling

//             if (prev) {
//                 o.insertBefore(p, prev)
//             }

//         }
//         else if(e.target.className === 'Down'){
//             let p = e.target.parentElement
//             let l = p.parentElement
//             let next = p.nextElementSibling
//             if(next){
//                 o.insertBefore(next,p)
//             }
//         }
//     }
// })


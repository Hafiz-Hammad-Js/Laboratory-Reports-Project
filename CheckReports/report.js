let reports =document.querySelector(".reports")
let patientNAAM =document.querySelector("#patient")


let params =new URLSearchParams(location.search)
let id = params.get("id")

console.log(id)

reports.innerHTML +=`
    
<img src="${id}" alt="">

`


// Render Data For OutPut ...//

let registerDOM = document.querySelector(".renderDATA")

let getLocalRegisterData = localStorage.getItem("patientRegisterDataBase")
let registerData = JSON.parse(getLocalRegisterData)



registerData.map((patientData) =>{

    let {patientName , patientPhoneNum, patientID} = patientData

    registerDOM.innerHTML +=`

    <div class="lpARAParentRegBox">

     <div>
        <h1 class="BoxRegChild01">${patientName}</h1>
        <h1 class="BoxRegChild01">${patientPhoneNum}</h1>
    </div>

    <button class="BoxRegBtn" onclick="gotoDetail(${patientID})">Patient Detail</button>
            
    </div>

`
})


let gotoDetail = (id) =>{
    location.href = `./UserRegisterDETAIL/detailPage.html?id=${id}`
}
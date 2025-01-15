let renderData = document.querySelector(".lpRD01")

let params =new URLSearchParams(location.search)
let id = params.get("id")

let getLocalRegisterData = localStorage.getItem("patientRegisterDataBase")
let registerData = JSON.parse(getLocalRegisterData)

registerData.filter((data) =>{
   return String(data.patientID) === String(id)
}).map((data)=>{
    
    let {patientName,patientPhoneNum,patientAge,patientMrNum,patientPassword} =data
    
    renderData.innerHTML =`
    
    <table>
                <tr>
                    <th class="lpth">Patient Name</th>
                    <th class="lpth02">${patientName}</th>
                </tr>
                <tr>
                    <th class="lpth">Phone Number</th>
                    <th class="lpth02">${patientPhoneNum}</th>
                </tr>
                <tr>
                <tr>
                    <th class="lpth">Patient Age</th>
                    <th class="lpth02">${patientAge}</th>
                </tr>
                <tr>
                <tr>
                <tr>
                    <th class="lpth">Patient MR Number</th>
                    <th class="lpth02">${patientMrNum}</th>
                </tr>
                <tr>
                <tr>
                <tr>
                    <th class="lpth">Patient Password</th>
                    <th class="lpth02">${patientPassword}</th>
                </tr>
                <tr>
            </table>
    `
})
   

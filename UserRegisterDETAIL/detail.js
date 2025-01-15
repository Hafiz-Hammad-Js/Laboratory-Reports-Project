let renderData = document.querySelector(".lpRD01")

let params = new URLSearchParams(location.search)
let id = params.get("id")

let getLocalRegisterData = localStorage.getItem("patientRegisterDataBase")
let registerData = JSON.parse(getLocalRegisterData)

let dataValue = [];

registerData.filter((data) => {
    return String(data.patientID) === String(id)
}).map((data) => {

    dataValue.push(data)
    let { patientName, patientPhoneNum, patientAge, patientMrNum, patientPassword } = data

    renderData.innerHTML = `
    
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


// post Report Work ... //

let PName = document.getElementById("PName")
let PhoneNum = document.getElementById("PhoneNum")
let PId = document.getElementById("PatientId")
let Age = document.getElementById("Age")
let TestName = document.getElementById("TestName")
let reportURL = document.getElementById("reportURL")

PName.value = dataValue[0].patientName;
PhoneNum.value = dataValue[0].patientPhoneNum;
PId.value = dataValue[0].patientID
Age.value = dataValue[0].patientAge

let submitData = () => {
    if (!PName.value || !PhoneNum.value || !PId.value || !Age.value || !TestName.value || !reportURL.value) {
        alert("Enter All feilds")
    } else {
        let reportObject = {
            patientName: PName.value,
            patientPhoneNum: PhoneNum.value,
            patientID: PId.value,
            patientAge: Age.value,
            patientTest: TestName.value,
            patientReport: reportURL.value
        }


        let reports = localStorage.getItem("PatientReports")

        if (reports == null) {
            reports = [reportObject]
        } else {
            reports = JSON.parse(reports)
            reports.push(reportObject)
        }

        localStorage.setItem("PatientReports", JSON.stringify(reports))
        alert("Patient Report has submited.")

        location.reload()
    }
}


// Render Patient Reports //
let reportsCheck = document.querySelector(".render")

let getlocalReportsData = localStorage.getItem("PatientReports")
let reportsData = JSON.parse(getlocalReportsData)

reportsData.filter((data) => data.patientID == id).map((data) => {

    let { patientTest,patientReport } = data
    reportsCheck.innerHTML += `

    <div class="reportsCheck">
      <h1>${patientTest}</h1>
    <button onclick="checkReport('${patientReport}')">Check Reports</button>
    </div>
    
    `
})


let checkReport = (id) => {
    location.href = `../CheckReports/index.html?id=${id}`
}
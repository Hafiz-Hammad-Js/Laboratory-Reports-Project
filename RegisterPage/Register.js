let PName = document.getElementById("PName")
let phoneNum = document.getElementById("phoneNum")
let Age = document.getElementById("Age")
let MRnum = document.getElementById("MRnum")
let password = document.getElementById("password")


let registerData = () => {
    if (!PName.value || !phoneNum.value || !Age.value || !MRnum.value || !password.value) {
        alert("Enter All fields")
    } else {
        let patientInfo = {
            patientName: PName.value,
            patientPhoneNum: phoneNum.value,
            patientAge: Age.value,
            patientMrNum: MRnum.value,
            patientPassword: password.value,
            patientID :Date.now()
        }

        let patientData = localStorage.getItem("patientRegisterDataBase")

        if (patientData == null) {

            patientData = [patientInfo]
        } else {
            patientData = JSON.parse(patientData)
            patientData.push(patientInfo)
        }

        localStorage.setItem("patientRegisterDataBase", JSON.stringify(patientData))
        alert("Patient Detail Register..")

        location.href ="../index.html"
    }
}
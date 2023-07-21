/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Calling ElementsbyID
const convBtn = document.getElementById("header-button")
const convInput = document.getElementById("header-input")
const lengthDisplay = document.getElementById("length-conv")
const volDisplay = document.getElementById("vol-conv")
const massDisplay = document.getElementById("mass-conv")

// Converting Value by Clicking Convert
convBtn.addEventListener("click",function(){
    // Converting Length
    let feetToMeters = convInput.value * 0.3048
    let metersToFeet = convInput.value * 3.2808

    // Converting Volume
    let literToGallon = convInput.value * 0.264
    let gallonToLiter = convInput.value * 3.7854

    // Converting Mass
    let kgToLbs = convInput.value * 2.2046
    let lbsToKg = convInput.value * 0.4536

    // Display Values
    lengthDisplay.textContent = `${convInput.value} meters = ${metersToFeet.toFixed(3)} feet | ${convInput.value} feet = ${feetToMeters.toFixed(3)} meters`
    volDisplay.textContent = `${convInput.value} liters = ${literToGallon.toFixed(3)} gallons | ${convInput.value} gallons = ${gallonToLiter.toFixed(3)} liters`
    massDisplay.textContent = `${convInput.value} kilos = ${kgToLbs.toFixed(3)} pounds | ${convInput.value} pounds = ${lbsToKg.toFixed(3)} kilos`
})
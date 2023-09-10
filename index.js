/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281
const literTogallon = 0.264
const kilogramTopound = 2.204

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

inputBtn.addEventListener("click", function() {
    let baseNumber = inputEl.value
    lengthEl.textContent = `${baseNumber} meters = ${(baseNumber * meterToFeet).toFixed(3)} feet | 
                            ${baseNumber} feet = ${ (baseNumber / meterToFeet).toFixed(3)} meters`
    
    volumeEl.textContent = `${baseNumber} liters = ${(baseNumber * literTogallon).toFixed(3)} gallons | ${baseNumber} gallons = ${(baseNumber / literTogallon).toFixed(3)} litters`

    massEl.textContent = `${baseNumber} kilos = ${(baseNumber * kilogramTopound).toFixed(3)} pounds | ${baseNumber} pounds = ${(baseNumber / kilogramTopound).toFixed(3)} kilos`
})




import "./style.css"

const binary = document.getElementById("binary")
const decimal = document.getElementById("decimal")
const convertBtn = document.querySelector(".convert-btn")
const warning = document.querySelector(".warning")

function binaryToDecimal(e) {
  e.preventDefault()

  const binRegex = /^[01]+$/g
  let bin = binary.value

  if (!bin.match(binRegex)) {
    binary.style.border = "1px solid red"
    warning.classList.add("visible")
    decimal.value = ""
    return
  } else {
    binary.style.border = "1px solid rgba(116, 116, 116, 0.25)"
    warning.classList.remove("visible")
  }

  bin = bin.split("").slice().reverse()
  let result = 0
  bin.forEach((num, index) => {
    result += num * Math.pow(2, index)
  })

  decimal.value = result
}

window.addEventListener("DOMContentLoaded", () => {
  binary.value = ""
  decimal.value = ""
})

convertBtn.addEventListener("click", binaryToDecimal)

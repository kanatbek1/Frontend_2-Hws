const reverseString = () => {

    let input = document.querySelector(".inputString").value 
    let reversed = input.split("").reverse().join("")
    let output = document.querySelector(".output")
    
    let p = document.createElement("p")
    p.textContent = reversed
    output.appendChild(p)

    document.querySelector(".inputString").value = ""
}

let button = document.querySelector(".btn")
button.addEventListener("click", reverseString)

///////////////


const reverseString = () => {

    let inputArr = []
    let inputText = document.querySelector(".inputString").value
    inputArr.push(inputText)

    let output = document.querySelector(".output")

    inputArr.forEach((item) => {
        let reversed = item.split("").reverse().join("")

        let p = document.createElement("p")
        p.textContent = reversed
        output.appendChild(p)
    })
    document.querySelector(".inputString").value = ""
}

let button = document.querySelector(".btn")
button.addEventListener("click", reverseString)
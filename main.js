const x = "John"
const y = "Doe"
const testObject = {name: "Mary", surname: "Lamb", email: "maryhad@little.lamb"}
const stringArr = ["str1", "str2", "str3", "str4", "str5", "str6", "str7", "str8", "str9", "str10"]
let randomArr = []
let arrEx28 = []
const container = document.getElementById("container")
const allTDs = document.getElementsByTagName("td")

console.log("Page loaded")

console.log(x + " <> " + y)

console.log(testObject)

delete testObject.email

console.log(testObject)

console.log(stringArr)

for (let i = 0; i < stringArr.length; i++) console.log(stringArr[i])

const fillArr = (range) =>{
    randomArr = []
    for (let i = 0; i < range; i++){
    const random = Math.ceil(20*Math.random())
    randomArr.push(random)}
    return randomArr
}

const arrEx26 = fillArr(100)
console.log(arrEx26)

const findMax = (arr) => {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    console.log("Min is: " + min)
    console.log("Max is: " + max)
}

findMax(randomArr)

const arrayOfArr = (range) =>{
    for (let i = 0; i < range; i++){
        arrEx28.push(fillArr(10))}
    console.log(arrEx28)
    return arrEx28
}

arrayOfArr(3)

const longestArr = (arr1, arr2) => arr1.length > arr2.length ? arr1 : arr2

console.log(longestArr(arrEx26, arrEx28))

const sumArr = (arr) =>{
    console.log(arr)
    let length = arr.length
    let result = 0
    for (let i = 0; i < length; i++){
        const lastElement = arr.pop()
        result += lastElement}
    console.log(result)
    return result}

const biggerSum = (arr1, arr2) => arr1 > arr2 ? "arrayOne" : "arrayTwo" // how to do this since the original array has been mutated... grrr

console.log("EX30")
const arrayOne = fillArr(2)
const arrayTwo = fillArr(2)

console.log(biggerSum(sumArr(arrayOne), sumArr(arrayTwo)))

console.log(container)

console.log(allTDs)
console.log(allTDs.length)

for (let i = 0; i < allTDs.length; i++){
    allTDs[i].innerHTML = "text"
}

const changeHeading = (newHeading) => {
    let heading = document.querySelector(".heading")
    heading.innerText = newHeading}

changeHeading("JS Inserted Heading")

const insertRow = () => {
    const newRow = document.createElement("tr")
    console.log(newRow)
    newRow.innerText = "JS"
    console.log(newRow)
    document.getElementById("main-table").appendChild(newRow)}

insertRow()

const addClassToRow = (className) =>{
    const rowArray = document.getElementsByTagName("tr")
    console.log(rowArray)
    for (let i = 0; i < rowArray.length; i++){
        rowArray[i].classList.add(className)}
}

addClassToRow("red")

const addRedBackground = () => {
    const allLinks = document.getElementsByTagName("a")
    for (let i = 0; i < allLinks.length; i++){
        allLinks[i].style.background = "red"
}}

addRedBackground()

const addItemsToUl = (itemText) => {
    const newItem = document.createElement("li")
    newItem.innerText = itemText
    document.getElementById("ulist").appendChild(newItem)
} 

const emptyList = () => {
    document.getElementById("ulist").innerHTML = ""
}
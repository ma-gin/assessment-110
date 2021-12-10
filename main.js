// *********** DECLARATION OF VARIABLES ***********

const x = "John"
const y = "Doe"
const testObject = {name: "Mary", surname: "Lamb", email: "maryhad@little.lamb"}
const stringArr = ["str1", "str2", "str3", "str4", "str5", "str6", "str7", "str8", "str9", "str10"]
let randomArr = []
let arrEx28 = []
const container = document.getElementById("container")
const allTDs = document.getElementsByTagName("td")
const everyLink = document.getElementsByClassName("all-links")

// *********** EVENT LISTENERS ***********



// *********** DECLARATION OF FUNCTIONS ***********

for (let i = 0; i < stringArr.length; i++) console.log(stringArr[i])

const fillArr = (range) =>{
    randomArr = []
    for (let i = 0; i < range; i++){
    const random = Math.ceil(20*Math.random())
    randomArr.push(random)}
    return randomArr
}

const arrEx26 = fillArr(100)

const findMinMax = (arr) => {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    console.log("Min is: " + min)
    console.log("Max is: " + max)
}

const arrayOfArr = (range) =>{
    for (let i = 0; i < range; i++){
        arrEx28.push(fillArr(10))}
    console.log(arrEx28)
    return arrEx28
}

const longestArr = (arr1, arr2) => arr1.length > arr2.length ? arr1 : arr2

const sumArr = (arr) =>{
    let length = arr.length
    let result = 0
    for (let i = 0; i < length; i++){
        const lastElement = arr.pop()
        result += lastElement}
    console.log(result)
    return result
}

const biggerSum = (arr1, arr2) => arr1 > arr2 ? "arrayOne" : "arrayTwo" // how to do this since the original array has been mutated... grrr

// for (let i = 0; i < allTDs.length; i++){
//     allTDs[i].innerHTML = "text"
// }

const changeHeading = (newHeading) => {
    let heading = document.querySelector(".heading")
    heading.innerText = newHeading
}

const insertRow = () => {
    const newRow = document.createElement("tr")
    console.log(newRow)
    newRow.innerText = "JS"
    console.log(newRow)
    document.getElementById("main-table").appendChild(newRow)
}

const addClassToRow = (className) =>{
    const rowArray = document.getElementsByTagName("tr")
    console.log(rowArray)
    for (let i = 0; i < rowArray.length; i++){
        rowArray[i].classList.add(className)
}}

const addRedBackground = () => {
    const allLinks = document.getElementsByTagName("a")
    for (let i = 0; i < allLinks.length; i++){
        allLinks[i].style.background = "red"
}}

const addItemsToUl = (itemText) => {
    const newItem = document.createElement("li")
    newItem.innerText = itemText
    document.getElementById("ulist").appendChild(newItem)
} 

const emptyList = () => {
    document.getElementById("ulist").innerHTML = ""
}

// Extra 1
const selectLinks = () =>{
    for (let i = 0; i < everyLink.length; i++){
    const element = everyLink[i]
    element.addEventListener("mouseover", () => {alert(element)} )
}}

// Extra 2
const hideImages = () =>{
    const images = document.getElementsByTagName("img")
    for (let i = 0; i < images.length; i++){
        images[i].classList.add("hide")
}}

// Extra 3 //easy because there is only one element
const toggleTable = () => {
    const tableElement = document.getElementById("main-table")
    tableElement.classList.toggle("hide")
}

const getArrayOfTableNumbers = () => {
    let sum = 0
    let result = []
    for (let i = 0; i < allTDs.length; i++){
        const insideTD = allTDs[i].innerText
        const parsed = parseInt(insideTD)
        if (typeof parsed === "number"){
            result.push(insideTD)
            result = result.filter(element => element !== "")}}
    result = result.filter(element => element !== "")
    let numberString = result.map((i) => Number(i))
    sum = sumArr(numberString)
    return sum
}

// const arrStr = ["1", "3", "5", "9"];
// const nuevo = arrStr.map((i) => Number(i));
// console.log(nuevo);

// *********** INITIALIZATION ***********

console.log(x + " <> " + y)
console.log(testObject)
delete testObject.email
console.log(testObject)
console.log(stringArr)
console.log(arrEx26)
findMinMax(randomArr)
arrayOfArr(3)
console.log(longestArr(arrEx26, arrEx28))
console.log("EX30")
const arrayOne = fillArr(2)
const arrayTwo = fillArr(2)
console.log(biggerSum(sumArr(arrayOne), sumArr(arrayTwo)))
console.log(container)
console.log(allTDs)
console.log(allTDs.length)
changeHeading("JS Inserted Heading")
insertRow()
addClassToRow("red")
addRedBackground()
selectLinks()

console.log("Page loaded")
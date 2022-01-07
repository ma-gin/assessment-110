// *********** DECLARATION OF VARIABLES ***********

const x = "John"
const y = "Doe"
const testObject = {name: "Mary", surname: "Lamb", email: "maryhad@little.lamb"}
const stringArr = []
let randomArr = []
let arrEx28 = []
const container = document.getElementById("container")
const allTDs = document.getElementsByTagName("td")
const everyLink = document.getElementsByClassName("all-links")
let heading = document.querySelector(".heading")

// *********** EVENT LISTENERS ***********

heading.addEventListener("click", () =>{
    heading.innerText = heading.innerText.split("").slice(0, -1).join("")
})

for (let i = 0; i < allTDs.length; i++){
    allTDs[i].addEventListener("click", () =>{
        // allTDs[i].style.backgroundColor = "red" //by styling
        allTDs[i].classList.toggle("box-highlight") //allows to go back to original state
})}

for (let i = 0; i < allTDs.length; i++){
    allTDs[i].addEventListener("mouseover", () =>{
        allTDs[i].classList.toggle("border-highlight")
})}

// *********** DECLARATION OF FUNCTIONS ***********
for (let i = 0; i < 10; i++){
    stringArr.push("str: " + (i +1))
}
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
    console.log(arr)
    let length = arr.length
    let result = 0
    for (let i = 1; i <=length; i++){
        result += arr.at(-i)
    }
    console.log(result)
    return result
}

const biggerSum = (arr1, arr2) => arr1 > arr2 ? console.log(`The sum of ${arrayOne} is greater than the sum ${arrayTwo}.`) : console.log(`The sum of ${arrayTwo} is greater than the sum ${arrayOne}.`)
const changeHeading = (newHeading) => {
    let heading = document.querySelector(".heading")
    heading.innerText = newHeading
}

const insertRow = (text) => {
    const newRow = document.createElement("tr")
    const newCell = document.createElement("td")
    newCell.innerText = text
    newCell.classList.add("padding")
    newCell.setAttribute("colspan", "5");
    const tBody = document.getElementsByTagName("tbody")[0]
    tBody.appendChild(newRow)
    newRow.appendChild(newCell)
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
        allLinks[i].style.background = "green"
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

// Extra 3
const toggleTable = () => {
    const tableElement = document.getElementById("main-table")
    tableElement.classList.toggle("hide")
}

const sumTable = () => { //this should probably be two seperate functions
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

// Extra 7
function deleteTD(){ //in order to make sure it works every time the button is clicked a new array would need to be formed and with the pop method this could be achieved
    console.log(allTDs)
    const randomTDindex = Math.floor(Math.random() * allTDs.length)
    allTDs[randomTDindex].classList.add("hide")
}

//Extra 9
function createTable(x, y){  //add input functionality
    const newTable = document.createElement("table")
    for (let i = 0; i < y; i++){
        const newRow = document.createElement("tr")
        for (let i = 0; i < x; i++){
            const newCell = document.createElement("td")
            newCell.innerText = i + 1
            newRow.appendChild(newCell)}
    newTable.appendChild(newRow)}
    container.appendChild(newTable)
}

//Extra 10
const deleteTable = function(){
    const lastTable = document.getElementsByTagName("table")
    lastTable[lastTable.length - 1].classList.add("hide")
}
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
const arrayOne = fillArr(3)
const arrayTwo = fillArr(3)
biggerSum(sumArr(arrayOne), sumArr(arrayTwo))
console.log(container)
console.log(allTDs)
console.log(allTDs.length)
changeHeading("JS Inserted Heading")
insertRow("JS Inserted Row")
addClassToRow("red")
addRedBackground()
selectLinks()

console.log("Page loaded")
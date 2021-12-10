const x = "John"
const y = "Doe"
const testObject = {name: "Mary", surname: "Lamb", email: "maryhad@little.lamb"}
const stringArr = ["str1", "str2", "str3", "str4", "str5", "str6", "str7", "str8", "str9", "str10"]
let randomArr = []
let arrEx28 = []

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

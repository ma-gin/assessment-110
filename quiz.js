const questions = [
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "What does CPU stand for?",
          correct_answer: "Central Processing Unit",
          incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
          correct_answer: "Final",
          incorrect_answers: ["Static", "Private", "Public"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "The logo for Snapchat is a Bell.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
          correct_answer: ".svg",
          incorrect_answers: [".png", ".jpeg", ".gif"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "In web design, what does CSS stand for?",
          correct_answer: "Cascading Style Sheet",
          incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the code name for the mobile operating system Android 7.0?",
          correct_answer: "Nougat",
          incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "On Twitter, what is the character limit for a Tweet?",
          correct_answer: "140",
          incorrect_answers: ["120", "160", "100"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "Linux was first created as an alternative to Windows XP.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "I Like Pizza",
          correct_answer: "True",
          incorrect_answers: ["False"], 
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "Which programming language shares its name with an island in Indonesia?",
          correct_answer: "Java",
          incorrect_answers: ["Python", "C", "Jakarta"],
        },
]
const displayContainer = document.getElementById("question-container")
const mainBtn = document.getElementById('main-btn')
let correctCount = 0
let correctAnswer


const renderQandA = function () {
    displayContainer.style.minHeight =  "50vh"
    if (questions.length !== 0) {
        const answerWrapper = document.createElement("div")
        const index = Math.floor(Math.random() * questions.length)
        const question = questions.splice(index, 1)
        const questionWrapper = document.getElementById("question-wrapper")
        questionWrapper.innerText = question[0].question
        answerWrapper.classList.add("answers")
        const answers = question[0].incorrect_answers
        correctAnswer = question[0].correct_answer
        answers.push(correctAnswer)
        if (answers.length > 2) answers.sort(() => Math.random() - 0.5)
        if (answers.length === 2) {
          if (answers.indexOf("True") !== 0) {
            [answers[1], answers[0]] = [answers[0], answers[1]]
          }
        }       
        for (let i = 0; i < answers.length; i++){
            const option = document.createElement('div')
            const input = document.createElement('input')
            option.appendChild(input)
            input.setAttribute("type", "radio")
            input.setAttribute("name", "answer")
            input.parentElement.addEventListener('click', () => {
              input.click()  
            })
            const optionId = `answer${i}`
            const optionItem = document.createElement('label')
            input.setAttribute("id", optionId)
            optionItem.setAttribute("for", optionId)
            optionItem.innerText = answers[i]
            option.appendChild(optionItem)
            option.classList.add("option")
            answerWrapper.appendChild(option)
        }
        displayContainer.insertBefore(answerWrapper, null)
        mainBtn.innerText = "Next Question"
        mainBtn.setAttribute("onclick", "nextQuestion()")
    } else {
        displayResult()
    }
}

const validateAnswer = () => {
    const inputs = document.getElementsByName("answer")
    let formValid = false

    let i = 0
    while (!formValid && i < inputs.length) {
        if (inputs[i].checked) formValid = true
        i++
    }

    if (!formValid) alert("Please select an answer!")
    const answer = document.querySelector('input[name=answer]:checked')
    return answer.nextElementSibling.innerHTML
}

const notifyIncorrect = () => {
  document.body.style.backgroundColor = "lightcoral"
  setTimeout(function () { document.body.style.backgroundColor = "white" }, 250)
}

const notifyCorrect = () => {
  document.body.style.backgroundColor = "lightgreen"
  setTimeout(function () { document.body.style.backgroundColor = "white" }, 250)
  correctCount++
}

const nextQuestion = function () {
  const selectedAnswer = validateAnswer()
  if (selectedAnswer === correctAnswer) notifyCorrect()
  else notifyIncorrect ()
  displayContainer.removeChild(displayContainer.lastChild)
  renderQandA()
}

const reloadPage = function () {
  window.location.reload()
}

const displayResult = function () {
    mainBtn.remove()
    displayContainer.innerHTML = ""
    displayContainer.innerHTML = `<p>You scored ${correctCount} out of 10.</p><br><br><button class="btn" onclick="reloadPage()">Try Again</button>`
}
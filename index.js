var readlineSync = require("readline-sync")

var score = 0

var userName = readlineSync.question("What's your name?")

console.log("Welcom " + userName + " Let's see how much you know about Marvel.")

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!")
    score = score + 1
  }
  else {
    console.log("Wrong!")
  }
  console.log("Current Score : ", score)
  console.log("---------------")
}

var questions = [{
  question: "How many Infinity Stones are there?",
  answer: "Six"
}, {
  question: "Where is Captain America from?",
  answer: "Brooklyn"
}, {
  question: "Who is Tony Stark’s father?",
  answer: "Howard Stark"
}, {
  question: "What does S.H.I.E.L.D. stand for?",
  answer: "Strategic Homeland Intervention, Enforcement and Logistics Division"
}, {
  question: "What type of doctor is Doctor Strange?",
  answer: "A neurosurgeon"
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY!!You scored : ", score)


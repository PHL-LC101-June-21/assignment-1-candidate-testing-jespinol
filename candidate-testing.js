const input = require('readline-sync');

let candidateName;
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;

questions = ['Who was the first American woman in space?', 'True or false: 5 kilometer == 5000 meters?', '(5 + 3)/2 * 10 = ?', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", 'What is the minimum crew size for the ISS?'];

correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];

candidateAnswers = []

function askForName() {
  candidateName = input.question('Candidate Name: ');
}

function askQuestion() {
  for (i = 0; i < questions.length; i++) {
    console.log(`${i + 1}) ${questions[i]}`)
    candidateAnswer = input.question('Your Answer: ')
    candidateAnswers.push(candidateAnswer)
    console.log(`Correct Answer: ${correctAnswers[i]}\n`)
    }
}

function gradeQuiz(candidateAnswers) {
  let goodAnswers = 0
  for (i = 0; i < correctAnswers.length; i++){
    if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()) {
      goodAnswers += 1
    }
  }

  let grade;
  grade = (goodAnswers / correctAnswers.length) * 100
  console.log(`>>> Overall Grade: ${grade}% (${goodAnswers} of ${correctAnswers.length} responses correct) <<<`)
  
  let status = 'FAILED'
  if (grade >= 80) {
    status = 'PASSED'
  }
  console.log(`>>> Status: ${status} <<<`)
  
  return grade;
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};



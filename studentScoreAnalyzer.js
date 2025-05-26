function calculateAverage(scores) {
  let totalSum = 0;
  for (let i = 0; i < scores.length; i++) {
    totalSum += scores[i];
  }
  let averageScore = totalSum / scores.length;
  console.log(`The average score of students is ${averageScore}`);
}

function findMax(scores) {
  let maximumScore = Math.max(...scores);
  console.log(`The maximum score of the test is ${maximumScore}`);
}

function findMin(scores) {
  let minimumScore = Math.min(...scores);
  console.log(`The minimum score of the test is ${minimumScore}`);
}

function printResults(scores) {
  let passMark = 50;
  let failedCount = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < passMark) {
      failedCount++;
    }
  }
  console.log(`The number of failed students is ${failedCount}`);
}

// Input from user
let testScores = [];
let students = Number(prompt("Enter the number of students:"));

for (let j = 1; j <= students; j++) {
  let mark = Number(prompt(`Enter the mark for student ${j}:`));
  testScores.push(mark);
}

console.log("Test scores:", testScores);

// Function calls
calculateAverage(testScores);
findMax(testScores);
findMin(testScores);
printResults(testScores);

// const quizData = [
// 	{
// 		question: "What is the capital of France?",
// 		answers: [
// 			"Paris",
// 			"London",
// 			"Madrid",
// 			"Berlin"
// 		],
// 		correctAnswer: 0
// 	},
// 	{
// 		question: "What is the highest mountain in the world?",
// 		answers: [
// 			"Mount Everest",
// 			"Mount Kilimanjaro",
// 			"Mount McKinley",
// 			"Mount Fuji"
// 		],
// 		correctAnswer: 0
// 	},
// 	{
// 		question: "What is the largest ocean in the world?",
// 		answers: [
// 			"Atlantic Ocean",
// 			"Indian Ocean",
// 			"Arctic Ocean",
// 			"Pacific Ocean"
// 		],
// 		correctAnswer: 3
// 	}
// ];

// const quizContainer = document.getElementById("quiz");
// const submitButton = document.getElementById("submit");

// function buildQuiz() {
// 	const output = [];

// 	quizData.forEach((question, index) => {
// 		const answers = [];

// 		for (let i = 0; i < question.answers.length; i++) {
// 			answers.push(
// 				`<label class="answer">
// 					<input type="radio" name="question${index}" value="${i}">
// 					${question.answers[i]}
// 				</label>`
// 			);
// 		}

// 		output.push(
// 			`<div class="question">${question.question}</div>
// 			<div class="answers">${answers.join("")}</div>`
// 		);
// 	});

// 	quizContainer.innerHTML = output.join("");
// }

// function showResults() {
// 	const answerContainers = quizContainer.querySelectorAll(".answers");

// 	let numCorrect = 0;

// 	quizData.forEach((question, index) => {
// 		const answerContainer = answerContainers[index];
// 		const selector = `input[name=question${index}]:checked`;
// 		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// 		if (userAnswer === String(question.correctAnswer)) {
// 			numCorrect++;
// 			answerContainers[index].style.color = "green";
// 		} else {
// 			answerContainers[index].style.color = "red";
// 		}
// 	});

// 	alert(`You got ${numCorrect} out of ${quizData.length} questions correct!`);
// }

// buildQuiz();

// submitButton.addEventListener("click", showResults);


let q1 = document.querySelector('#q1');
let q2 = document.querySelector('#q2');
let q3 = document.querySelector('#q3');
let correct = 0;

function result(){
	if(q1.checked.value==a)
	correct++;
if(q2.checked.value==c)
	correct++;
if(q.checked.value==a)
	correct++
alert(`you got ${correct}`)
}

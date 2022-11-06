"use strict";

// Form - 1

const formTriangleContainer = document.querySelector(".formTriangle-container");
const firstAngleEl = document.querySelector(
  ".formTriangle-container .firstAngle"
);
const secondAngleEl = document.querySelector(
  ".formTriangle-container .secondAngle"
);
const thirdAngleEl = document.querySelector(
  ".formTriangle-container .thirdAngle"
);
const formTriangleContainer_Result = document.querySelector(
  ".formTriangle-container .result"
);

formTriangleContainer.addEventListener("submit", (e) => {
  let sum = 0;
  e.preventDefault();

  if (
    firstAngleEl.value === "" ||
    parseInt(firstAngleEl.value) < 0 ||
    secondAngleEl.value === "" ||
    parseInt(secondAngleEl.value) < 0 ||
    thirdAngleEl.value === "" ||
    parseInt(thirdAngleEl.value) < 0
  ) {
    formTriangleContainer_Result.innerText = `Please enter postive angles`;
    formTriangleContainer_Result.style.color = "red";
  } else {
    sum =
      parseInt(firstAngleEl.value) +
      parseInt(secondAngleEl.value) +
      parseInt(thirdAngleEl.value);
    formTriangleContainer_Result.style.color = "white";

    if (sum === 180) {
      formTriangleContainer_Result.innerText = "Yay, it forms a triangle :)";
    } else {
      formTriangleContainer_Result.innerText =
        "OOPS, it does not form a triangle :(";
    }
  }
});

// Form - 2

const findHypotenuseContainer = document.querySelector(
  ".findHypotenuse-container"
);
const firstLength = document.querySelector(
  ".findHypotenuse-container .firstLength"
);
const secondLength = document.querySelector(
  ".findHypotenuse-container .secondLength"
);

const findHypotenuseContainer_Result = document.querySelector(
  ".findHypotenuse-container .result"
);

findHypotenuseContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstLength.value === "" || secondLength.value === "") {
    findHypotenuseContainer_Result.innerText =
      " Please enter the length of two legs of a right angled triangle and know its hypotenuse ";
    findHypotenuseContainer_Result.style.color = "red";
  } else if (firstLength.value < 0 || secondLength.value < 0) {
    findHypotenuseContainer_Result.innerText =
      " Please enter the postive length of two legs of a right angled triangle ";
    findHypotenuseContainer_Result.style.color = "red";
  } else {
    const firstLengthInput = parseInt(firstLength.value);
    const secondLengthInput = parseInt(secondLength.value);

    const hypotenuselength = Math.sqrt(
      firstLengthInput * firstLengthInput +
        secondLengthInput * secondLengthInput
    );
    findHypotenuseContainer_Result.style.color = "white";

    findHypotenuseContainer_Result.innerText = `The length of the hypotenuse is ${hypotenuselength.toFixed(
      2
    )} Sq units.`;
  }
});

// Form - 3 generate angle

const firstAngleDiv = document.querySelector(
  ".guessThirdAngle-container .firstAngle"
);
const secondAngleDiv = document.querySelector(
  ".guessThirdAngle-container .secondAngle"
);

const thirdAngleDiv = document.querySelector(
  ".guessThirdAngle-container .thirdAngle"
);

const btn_generateThirdAngle = document.querySelector(
  ".guessThirdAngle-container .btn-generateAngle"
);

btn_generateThirdAngle.addEventListener("click", () => {
  let angle1 = Math.trunc(Math.random() * (180 - 0)) + 0;
  let angle2 = Math.trunc(Math.random() * (180 - 0)) + 0;

  while (1) {
    if (angle1 + angle2 >= 180) {
      if (angle1 > angle2) {
        angle1 = Math.trunc(Math.random() * (180 - 0)) + 0;
      } else {
        angle2 = Math.trunc(Math.random() * (180 - 0)) + 0;
      }
    } else {
      break;
    }
  }
  thirdAngleDiv.value = "";
  firstAngleDiv.innerText = angle1;
  secondAngleDiv.innerText = angle2;
});

// Form - 3

const guessThirdAngleContainer = document.querySelector(
  ".guessThirdAngle-container form"
);

const guessThirdAngleContainer_Result = document.querySelector(
  ".guessThirdAngle-container .result"
);

guessThirdAngleContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  if (Number(thirdAngleDiv.value) < 0 || thirdAngleDiv.value === "") {
    guessThirdAngleContainer_Result.innerText = `Please enter postive third angle value`;
    guessThirdAngleContainer_Result.style.color = "red";
  } else {
    let thirdAngleInput = Number(thirdAngleDiv.value);
    let thirdAngle =
      180 - Number(firstAngleDiv.innerText) - Number(secondAngleDiv.innerText);
    guessThirdAngleContainer_Result.style.color = "white";

    if (thirdAngle === 180) {
      guessThirdAngleContainer_Result.innerText = "Generate angles to proceed.";
    } else {
      if (thirdAngleInput === thirdAngle) {
        guessThirdAngleContainer_Result.innerText = "Correct guess :)";
      } else {
        guessThirdAngleContainer_Result.innerText = "Incorrect guess :(";
      }
    }
  }
});

// form -4

const baseEl = document.querySelector(".base");
const heightEl = document.querySelector(".height");
const areaDiv = document.querySelector(".triangleArea-container .result");

const triangleAreaContainer = document.querySelector(".triangleArea-container");

triangleAreaContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    Number(baseEl.value) < 0 ||
    Number(heightEl.value) < 0 ||
    baseEl.value === "" ||
    heightEl.value === ""
  ) {
    areaDiv.innerText = `Please enter postive height and base values `;
    areaDiv.style.color = "red";
  } else {
    const area = baseEl.value * heightEl.value * 0.5;
    areaDiv.innerText = `The area of the triangle is ${area} Sq units.`;
    areaDiv.style.color = "white";
  }
});

// General Quiz form

const answerArray = [
  "3 ",
  "All its sides are equal length",
  "Pythagoras",
  "Right angle triangle",
  "27",
  "c2",
  "The longest side of triangle",
  "3",
];

const generalQuizContainer_Form = document.querySelector(
  ".generalQuiz-container .form"
);
const quizScore = document.querySelector(".quiz-totalScore");
const quizContainer = document.querySelectorAll(".quiz-container");

generalQuizContainer_Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let index = 0;
  let score = 0;

  const formResult = new FormData(generalQuizContainer_Form);

  for (let [, value] of formResult) {
    if (value === answerArray[index]) {
      score += 1;
      quizContainer[index].style.border = "1px solid rgb(36, 160, 36)";
    } else {
      quizContainer[index].style.border = "1px solid red";
    }
    index += 1;
  }
  quizScore.innerText = `Score: ${score} / 8`;
});

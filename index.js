//
function quiz() {
  let answer = 0;

  // access all the elements(answers) from question1, which is sort of like an array, check all the answers

  let q1 = document.getElementsByName("question1");
  for (i = 0; i < q1.length; i++) {
    if (q1[i].checked) {
      q1 = q1[i];
      break;
    }
  }
  let q2 = document.getElementsByName("question2");
  for (i = 0; i < q2.length; i++) {
    if (q2[i].checked) {
      q2 = q2[i];
      break;
    }
  }
  let q3 = document.getElementsByName("question3");
  for (i = 0; i < q3.length; i++) {
    if (q3[i].checked) {
      q3 = q3[i];
      break;
    }
  }
  let q4 = document.getElementsByName("question4");
  for (i = 0; i < q4.length; i++) {
    if (q4[i].checked) {
      q4 = q4[i];
      break;
    }
  }
  let q5 = document.getElementsByName("question5");
  for (i = 0; i < q5.length; i++) {
    if (q5[i].checked) {
      q5 = q5[i];
      break;
    }
  }

  if (q1.value == "Lucky-Goldstar") {
    answer++;
  }

  if (q2.value == "In factories") {
    answer++;
  }

  if (q3.value == "1971") {
    answer++;
  }

  if (q4.value == "$4000") {
    answer++;
  }

  if (q5.value == "Books") {
    answer++;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("number_answer").innerHTML =
    "Your score is " + answer + "/5.";
}

// start loading questions within a web page ..none=hide questions and block=run question
window.onload = function () {
  document.getElementById("start").style.display = "block";
  document.getElementById("questionContainer1").style.display = "none";
  document.getElementById("questionContainer2").style.display = "none";
  document.getElementById("questionContainer3").style.display = "none";
  document.getElementById("questionContainer4").style.display = "none";
  document.getElementById("questionContainer5").style.display = "none";
};
function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("questionContainer1").style.display = "block";
  document.getElementById("questionContainer2").style.display = "none";
  document.getElementById("questionContainer3").style.display = "none";
  document.getElementById("questionContainer4").style.display = "none";
  document.getElementById("questionContainer5").style.display = "none";
}

function question2() {
  document.getElementById("questionContainer1").style.display = "none";
  document.getElementById("questionContainer2").style.display = "block";
  document.getElementById("questionContainer3").style.display = "none";
  document.getElementById("questionContainer4").style.display = "none";
  document.getElementById("questionContainer5").style.display = "none";
}
function question3() {
  document.getElementById("questionContainer1").style.display = "none";
  document.getElementById("questionContainer2").style.display = "none";
  document.getElementById("questionContainer3").style.display = "block";
  document.getElementById("questionContainer4").style.display = "none";
  document.getElementById("questionContainer5").style.display = "none";
}
function question4() {
  document.getElementById("questionContainer1").style.display = "none";
  document.getElementById("questionContainer2").style.display = "none";
  document.getElementById("questionContainer3").style.display = "none";
  document.getElementById("questionContainer4").style.display = "block";
  document.getElementById("questionContainer5").style.display = "none";
}
function question5() {
  document.getElementById("questionContainer1").style.display = "none";
  document.getElementById("questionContainer2").style.display = "none";
  document.getElementById("questionContainer3").style.display = "none";
  document.getElementById("questionContainer4").style.display = "none";
  document.getElementById("questionContainer5").style.display = "block";
}

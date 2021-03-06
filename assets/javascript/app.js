var Question0 = ["Who holds the record for most yards rushing in a season?"];
var Question1 = ["Who holds the record for most yards receiving in a season?"];
var Question2 = ["Who holds the record for most yards passing in a season?"];
var Question3 = ["Who holds the record for most yards rushing in a game?"];
var Question4 = ["Who holds the record for most yards receiving in a game?"];
var Question5 = ["Who holds the record for most yards passing in a game?"];
var Question6 = ["Who holds the record for most career yards rushing?"];
var Question7 = ["Who holds the record for most career yards receiving?"];
var Question8 = ["Who holds the record for most career yards passing?"];
var Question9 = ["Who is the greatest NFL player ever?"];

var questionNumber = [Question0, Question1, Question2, Question3, Question4, Question5, Question6, Question7,
    Question8,
    Question9
];

// index[0-4] are the possible answers, index[5] holds the index answer for each question, index[6] gives a brief answer to the user
var triviaAnswer0 = ["Eric Dickerson", "Adrian Peterson", "Jamal Lewis", "OJ Simpson", "Terrell Davis", 0,
    "In 1984, Los Angeles Rams Eric Dickerson set the single season rushing record with 2105 yards."
];
var triviaAnswer1 = ["Calvin Johnson", "Randy Moss", "Art Monk", "Jerry Rice", "Julio Jones", 0,
    "In 2012, Detroit Lions receiver Calvin Johnson set the single season receiving yards record with 1964 yards."
];
var triviaAnswer2 = ["Tom Brady", "Drew Brees", "Peyton Manning", "Dan Marino", "Joe Montana", 2,
    "In 2013, Peyton Manning of the Denver Broncos set the single season passing yards record with an incredible 5477 yards."
];
var triviaAnswer3 = ["Eric Dickerson", "Adrian Peterson", "Ladanian Tomlinson", "OJ Simpson", "Marshal Faulk",
    1,
    "Adrian Peterson set the single game rushing record of 296 yards in 2007.  He broke the previous record of 295 yards held by Jamal Lewis."
];
var triviaAnswer4 = ["Calvin Johnson", "Stephone Paige", "Julio Jones", "Willie 'Flipper' Anderson",
    "Jerry Rice", 3,
    "In 1989, Willie 'Flipper' Anderson had 336 yards receiving to set the single game receiving yards record."
];
var triviaAnswer5 = ["Mathew Stafford", "Boomer Esiason", "Warren Moon", "Matt Shaub", "Norm Van Brocklin", 4,
    "Norm Van Brocklin holds the record of 554 passing yards in a single game."
];
var triviaAnswer6 = ["Barry Sanders", "Curtis Martin", "Ladanian Tomlinson", "Emmitt Smith", "Walter Payton", 3,
    "Emmitt Smith is the all-time rushing leader with 18,355 yards."
];
var triviaAnswer7 = ["Jerry Rice", "Terrell Owens", "Larry Fitzgerald", "Randy Moss", "Isaac Bruce", 0,
    "Jerry Rice has 22,895 career receiving yards, almost 7,000 more than 2nd place all time!"
];
var triviaAnswer8 = ["Brett Favre", "Peyton Manning", "Drew Brees", "Dan Marino", "John Elway", 1,
    "Peyton Manning holds the record for career passing yards with 71,940. Brett Favre was a close 2nd with 71,838. Drew Brees will be the new king next season only being 1,495 behind Manning."
];
var triviaAnswer9 = ["Randy Moss", "Brett Favre", "Bo Jackson", "Peyton Manning", "Tom Brady", 2,
    "Bo Jackson is the greatest player ever."
];

var triviaAnswers = [triviaAnswer0, triviaAnswer1, triviaAnswer2, triviaAnswer3, triviaAnswer4, triviaAnswer5,
    triviaAnswer6,
    triviaAnswer7, triviaAnswer8, triviaAnswer9
];

//###########################################################MAKE SURE ARRAYS WORK PROPERLY#################################################
//             for (i = 0; i < questionNumber.length; i++) {
// // console.log(questionNumber[i] + " " + triviaAnswers[i][triviaAnswers[i][5]]);
// console.log(questionNumber[i] + " " + triviaAnswers[i][triviaAnswers[i][5]] +": "+ triviaAnswers[i][6]);
// }
//##########################################################################################################################################


window.onload = function () {
    correct = 0;
    wrong = 0;
    i = -1;
    beginQuiz();
}


beginQuiz = function () {
    document.getElementById("rightAnswers").innerHTML = "Correct: " + correct;
    document.getElementById("wrongAnswers").innerHTML = "Wrong: " + wrong;
    console.log("HELLO WORLD beginQuiz function just started again");
    i++;
    if (i > 9) {
        endQuiz();
    }
    if (i < 10) {
        $('input[name="answer"]').prop('checked', false);
        document.getElementById("triviaQuestion").innerHTML = questionNumber[i];
        document.getElementById("answer0").innerHTML = triviaAnswers[i][0];
        document.getElementById("answer1").innerHTML = triviaAnswers[i][1];
        document.getElementById("answer2").innerHTML = triviaAnswers[i][2];
        document.getElementById("answer3").innerHTML = triviaAnswers[i][3];
        document.getElementById("answer4").innerHTML = triviaAnswers[i][4];
        realAnswer = triviaAnswers[i][5];
        info = triviaAnswers[i][6];
        console.log(realAnswer + " " + triviaAnswers[i][6]);
        n = 0;
    }
}
endQuiz = function () {
    $('input[name="answer"]').prop('checked', false);
    document.getElementById("triviaQuestion").innerHTML = "Thanks for taking the NFL CHALLENGE QUIZ!";
    document.getElementById("answer0").innerHTML = "";
    document.getElementById("answer1").innerHTML = "";
    document.getElementById("answer2").innerHTML = "";
    document.getElementById("answer3").innerHTML = "";
    document.getElementById("answer4").innerHTML = "";

    setTimeout(function () {
        correct = 0;
        wrong = 0;
        i = -1;
        beginQuiz(i);
    }, 10000);
}

checkAnswer = function () {
    for (let n = 0; n < 5; n++) {
        if ((document.getElementById("radio" + n).checked)) {
            console.log("radio" + n + " is checked!!");
            checkedAnswer = n;
            if (realAnswer === checkedAnswer) {
                document.getElementById("triviaQuestion").innerHTML = info;
                correct++;
                document.getElementById("rightAnswers").innerHTML = "Correct: " + correct;
                console.log("Correct Answers now = " + correct);
                setTimeout(function () {
                    beginQuiz(i);
                }, 5000);
            }
            if (realAnswer != checkedAnswer) {
                document.getElementById("triviaQuestion").innerHTML = info;
                wrong++;
                document.getElementById("wrongAnswers").innerHTML = "Wrong: " + wrong;
                console.log("Wrong Answers now = " + wrong);
                setTimeout(function () {
                    beginQuiz(i);
                }, 5000);
            }
        }
    }
}

$("#submitAnswerButton").on("click", checkAnswer);


////###########################CODE NEEDED IF NO LOOP##########################
//         checkAnswer = function() {
//             if ((document.getElementById('radio0').checked)) {
//         console.log('radio0 is checked!!');
//         checkedAnswer=0;
//         if (realAnswer === checkedAnswer) {alert("YOU ARE CORRECT!");
//         correct ++;
//         console.log("Correct Answers now = " + correct);
//         setTimeout(function () {
//         beginQuiz(i);
//             }, 500);   }
//         if (realAnswer != checkedAnswer) {alert("YOU ARE WRONG!!!!");
//         wrong ++;
//         console.log("Wrong Answers now = " + wrong);
//         setTimeout(function () {
//         beginQuiz(i);
//             }, 500);    }}  

//             if ((document.getElementById('radio1').checked)) {
//                 console.log('radio1 is checked!!');
//         checkedAnswer=1;
//         if (realAnswer === checkedAnswer) {alert("YOU ARE CORRECT!");
//         correct ++;
//         console.log("Correct Answers now = " + correct);
//         setTimeout(function () {
//         beginQuiz(i);
//             }, 500);   }  
//         if (realAnswer != checkedAnswer) {alert("YOU ARE WRONG!!!!");
//         wrong ++;
//         console.log("Wrong Answers now = " + wrong);
//         setTimeout(function () {
//         beginQuiz(i);
//             },  500);   }}

//             if ((document.getElementById('radio2').checked)) {
//                 console.log('radio2 is checked!!');
//         checkedAnswer=2;
//         if (realAnswer === checkedAnswer) {alert("YOU ARE CORRECT!");
//         correct ++;
//         console.log("Correct Answers now = " + correct);
//         setTimeout(function () {
//         beginQuiz(i);
//             }, 500);   } 
//         if (realAnswer != checkedAnswer) {alert("YOU ARE WRONG!!!!");
//         wrong ++;
//         console.log("Wrong Answers now = " + wrong);
//         setTimeout(function () {
//         beginQuiz(i);
//             },  500);   } } 

//             if ((document.getElementById('radio3').checked)) {
//                 console.log('radio3 is checked!!');
//         checkedAnswer=3;
//         if (realAnswer === checkedAnswer) {alert("YOU ARE CORRECT!");
//         correct ++;
//         console.log("Correct Answers now = " + correct);
//         setTimeout(function () {
//         beginQuiz(i);
//             },  500);   }
//         if (realAnswer != checkedAnswer) {alert("YOU ARE WRONG!!!!");
//         wrong ++;
//         console.log("Wrong Answers now = " + wrong);
//         setTimeout(function () {
//         beginQuiz(i);
//             },  500);   }}

//             if ((document.getElementById('radio4').checked)) {
//                 console.log('radio4 is checked!!');
//         checkedAnswer=4;
//         if (realAnswer === checkedAnswer) {alert("YOU ARE CORRECT!");
//         correct ++;
//         console.log("Correct Answers now = " + correct);
//         setTimeout(function () {
//         beginQuiz(i);
//             },  500);   }
//         if (realAnswer != checkedAnswer) {alert("YOU ARE WRONG!!!!");
//         wrong ++;
//         console.log("Wrong Answers now = " + wrong);
//         setTimeout(function () {
//         beginQuiz(i);
//             },  500);   }}
// }                /////END OF FUNCTION checkAnswer()


// checkAnswer = function() {
//         for (let n=0; n<5; n++){
//             if ((document.getElementById("radio"+n).checked)) {
//         console.log("radio"+n + " is checked!!");
//         checkedAnswer = n };
//         if (realAnswer === checkedAnswer) {alert("YOU ARE CORRECT!");
//         correct ++;
//         console.log("Correct Answers now = " + correct)  
//          setTimeout(function () {
//      beginQuiz(i);
//           },  500);   }
//         return; };

//         if (realAnswer != checkedAnswer) {alert("YOU ARE WRONG!!!!");
//         wrong ++;
//         console.log("Wrong Answers now = " + wrong) 
//          setTimeout(function () {
//       beginQuiz(i);
//          },  500);   }
//         return; };
//              }}
////###########################CODE NEEDED IF NO LOOP##########################

const getQuestion = function(){
    const question1 = document.querySelector(".question1 .question");
    const answer1 = document.querySelector(".question1 .answer");
    const arrow1 = document.querySelector(".question1 img");

    const question2 = document.querySelector(".question2 .question");
    const answer2 = document.querySelector(".question2 .answer");
    const arrow2 = document.querySelector(".question2 img");

    const question3 = document.querySelector(".question3 .question");
    const answer3 = document.querySelector(".question3 .answer");
    const arrow3 = document.querySelector(".question3 img");

    const question4 = document.querySelector(".question4 .question");
    const answer4 = document.querySelector(".question4 .answer");
    const arrow4 = document.querySelector(".question4 img");

    const question5 = document.querySelector(".question5 .question");
    const answer5 = document.querySelector(".question5 .answer");
    const arrow5 = document.querySelector(".question5 img");

    active(question1, answer1, arrow1);
    active(question2, answer2, arrow2);
    active(question3, answer3, arrow3);
    active(question4, answer4, arrow4);
    active(question5, answer5, arrow5);

};



const active = function(questionNo, answer, arrow){
    questionNo.addEventListener("click", ()=>{
    if (questionNo.classList.contains("active")){
    questionNo.classList.remove("active")
    answer.classList.add("hide")
    arrow.classList.remove("arrow-up")
    arrow.classList.add("arrow-down")
    }
    else{
    questionNo.classList.add("active")
    answer.classList.remove("hide")
    arrow.classList.add("arrow-up")
    arrow.classList.remove("arrow-down")
    }
})};



getQuestion();
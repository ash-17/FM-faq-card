const questions = document.getElementsByClassName("question")
const answer = document.getElementsByClassName("answer")
const arrow = document.getElementsByClassName("arrow-down")

for (let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click",()=>{
        if (!questions[i].classList.contains("active")){
            questions[i].classList.add("active");
            answer[i].classList.add("active");
            answer[i].classList.add("active");

            removeClass(questions[i])
        }
        else{
            questions[i].classList.remove("active");
            answer[i].classList.remove("active");
            answer[i].classList.remove("active");
        };
    });  
};

const removeClass = function(rem){
    for (let i = 0; i < questions.length; i++){
        if (questions[i]!=rem){
            questions[i].classList.remove("active");
            answer[i].classList.remove("active");
            answer[i].classList.remove("active");

        }
    }

    
};


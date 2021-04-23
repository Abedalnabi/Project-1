console.log("*********Project-1**********")

const body = document.querySelector("body")

let Q1,Q2,Q3,Q4,Q5,questions,options,correctAnswers,score
scour=0

Q1="Which of the following is not a Capital?"
Q2="What year did World War ONE begin"
Q3="What is the unit of currency in Jordan"
Q4=" what year did the berlin wall crash"


questions = [{Q: Q1},{Q: Q2},{Q: Q3},{Q: Q4}]
options = [{OP4Q1:"Amman" , OP4Q2:2020,OP4Q3:"euro",OP4Q4:1988},
            {OP4Q1:"USA" , OP4Q2:1918,OP4Q3:"Dollar",OP4Q4:1999},
            {OP4Q1:"Cairo" , OP4Q2:1922,OP4Q3:"JOD",OP4Q4:2002},
            {OP4Q1:"Beijing" , OP4Q2:1914,OP4Q3:"yen",OP4Q4:1989}]
correctAnswers =["USA",1918,"JOD","1989"]


let QA      = document.querySelector(".Questions")
let answers = document.querySelectorAll(".answer")
let a=0
let i =0
let rest


function start(){
    document.getElementById("qwe").value = options[0].OP4Q1
    document.getElementById("SECOND").value = options[1].OP4Q1
    document.getElementById("THIRD").value = options[2].OP4Q1
    document.getElementById("FORTH").value = options[3].OP4Q1

    QA.innerHTML =questions[0].Q
    rest = document.querySelector(".next")
    rest.innerHTML = "Rest"
    
    scour=0
    a=0
    i=0
    if(a===0){
        // options.forEach(function(ele,i){
            answers[i].innerHTML = options[i].OP4Q1
            body.style.backgroundImage = "url(https://cdn.britannica.com/55/190455-050-E617F64E/Night-view-Singapore.jpg)";
            body.style.color = "white"

        // })
    }
    a++
    i++
    }




function next(){

    console.log(a)
    if(a>0&&a<=3){
        
        QA.innerHTML =questions[i].Q
        console.log(a)
            if(a===0){
// options.forEach(function(ele,i){
// answers[i].innerHTML = options[i].OP4Q1
                body.style.backgroundImage = "url(https://cdn.britannica.com/55/190455-050-E617F64E/Night-view-Singapore.jpg)";
// })
            }else if (a===1){
// options.forEach(function(ele,i){
                document.getElementById("qwe").value = options[0].OP4Q2
                document.getElementById("SECOND").value = options[1].OP4Q2
                document.getElementById("THIRD").value = options[2].OP4Q2
                document.getElementById("FORTH").value = options[3].OP4Q2
// answers[i].innerHTML = options[i].OP4Q2 
   
// })
            }else if (a===2){
    
                document.getElementById("qwe").value = options[0].OP4Q3
                document.getElementById("SECOND").value = options[1].OP4Q3
                document.getElementById("THIRD").value = options[2].OP4Q3
                document.getElementById("FORTH").value = options[3].OP4Q3
//options.forEach(function(ele,i){
//answers[i].innerHTML = options[i].OP4Q3 
// })
            }else if (a===3){
                document.getElementById("qwe").value = options[0].OP4Q4
                document.getElementById("SECOND").value = options[1].OP4Q4
                document.getElementById("THIRD").value = options[2].OP4Q4
                document.getElementById("FORTH").value = options[3].OP4Q4
// options.forEach(function(ele,i){
// answers[i].innerHTML = options[i].OP4Q4   
// })
            }else if(a>3){
                i=0
                }
                
                a++
                i++
    }
}




console.log("*********Project-1**********")

const body = document.querySelector("body")

let Q1,Q2,Q3,Q4,Q5,questions,options,correctAnswers,score,rank
scour=[]
rank=0



Q1=`Which of the following is not a Capital?`
Q2=`What year did World War ONE begin?`
Q3=`What is the unit of currency in Jordan?`
Q4=` What year did the berlin wall crash?`


questions = [{Q: Q1},{Q: Q2},{Q: Q3},{Q: Q4}]
options = [{OP4Q1:"Amman" , OP4Q2:2020,OP4Q3:"euro",OP4Q4:1988},
            {OP4Q1:"USA" , OP4Q2:1918,OP4Q3:"Dollar",OP4Q4:1999},
            {OP4Q1:"Cairo" , OP4Q2:1922,OP4Q3:"JOD",OP4Q4:2002},
            {OP4Q1:"Beijing" , OP4Q2:1914,OP4Q3:"yen",OP4Q4:1989}]
correctAnswers =["USA",1918,"JOD","1989"]


let QA      = document.querySelector(`.Questions`)
let answers = document.querySelectorAll(`.answer`)
//counter to know where i am
let counter=0
// i to know where the array i am like answer array
let i =0
let rest
let QustConter =1
let redyToQustConter = false
//this fun for start and rest
const start=  ()=>{
    document.getElementById("qwe").value = options[0].OP4Q1
    document.getElementById("SECOND").value = options[1].OP4Q1
    document.getElementById("THIRD").value = options[2].OP4Q1
    document.getElementById("FORTH").value = options[3].OP4Q1
        redyToQustConter = true
        QustConter =1
        QustNumber = document.querySelector("#QA")
        QustNumber.innerHTML = `Questions 1`

    QA.innerHTML =questions[0].Q
    rest = document.querySelector(".next")
    rest.innerHTML = "Rest"
    rank=0
    scour=[]
    counter=0
    i=0
        if(counter===0){
        answers[i].innerHTML = options[i].OP4Q1
        }
    counter++
    i++
    }

    const next = ()=>{
        if(QustConter<4&&redyToQustConter){
        QustConter++
        QustNumber = document.querySelector("#QA")
        QustNumber.innerHTML = `Questions ${QustConter}`
        }
        scour.push (document.getElementById(`qwe`).value)

        if(counter>0&&counter<=3){
            
            QA.innerHTML =questions[i].Q
        

                if(counter===0){

                }else if (counter===1){
                    document.getElementById(`qwe`).value = options[0].OP4Q2
                    document.getElementById(`SECOND`).value = options[1].OP4Q2
                    document.getElementById(`THIRD`).value = options[2].OP4Q2
                    document.getElementById(`FORTH`).value = options[3].OP4Q2
                    

                }else if (counter===2){
                    document.getElementById("qwe").value = options[0].OP4Q3
                    document.getElementById("SECOND").value = options[1].OP4Q3
                    document.getElementById("THIRD").value = options[2].OP4Q3
                    document.getElementById("FORTH").value = options[3].OP4Q3

                }else if (counter===3){
                    document.getElementById("qwe").value = options[0].OP4Q4
                    document.getElementById("SECOND").value = options[1].OP4Q4
                    document.getElementById("THIRD").value = options[2].OP4Q4
                    document.getElementById("FORTH").value = options[3].OP4Q4

                }else if(counter>3){
                    i=0
                    }
                    i++
        }
        if(counter===4){
            yourRecord()
            QA.innerHTML = `Your record in this game is ${rank} / 4 you can play again             `

        }
        if(counter>0){
            counter++
        }
    }

const next1 = ()=>{
    if(QustConter<4&&redyToQustConter){
        QustConter++
        QustNumber = document.querySelector("#QA")
        QustNumber.innerHTML = `Questions ${QustConter}`
    }

    scour.push (document.getElementById("SECOND").value)
    
    console.log(counter)
    if(counter>0&&counter<=3){
        
        QA.innerHTML =questions[i].Q

            if(counter===0){

                body.style.backgroundImage = "url(https://cdn.britannica.com/55/190455-050-E617F64E/Night-view-Singapore.jpg)";

            }else if (counter===1){

                document.getElementById("qwe").value = options[0].OP4Q2
                document.getElementById("SECOND").value = options[1].OP4Q2
                document.getElementById("THIRD").value = options[2].OP4Q2
                document.getElementById("FORTH").value = options[3].OP4Q2
                checkBox = document.getElementById('qwe').checked;
                console.log(checkBox)

            }else if (counter===2){
                document.getElementById("qwe").value = options[0].OP4Q3
                document.getElementById("SECOND").value = options[1].OP4Q3
                document.getElementById("THIRD").value = options[2].OP4Q3
                document.getElementById("FORTH").value = options[3].OP4Q3

            }else if (counter===3){
                document.getElementById("qwe").value = options[0].OP4Q4
                document.getElementById("SECOND").value = options[1].OP4Q4
                document.getElementById("THIRD").value = options[2].OP4Q4
                document.getElementById("FORTH").value = options[3].OP4Q4

            }else if(counter>3){
                i=0
                }
                
                
                i++
    }
    if(counter===4){
        yourRecord()
        QA.innerHTML = `Your record in this game is ${rank} / 4 you can play again             `

    }
    if(counter>0){
        counter++}
}

const next2 = ()=>{
    if(QustConter<4&&redyToQustConter){
        QustConter++
        QustNumber = document.querySelector("#QA")
        QustNumber.innerHTML = `Questions ${QustConter}`
    }

    scour.push (document.getElementById("THIRD").value)
    
    console.log(counter)
    if(counter>0&&counter<=3){
        
        QA.innerHTML =questions[i].Q
        console.log(counter)
            if(counter===0){

                body.style.backgroundImage = "url(https://cdn.britannica.com/55/190455-050-E617F64E/Night-view-Singapore.jpg)";

            }else if (counter===1){

                document.getElementById("qwe").value = options[0].OP4Q2
                document.getElementById("SECOND").value = options[1].OP4Q2
                document.getElementById("THIRD").value = options[2].OP4Q2
                document.getElementById("FORTH").value = options[3].OP4Q2
                checkBox = document.getElementById('qwe').checked;

            }else if (counter===2){
    
                document.getElementById("qwe").value = options[0].OP4Q3
                document.getElementById("SECOND").value = options[1].OP4Q3
                document.getElementById("THIRD").value = options[2].OP4Q3
                document.getElementById("FORTH").value = options[3].OP4Q3

            }else if (counter===3){
                document.getElementById("qwe").value = options[0].OP4Q4
                document.getElementById("SECOND").value = options[1].OP4Q4
                document.getElementById("THIRD").value = options[2].OP4Q4
                document.getElementById("FORTH").value = options[3].OP4Q4

            }else if(counter>3){
                i=0
                }
        i++
    }
    if(counter===4){
        yourRecord()
        QA.innerHTML = `Your record in this game is ${rank} / 4 you can play again             `
    }
    if(counter>0){
        counter++
    }
}

const next3 = ()=>{
    if(QustConter<4&&redyToQustConter){
        QustConter++
        QustNumber = document.querySelector("#QA")
        QustNumber.innerHTML = `Questions ${QustConter}`
    }

    scour.push (document.getElementById("FORTH").value)

    console.log(counter)
    if(counter>0&&counter<=3){

        QA.innerHTML =questions[i].Q

            if(counter===0){

                body.style.backgroundImage = "url(https://cdn.britannica.com/55/190455-050-E617F64E/Night-view-Singapore.jpg)";

            }else if (counter===1){

                document.getElementById("qwe").value = options[0].OP4Q2
                document.getElementById("SECOND").value = options[1].OP4Q2
                document.getElementById("THIRD").value = options[2].OP4Q2
                document.getElementById("FORTH").value = options[3].OP4Q2
                checkBox = document.getElementById('qwe').checked;

            }else if (counter===2){

                document.getElementById("qwe").value = options[0].OP4Q3
                document.getElementById("SECOND").value = options[1].OP4Q3
                document.getElementById("THIRD").value = options[2].OP4Q3
                document.getElementById("FORTH").value = options[3].OP4Q3

            }else if (counter===3){
                document.getElementById("qwe").value = options[0].OP4Q4
                document.getElementById("SECOND").value = options[1].OP4Q4
                document.getElementById("THIRD").value = options[2].OP4Q4
                document.getElementById("FORTH").value = options[3].OP4Q4

            }else if(counter>3){
                i=0
            }    
        i++
    }

    if(counter===4){
        yourRecord()
        QA.innerHTML = `Your record in this game is ${rank} / 4 you can play again             `

    }
    if(counter>0){
        counter++
    }
}



///////////////////////////////////////////////////////////////////////
    const yourRecord = ()=>{
    
        correctAnswers =["USA",1918,"JOD","1989"]
        correctAnswers.forEach(function(ele,i){
            if(scour.includes(ele)){
            rank++
        }

    })}

    



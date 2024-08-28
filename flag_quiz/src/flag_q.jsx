import React from "react";
import { incrementCorrectClickCount, getCorrectClickCount, incrementCount, return_clickCount, last_score } from './correct_click_counter.js';


const Random_flag = (flags, children, n) =>{

    console.log(getCorrectClickCount())

    
    let len = flags.length;
    let arr = [] // we will put our 4 random countries in here.

    let k = 0;
    let x = flags[Math.floor(Math.random()*len)]; //first country.
    arr.push(x); // we add our first country in here

    while(k<3){

        let limit = 0; // index of arr that we loop through.
        let x2 = flags[Math.floor(Math.random()*len)]; // next random number that we'll check.
        let count = 0;

        while(limit<arr.length){
            if (x2!==arr[limit]){
                count+=1;
            }
            limit+=1;
        }
        
        if (count===arr.length){
            arr.push(x2);
            k+=1;
        }
    }

    const secret_answer = () =>{
        let arr = [0,1,2,3];
        let random_arr = [];
        random_arr.push(arr[Math.floor(Math.random()*4)])
        let k = 0;

        while(k<3){

            let random = Math.floor(Math.random()*4);
            if(!random_arr.includes(random)){
                random_arr.push(random)
                k+=1
            }
            
        }
        
        return(random_arr)

    }

    const result = secret_answer();
   
    // arr is our 4 random country, and arr[0] is our question flag
    // result is the random mix of those four countries.
    // check is checking whether the country at some index equates the question flag
    const check = (i) => {
        let a = 0;
        if(arr[result[i]]["name"]!==arr[0]["name"]){ // in case the clicked answer is not correct

            switch(i){
                
                case 0:
                    let output = document.createElement("div");
                    output.id = "o1"
                    output.innerHTML = "Incorrect"
                    let targetdiv = document.querySelector(".A")
                    if (targetdiv){
                        targetdiv.appendChild(output)
                    }
                    break;

                case 1:
                    let output1 = document.createElement("div");
                    output1.id = "o2"
                    output1.innerHTML = "Incorrect"
                    let targetdiv1 = document.querySelector(".B")
                    
                    if (targetdiv1){
                        targetdiv1.appendChild(output1)
                    }
                    break;

                case 2:
                    let output2 = document.createElement("div");
                    output2.id = "o3"
                    output2.innerHTML = "Incorrect"
                    let targetdiv2 = document.querySelector(".C")
                    if (targetdiv2){
                        targetdiv2.appendChild(output2)
                    }
                    break;

                case 3:
                    let output3 = document.createElement("div");
                    output3.id = "o4"
                    output3.innerHTML = "Incorrect"
                    let targetdiv3 = document.querySelector(".D")
                    if (targetdiv3){
                        targetdiv3.appendChild(output3)
                    }
                    break;

                default:
                    a=3;

            }

            if (arr[0]===arr[result[0]]){
                let correct = document.createElement("div");
                correct.id = "correct";
                correct.innerHTML = "This is the correct answer"
                let button0 = document.querySelector(".A");
                button0.appendChild(correct); 
            }

            else if (arr[0]===arr[result[1]]){
                let correct = document.createElement("div");
                correct.id = "correct";
                correct.innerHTML = "This is the correct answer"
                let button1 = document.querySelector(".B");
                button1.appendChild(correct); 
            }

            else if (arr[0]===arr[result[2]]){
                let correct = document.createElement("div");
                correct.id = "correct";
                correct.innerHTML = "This is the correct answer"
                let button1 = document.querySelector(".C");
                button1.appendChild(correct); 
            }

            else if (arr[0]===arr[result[3]]){
                let correct = document.createElement("div");
                correct.id = "correct";
                correct.innerHTML = "This is the correct answer"
                let button1 = document.querySelector(".D");
                button1.appendChild(correct); 
            }

        }

        else{ // if the clicked answer is correct

            incrementCorrectClickCount();

            switch(i){
                
                case 0:
                    let output = document.createElement("div");
                    output.id = "o1"
                    output.innerHTML = "Correct"
                    output.style.color = "green"
                    let targetdiv = document.querySelector(".A")
                    if (targetdiv){
                        targetdiv.appendChild(output)
                    }
                    break;

                case 1:
                    let output1 = document.createElement("div");
                    output1.id = "o2"
                    output1.innerHTML = "Correct"
                    output1.style.color = "green"
                    let targetdiv1 = document.querySelector(".B")
                    if (targetdiv1){
                        targetdiv1.appendChild(output1)
                    }
                    break;

                case 2:
                    let output2 = document.createElement("div");
                    output2.id = "o3"
                    output2.innerHTML = "Correct"
                    output2.style.color = "green"
                    let targetdiv2 = document.querySelector(".C")
                    if (targetdiv2){
                        targetdiv2.appendChild(output2)
                    }
                    break;

                case 3:
                    let output3 = document.createElement("div");
                    output3.id = "o4"
                    output3.innerHTML = "Correct"
                    output3.style.color = "green"
                    let targetdiv3 = document.querySelector(".D")
                    if (targetdiv3){
                        targetdiv3.appendChild(output3)
                    }
                    break;

                default:
                    a=3;

            }

        }

        disableButtons();

    }
    

    const handleclick = () => {
        const deleteDiv = document.querySelector("#o1");
        const deleteDiv1 = document.querySelector("#o2");
        const deleteDiv2 = document.querySelector("#o3");
        const deleteDiv3 = document.querySelector("#o4");
        const deleteDiv4 = document.querySelector("#correct");

        incrementCount()
      
        if (deleteDiv){
            deleteDiv.remove()
        }

        if (deleteDiv1){
            deleteDiv1.remove()
        }

        if (deleteDiv2){
            deleteDiv2.remove()
        }

        if (deleteDiv3){
            deleteDiv3.remove()
        }

        if (deleteDiv4){
            deleteDiv4.remove()
        }

        enableButtons()
    }

    const disableButtons = () =>{
        document.querySelector(".A").style.pointerEvents = 'none'; // we set pointerEvent to none, effectively disabling the buttons.
        document.querySelector(".B").style.pointerEvents = 'none';
        document.querySelector(".C").style.pointerEvents = 'none';
        document.querySelector(".D").style.pointerEvents = 'none';
    }

    const enableButtons = () => {
        document.querySelector(".A").style.pointerEvents = 'auto';
        document.querySelector(".B").style.pointerEvents = 'auto';
        document.querySelector(".C").style.pointerEvents = 'auto';
        document.querySelector(".D").style.pointerEvents = 'auto';
    }

    console.log(return_clickCount())

    return (
        <div className="board_quiz">

    
          <div className="question">
            {n}. What country does this flag represent:
            <img className="flag" src={arr[0]["image"]} alt="https://via.placeholder.com/400" />
          </div>

          
          <div className="A" id = "A" onClick={()=>check(0)}>A. {arr[result[0]]["name"]}</div>
          <div className="B" id = "B" onClick={()=>check(1)}>B. {arr[result[1]]["name"]}</div>
          <div className="C" id = "C" onClick={()=>check(2)}>C. {arr[result[2]]["name"]}</div>
          <div className="D" id = "D" onClick={()=>check(3)}>D. {arr[result[3]]["name"]}</div>

            <div onClick={handleclick}>
                {children}
            </div> 

          <div className="score">Your score: {getCorrectClickCount()}/10</div>
          
        </div>
    );
}

export default Random_flag;

import React, {  useState } from "react";
import { last_score } from './correct_click_counter.js';

import './App.css'; // Ensure this path is correct
import RImage from './R.jpg';
import flagimg from './flags.jpg'

import flags from './flags.json';
import random_flag from './flag_q.jsx';
import city_img from './OIP.jpeg'

import country from './country-by-capital-city.json';

const App = () => {


    console.log(flags[1]['name'], flags.length);
    //console.log(Math.floor(Math.random()*2))
    const [start, setstart] = useState(true); // START BUTTON
    const [rules_board2, setrules_board2] = useState(false); //GAME RULES
    const [quiz, setquiz] = useState(false);
    const [next, setnext] = useState(false) // NEXT BUTTON

    const [n, setn] = useState(1);
    

    const click1 = () =>{ //START
 
        setrules_board2(true)
    }

    const click2 = async () =>{ // NEXT
        setrules_board2(false)
        setstart(false)
        setquiz(true)
        
    }
    
    const click3 = async () =>{

        if (next===true){

            setnext(false)
        }

        if (n>9){
            setquiz(false)
            setfinal(true)
        }

        else{
            setnext(true)
        }

        setn((n)=>n+1)

    }
    
    const [final, setfinal] = useState(false);

    const reset = () => {

        setstart(true);
        setfinal(false)
        setn(1)

    }


    // SECOND GAME

    const [cs, setcs] = useState(false);

    const click4 = () => {
        setcs(true)
    }

    const [quiz_cs, setquiz_cs] = useState(false);
    const [start_cs, setstart_cs] = useState(true)

    const click5 = () => { 
        setcs(false);
        setquiz_cs(true)
        setstart_cs(false)
    }

    const [start_game1, setstart_game1] = useState(false)

    const city_state = () => {
        setstart_game1(true);
        setquiz_cs(false);
    }

    const random_No = (list) =>{ //gives us list four random unique indexes of any list

        let x = list.length;
        let arr = [];
    
        while(arr.length<4){
    
            let random = Math.floor(Math.random()*x)
            if (!arr.includes(random)){
                arr.push(random)
                
            }
        }
        return arr;
    }

    
    const random_cs = () => { // this function will give us 4 random cities or states (dep.on which one we choose)

        let arr_1 = random_No(country); // 4 random numbers of len(country)
        let arr_2 = random_No([0,1,2,3]) // random arrangement of 4 numbers
        let arr_3 = [country[arr_1[arr_2[0]]],country[arr_1[arr_2[1]]],country[arr_1[arr_2[2]]],country[arr_1[arr_2[3]]]]; // four random countries and its capitals

        if (arr_3[0]["city"]==null || arr_3[1]["city"]==null || arr_3[2]["city"]==null || arr_3[3]["city"]==null){
            return random_cs()
        }

        else{
            return arr_3
        }

    }
    
    // This is our next question button that is curcial

    const [rand1, setrand1] = useState(random_cs()) // our random four countries/cities
    const [randq1, setrandq1] = useState(random_No([0,1,2,3])) // random permutation of [0,1,2,3]
    const[n1, setn1] = useState(1)

    const click6 = () => {
        
        setrand1(random_cs())
        setrandq1(random_No([0,1,2,3]))
        setn1(n1=>n1+1)
        let deleteDiv1 = document.querySelector("#correct")
        let deleteDiv2 = document.querySelector("#incorrect")
        let deleteDiv3 = document.querySelector("#correct1")

        if (deleteDiv1){
            deleteDiv1.remove()
        }

        if (deleteDiv2){
            deleteDiv2.remove()
        }

        if (deleteDiv3){
            deleteDiv3.remove()
        }

        
        document.querySelector("#A0").style.pointerEvents = 'auto';
        document.querySelector("#A1").style.pointerEvents = 'auto';
        document.querySelector("#A2").style.pointerEvents = 'auto';
        document.querySelector("#A3").style.pointerEvents = 'auto';
    }

    const [score_cs, setscore_cs] = useState(0);
    const handleClick = (i) => {
        let x;
        console.log(i)
        if (rand1[0]["country"]===rand1[randq1[i]]["country"]){ // answer is correct
            let correct = document.createElement("div")
            correct.id = "correct"
            correct.innerHTML = "Correct"
            let targetDiv = document.querySelector(`#A${i}`);
            targetDiv.appendChild(correct)
            setscore_cs(score_cs => score_cs+1)
        }

        else{                                              // answer is incorrect
            let incorrect = document.createElement("div")
            incorrect.id = "incorrect"
            incorrect.innerHTML = "Inorrect"
            let targetDiv = document.querySelector(`#A${i}`);
            targetDiv.appendChild(incorrect)

            for(let j = 0; j<4; j++){
                if (rand1[0]["country"]===rand1[randq1[j]]["country"]){
                     x = j;
                }
            }

            let correct1 = document.createElement("div")
            correct1.id = "correct1"
            correct1.innerHTML = "Correct"
            let targetDiv1 = document.querySelector(`#A${x}`);
            targetDiv1.appendChild(correct1)
        }

        document.querySelector("#A0").style.pointerEvents = 'none';
        document.querySelector("#A1").style.pointerEvents = 'none';
        document.querySelector("#A2").style.pointerEvents = 'none';
        document.querySelector("#A3").style.pointerEvents = 'none';
    }
    

    return (
        <div className="all">
            <div className="title">
                <h1>General Knowledge Quiz</h1>
            </div>
            <div
                className="introduction"
                style={{ backgroundImage: `url(${RImage})` }} /* Here is our background image our introduction text. */
            >
                <h1 className="title2">Welcome to the Ultimate Flag Quiz! </h1>
                <p>
                    Are you a geography buff or just love learning about different countries? Test your knowledge with our Flag Quiz! Challenge yourself to identify the flags of countries from all around the world. Whether you're a seasoned traveler or a curious learner, this quiz is designed for everyone.<br />
                    <br/>
                    How it works:<br />
                    <ul>
                    <li>You will be shown a series of flags from various countries.</li>
                    <li>For each flag, choose the correct country from the multiple-choice options.</li>
                    <li>Keep track of your score and see how well you know the world's flags!</li>
                    </ul>
                    <br />
                    Get ready to embark on a global journey through the colorful and diverse world of national flags. Can you achieve a perfect score? Start the quiz now and find out!<br />
                    <br />

                    Happy quizzing!
                </p>
            <br/>

            <div className="board1" id = 'board1' style={{backgroundImage: `url(${flagimg})`}}>

                {start && <button id="button" onClick={click1}>START</button>} {/* This is our button that starts the game */}

                {rules_board2 &&   /* if, else is not supported in jsx. Use logical or ternary operators instead. */
                (<div id="s">
                    <h2 id="rules"> Rules </h2>
                    <ol>
                        <li>Each question contains a flag</li>
                        <br/>
                        <li>There will be four different countries/answers to choose from</li>
                        <br/>
                        <li>You can choose only one of the four answers</li>
                        <br/>
                        <li>There will be ten questions in total.</li>
                    </ol>

                    <button id="s2" onClick={click2}>NEXT</button>
                </div>)
                }
                {quiz && 
                
                <div>   

                    {random_flag(flags, <button id = "nextq" onClick={()=>click3()}>NEXT Q.</button>, n)}

                </div>
                
                }

                {final &&

                <div className="final">
                    Your final score is {last_score()}/10
                    <br/>
                    <br/>
                    <button id="reset" onClick={reset}>RESET THE GAME</button>
                </div>

                }
            </div>
            <br/>
            <br/>
            <br/>

            <div>
                <div className="city-state" style={{backgroundImage: `url(${city_img})`}}>
                    {start_cs && (<button className="button_city" onClick={()=>click4()}> START </button>)}

                    {cs && 
                        (
                        <div className="board_cs">
                                <h1 id="game_rules">GAME RULES</h1>
                                <pre>
                                    This game is two in one. You choose which one to play.
                                    <br />
                                    <br />
                                    The first one is guessing the capital of a given
                                    <br />
                                    country, and the second one is the other way around,
                                    <br />
                                    you guess the country based on the given the capital.
                                    <br/>
                                    <br/>
                                    There will be 10 questions in total, and four possible
                                    <br/>
                                    answers.
                                </pre>
                                <button id="next_cs" onClick={()=>click5()}>NEXT</button>
                                
                        </div>
                        )
                    }

                    {quiz_cs &&

                        (
                            <div className="quizboard_cs">
                                <h1 id="question_1">Which game do you want to play?</h1>
                                <button id="state_guess" onClick={() => city_state()}>Guessing the state</button>
                                <button id="capital_guess">Guessing the capital</button>
                            </div>
                        )

                    }

                    {start_game1 &&
                    
                        (
                            <div className="capital">
                                <h1 id="question_2">{n1}. What is the capital of this country: {rand1[0]["country"]}</h1>
                                <div id="score_cs">Your score: {score_cs}/10</div>
                                <div id="A0" onClick={()=>handleClick(0)}> A. {rand1[randq1[0]]["city"]} </div> 
                                <div id="A1" onClick={()=>handleClick(1)}> B. {rand1[randq1[1]]["city"]} </div> 
                                <div id="A2" onClick={()=>handleClick(2)}> C. {rand1[randq1[2]]["city"]} </div>
                                <div id="A3" onClick={()=>handleClick(3)}> D. {rand1[randq1[3]]["city"]} </div>

                                <button id="nextq_cs" onClick={()=>click6()}>NEXT Q.</button>
                            </div>
                        )
                    }

                </div>
            </div>
            
            </div>
        </div>
    );
}

export default App;

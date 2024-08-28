import React, {memo} from "react";

const Question1CS =memo(({ n1, rand1, randq, q_state1, handleClick1, click6 }) =>{
    return (
      <div className="capital">
        <h1 id="question_2">
          {n1}. What is the capital of this country: {rand1[0]["country"]}
        </h1>
        <div id="A1" onClick={() => handleClick1()}>
          A. {rand1[randq[0]]["city"]}
        </div>
        {q_state1 === 0 && <div>This was correct</div>}
        {q_state1 === 1 && <div>Correct</div>}
        {q_state1 === 2 && <div>Incorrect</div>}
        <div id="B1">B. {rand1[randq[1]]["city"]}</div>
        <div id="C1">C. {rand1[randq[2]]["city"]}</div>
        <div id="D1">D. {rand1[randq[3]]["city"]}</div>
        <button id="nextq_cs" onClick={() => click6()}>NEXT Q.</button>
      </div>
    );
  })

  export default Question1CS;
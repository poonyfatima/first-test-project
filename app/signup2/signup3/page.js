
"use client"

import React, { useState } from 'react'

function page() {
    //     const [oddNumbers, setOddNumbers] = useState([])
    //     function handleChange(e) {
    //         const { name, value } = e.target;
    //         var getnumber = []
    //         for (let i = 1; i <= value; i = i + 2) {
    //             getnumber.push(i)
    //         }
    // window.open("https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS")
    //         setOddNumbers(getnumber)
    //     }
    const [currentQuestion, setcurrentQuestiont] = useState(0)
    const [currectAnser, setCurrectAnser] = useState([])
    const [wrongAnser, setwrongAnser] = useState([])
    const [jsQuestion1, setJsQuestion1] = useState({})
    const [jsQuestion2, setJsQuestion2] = useState({})
    const [jsQuestion3, setJsQuestion3] = useState({})
    const [jsQuestion4, setJsQuestion4] = useState({})
    const [jsQuestion5, setJsQuestion5] = useState({})
    var questionNumber = 0
    var currectAnsCount = 0;
    function question1() {
        setJsQuestion1({ title: 'Inside which HTML element do we put the JavaScript?', currectAns: "script", option1: "script", option2: "scripting", option3: "Javascript", option4: "js", })
        setcurrentQuestiont(1)
    }
    function question2() {
        setJsQuestion2({ title: 'The external JavaScript file must contain the script tag.', currectAns: "true", option1: "False", option2: "True" })
        setcurrentQuestiont(2)

    }
    function question3() {
        setJsQuestion3({ title: 'How do you create a function in JavaScript?', currectAns: "function myFunction()", option1: "function:myFunction()", option2: "function = myFunction()", option3: "function myFunction()" })
        setcurrentQuestiont(3)
    }
    function question4() {
        setJsQuestion4({ title: 'How do you call a function named "myFunction"?', currectAns: "myFunction()", option1: "myFunction()", option2: "call myFunction()", option3: "call function myFunction()", })
        setcurrentQuestiont(4)
    }
    function question5() {
        setJsQuestion5({ title: 'How to write an IF statement in JavaScript?', currectAns: "if (i == 5)", option1: "if (i == 5)", option2: "if i == 5 then", option3: "if i = 5", option4: "if i = 5 then", })
        setcurrentQuestiont(5)
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === 'question1') {
            if (value === jsQuestion1.currectAns && !currectAnser.includes(jsQuestion1.title + ": " + jsQuestion1.currectAns)) {
                setCurrectAnser([...currectAnser, jsQuestion1.title + ": " + jsQuestion1.currectAns])
                wrongAnser.splice(wrongAnser.indexOf(jsQuestion1.title + " Correct Ans is: " + jsQuestion1.currectAns), 1)
                currectAnsCount++
            }

            if (value !== jsQuestion1.currectAns && !wrongAnser.includes(jsQuestion1.title + " Correct Ans is: " + jsQuestion1.currectAns)) {
                currectAnser.splice(jsQuestion1.title + ": " + jsQuestion1.currectAns)
                setwrongAnser([...wrongAnser, jsQuestion1.title + " Correct Ans is: " + jsQuestion1.currectAns])

            }

        }
        if (name === 'question2') {
            if (value === jsQuestion2.currectAns && !currectAnser.includes(jsQuestion2.title + ": " + jsQuestion2.currectAns)) {
                setCurrectAnser([...currectAnser, jsQuestion2.title + ": " + jsQuestion2.currectAns])
                wrongAnser.splice(jsQuestion2.title + " Correct Ans is: " + jsQuestion2.currectAns)
                currectAnsCount++
            }
            if (value !== jsQuestion2.currectAns && !wrongAnser.includes(jsQuestion2.title + " Correct Ans is: " + jsQuestion2.currectAns)) {
                currectAnser.splice(jsQuestion2.title + ": " + jsQuestion2.currectAns)
                setwrongAnser([...wrongAnser, jsQuestion2.title + " Correct Ans is: " + jsQuestion2.currectAns])

            }
        }
        if (name === 'question3') {
            if (value === jsQuestion3.currectAns && !currectAnser.includes(jsQuestion3.title + ": " + jsQuestion3.currectAns)) {
                setCurrectAnser([...currectAnser, jsQuestion3.title + ": " + jsQuestion3.currectAns])
                wrongAnser.splice(jsQuestion3.title + " Correct Ans is: " + jsQuestion3.currectAns)
                currectAnsCount++
            }
            if (value !== jsQuestion3.currectAns && !wrongAnser.includes(jsQuestion3.title + " Correct Ans is: " + jsQuestion3.currectAns)) {
                currectAnser.splice(jsQuestion3.title + ": " + jsQuestion3.currectAns)
                setwrongAnser([...wrongAnser, jsQuestion3.title + " Correct Ans is: " + jsQuestion3.currectAns])

            }
        }
        if (name === 'question4') {
            if (value === jsQuestion4.currectAns && !currectAnser.includes(jsQuestion4.title + ": " + jsQuestion4.currectAns)) {
                setCurrectAnser([...currectAnser, jsQuestion4.title + ": " + jsQuestion4.currectAns])
                wrongAnser.splice(jsQuestion4.title + " Correct Ans is: " + jsQuestion4.currectAns)
                currectAnsCount++
            }
            if (value !== jsQuestion4.currectAns && !wrongAnser.includes(jsQuestion4.title + " Correct Ans is: " + jsQuestion4.currectAns)) {
                currectAnser.splice(jsQuestion4.title + ": " + jsQuestion4.currectAns)
                setwrongAnser([...wrongAnser, jsQuestion4.title + " Correct Ans is: " + jsQuestion4.currectAns])

            }
        }
        if (name === 'question5') {
            if (value === jsQuestion5.currectAns && !currectAnser.includes(jsQuestion5.title + ": " + jsQuestion5.currectAns)) {
                setCurrectAnser([...currectAnser, jsQuestion5.title + ": " + jsQuestion5.currectAns])
                wrongAnser.splice(jsQuestion5.title + " Correct Ans is: " + jsQuestion5.currectAns)
                currectAnsCount++
                if (value !== jsQuestion5.currectAns && !wrongAnser.includes(jsQuestion5.title + " Correct Ans is: " + jsQuestion5.currectAns)) {
                    currectAnser.splice(jsQuestion5.title + ": " + jsQuestion5.currectAns)
                    setwrongAnser([...wrongAnser, jsQuestion5.title + " Correct Ans is: " + jsQuestion5.currectAns])

                }
            }
        }
    }
    console.log("www " + wrongAnser, "rr " + currectAnser);
    return (
        <div>
            {/* <input type="number" name="usernumber" placeholder='Enter number' onChange={handleChange} />
            {oddNumbers.map((user, index) => (
                <ol key={index}>
                    <li>{user}</li>
                </ol>
            ))} */}
            <button onClick={() => {
                question1()
            }}>Start</button>
            <h1>JavaScript Quiz</h1>
            <h2>Question {questionNumber} of 25:</h2>

            {currentQuestion === 1 && <ul >
                <p>{jsQuestion1.title}</p>
                <li> <input type="radio" name='question1' value="script" onClick={handleChange} />{jsQuestion1.option1}</li>
                <br />
                <li><input type="radio" name='question1' value="scripting" onClick={handleChange} />{jsQuestion1.option2}</li>
                <br />
                <li><input type="radio" name='question1' value="Javascript" onClick={handleChange} />{jsQuestion1.option3}</li>
                <br />
                <li><input type="radio" name='question1' value="js" onClick={handleChange} />{jsQuestion1.option4}</li>
                <li>
                    <button onClick={() => {
                        setJsQuestion1({})
                        question2()
                    }}>Naxt</button>
                </li>
            </ul>}

            {currentQuestion === 2 && <ul>
                <p>{jsQuestion2.title}</p>
                <li><input type="radio" name='question2' value="false" onClick={handleChange} />{jsQuestion2.option1}</li>
                <br />
                <li><input type="radio" name='question2' value="true" onClick={handleChange} />{jsQuestion2.option2}</li>
                <li>
                    <button onClick={() => {
                        setJsQuestion2({})
                        question3(2)
                    }}>Naxt</button>
                </li>
            </ul>
            }

            {currentQuestion === 3 && <ul>
                <p>{jsQuestion3.title}</p>
                <li> <input type="radio" name='question3' value="function:myFunction()" onClick={handleChange} />{jsQuestion3.option1}</li>
                <br />
                <li><input type="radio" name='question3' value="function = myFunction()" onClick={handleChange} />{jsQuestion3.option2}</li>
                <br />
                <li><input type="radio" name='question3' value="function myFunction()" onClick={handleChange} />{jsQuestion3.option3}</li>
                <li>
                    <button onClick={() => {
                        setJsQuestion3({})
                        question4()
                    }}>Naxt</button>
                </li>
            </ul>
            }
            {currentQuestion === 4 && <ul>
                <p>{jsQuestion4.title}</p>
                <li> <input type="radio" name='question4' value="myFunction()" onClick={handleChange} />{jsQuestion4.option1}</li>
                <br />
                <li><input type="radio" name='question4' value="call myFunction()" onClick={handleChange} />{jsQuestion4.option2}</li>
                <br />
                <li><input type="radio" name='question4' value="call function myFunction()" onClick={handleChange} />{jsQuestion4.option3}</li>
                <li>
                    <button onClick={() => {
                        setJsQuestion4({})
                        question5()
                    }}>Naxt</button>
                </li>
            </ul>
            }
            {currentQuestion === 5 && <ul>
                <p>{jsQuestion5.title}</p>
                <li> <input type="radio" name='question5' value="if (i == 5)" onClick={handleChange} />{jsQuestion5.option1}</li>
                <br />
                <li><input type="radio" name='question5' value="if i == 5 then" onClick={handleChange} />{jsQuestion5.option2}</li>
                <br />
                <li><input type="radio" name='question5' value="if i = 5" onClick={handleChange} />{jsQuestion5.option3}</li>
                <br />
                <li><input type="radio" name='question5' value="if i = 5 then" onClick={handleChange} />{jsQuestion5.option4}</li>
                <li>
                    <button onClick={() => {
                        setJsQuestion5({})
                        setcurrentQuestiont("result")
                    }}>Naxt</button>
                </li>
            </ul>
            }
            {currentQuestion === "result" &&

                <>
                    <h4>Correct Answers</h4>
                    |<ul>
                        {currectAnser.map((ques, index) => <li key={index}>{ques}</li>)}
                    </ul>
                    <h4>Wrong Answers</h4>
                    |<ul>
                        {wrongAnser.map((ques, index) => <li key={index}>{ques}</li>)}


                    </ul>
                </>
            }
        </div>
    )
}


export default page
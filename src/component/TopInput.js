import React, {useState, useEffect} from 'react';


const TopInput = (props) => {

    function addition( a, b ){
        return a + b
    }
    
    function subtraction( a, b ){
        return a - b
    }
    function division( a, b ){
        if ( b !== 0) return a / b
    }
    function multiplicaiton( a, b ){
        return a * b
    }

    const [operation, setOperation] = useState("")
    const [answer, setAnswer] = useState("")
    const [firstOperand, setFirstOperand] = useState("")
    const [secondOperand, setSecondOperand] = useState("")
     
    useEffect(() => {
     document.title = "Complex Calculator using react"
    })
    

    const operationHandler = event =>{
        // console.log(event.target.textContent);
        let operation = event.target.textContent

        setOperation(operation)


        setAnswer( answer + operation )
        //setEnteredPlusSign(event.target.textContent)
    }
    
    const numberHandler = event =>{

        // console.log(event.target.textContent);
        let operand = parseInt(event.target.textContent)

        setAnswer( answer + operand )
        if ( firstOperand === "" ){
            setFirstOperand( operand )
        }else{
            setSecondOperand( operand )
        }

    }

    function formatAnswer(answer){
        setAnswer( `${firstOperand} ${operation} ${secondOperand} = ${answer}` )
    }

    const clearHandler = (event) =>{
        if (event.target.textContent === "C") {
            //this is what is showing in the output being cleared
            setAnswer("")
            setFirstOperand("") //this line of code will clear the input for the firstOperand
            setSecondOperand("") //this line of code will clear the input for the SecondOperand
            
        }

    }
    
    /* const calculate = event => {
        // console.log(event.target.textContent);
        if ( event.target.textContent === "=" ){
            switch(operation){
                case "+":
                    formatAnswer(addition(firstOperand, secondOperand));
                    break;
                case "-":
                    formatAnswer(subtraction(firstOperand, secondOperand));
                    break;
                case "/":
                    formatAnswer(division(firstOperand, secondOperand));
                    break;
                case "*":
                    formatAnswer(multiplicaiton(firstOperand, secondOperand));
                    break;
                default:
                    formatAnswer("")
            }
        }
    } */
    const calculate2 = event => {
        // console.log(event.target.textContent);
        if ( event.target.textContent === "=" ){
            
                if (operation === "+")
                {
                    formatAnswer(addition(firstOperand, secondOperand));
                }
                else if(operation === "-")
                    {
                        formatAnswer(subtraction(firstOperand, secondOperand));
                    }
                    else if(operation === "/"){
                    formatAnswer(division(firstOperand, secondOperand));
                    }
                    else if(operation === "*"){
                    formatAnswer(multiplicaiton(firstOperand, secondOperand));
                    }
                    else{formatAnswer("")}
        
                    
        }

    }    
    return(
        <div>
            <input  type="text" placeholder={answer}/><br/>
            <button onClick={operationHandler}>+</button>
            <button onClick={operationHandler}>-</button>
            <button onClick={operationHandler}>*</button>
            <button onClick={operationHandler}>/</button><br/>
            <button onClick={numberHandler}>7</button>
            <button onClick={numberHandler}>8</button>
            <button onClick={numberHandler}>9</button>
            <button onClick={numberHandler}>4</button><br/>
            <button onClick={numberHandler}>5</button>
            <button onClick={numberHandler}>6</button>
            <button onClick={numberHandler}>1</button>
            <button onClick={numberHandler}>2</button><br/>
            <button onClick={numberHandler}>3</button>
            <button onClick={numberHandler}>0</button>
            <button onClick={calculate2}>=</button>
            <button onClick={clearHandler}>C</button>
            
            <p>{answer}</p>
        </div>
       

    )

}

export default TopInput
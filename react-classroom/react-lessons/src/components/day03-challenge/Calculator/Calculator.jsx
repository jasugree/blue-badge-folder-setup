// 1. Create two separate useStates called number1 and number2. Initialize both to 0.
// 2. Create another useState of total that adds both number1 and number2.
// 3. Have two input fields. One that takes on the value of number1 and 
// and the other that takes on the value of number2. Both have a type of "number".
// 4. When the input value changes, have an onChange attribute target those values and
// sets number1 and number2 to those target values that the user put in.
// 5. Create a button. When clicked it will call a function of calculateTotal()
// that adds both numbers together. Then sets the total.
// 6. Display the useState of total in an h2 tag within the return.

// (Hint: 
// 1. You do not need to create a form. 
// 2. Remember setState.
// 3. With onChange do not forget the "event")


import React, { useState } from 'react';

const Calculator = (props) => { 
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [total, settotal] = useState("");


    let valueChange1 = (e)=> {
        setNumber1(e.target.value);
    }
    let valueChange2 = (f)=> {
        setNumber2(f.target.value);
    }



    function calculateTotal(){
        settotal(+number1 + +number2);
    }

        return (
          <div>
              <p>Calculator</p>
              <input type="number" name="number1" value={number1} onChange={valueChange1} />
              <input type="number" name="number2" value={number2} onChange={valueChange2} />
              <button onClick={calculateTotal}>ADD THE NUMBERS</button>
              <h2>{total}</h2>
          </div>
        );
}
 
export default Calculator;
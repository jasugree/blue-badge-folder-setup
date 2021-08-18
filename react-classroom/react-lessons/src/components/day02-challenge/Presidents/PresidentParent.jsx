import React from 'react';
import { presidentsArray } from './president.constant';
import PresidentChild from "./PresidentChild"

const PresidentParent = (props) => {
    
    function checkDeath(){
        const filteredArry = presidentsArray.filter((president) => president.passed == undefined)
        return (filteredArry.map(president =>(<PresidentChild firstName={president.first} lastName={president.last} />) ))
    }

  return(
    <div> 
        {checkDeath()}
    </div>
  )
}

export default PresidentParent;
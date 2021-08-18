import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = props => {
  
    const votes = [
        {name:"Abe Lincoln", votes:139033},
        {name:"Stephen Douglas", votes:115509},
    ]



  return(
    <div>
        <div>Hello from ParentComponent</div>
        {votes.map(vote=> <ChildComponent votes={vote} phrase={props.phrase}/>)}
    </div>
  )
}

export default ParentComponent;
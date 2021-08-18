const ChildComponent = props => {
    const {name, votes} = props.votes;
    return(
      <div>{name} had a total vote count of {votes}. {props.phrase}</div>  
    )
  }
  
  export default ChildComponent
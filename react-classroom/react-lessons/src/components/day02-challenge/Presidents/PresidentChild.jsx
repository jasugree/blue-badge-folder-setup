//President Child is responsible for displaying the information

//President Parent is respsonsible for using the map feeature and have it call the child 



//BRONZE: See if you can display all the presidents -- first and last name by using the .map method

//SILVER: Create a filtered Array so that the child will only display the presidents that are alive (Map and Filter)

//GOLD: Display all presidents that have died and display the age that they died 


  const PresidentChild = (props) => {
    
      return ( 
      <div>{props.firstName} {props.lastName}</div>
      
      );
  }
   
  export default PresidentChild;
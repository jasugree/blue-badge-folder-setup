import React, {useState, useEffect} from "react";
const UseEffectPractice = (props) => {
    const [animal, setAnimal] = useState('Alligator');
    const [isPredator, setIsPredator] = useState(undefined);


    const handleClick = () => {
        setAnimal("Monkey");
    }

    useEffect(() =>{
        console.log(animal);
    // This useEffect should only run when animal is changed
    // Use a switch to determine if the animal is a predator or not.
    // Example: Case is a Monkey you need to change the value of isPredator to false... Make a case for the alligator and change the value to isPredator to true.
    // Default case should be undefined.
    switch (animal) {
        case "Monkey": setIsPredator(false);
        break;
        case "Alligator": setIsPredator(true);
        break;
        default:
            setIsPredator(undefined);
      }

    }, [animal]);

    return (
        <div>
            <p>The current animal is a {animal} and isPredator is set to:{" "} {isPredator?.toString() ?? "undefined"}</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={()=>setIsPredator(!isPredator)}>Chane IsPredator</button> */}
        </div>
     );
}
 
export default UseEffectPractice;
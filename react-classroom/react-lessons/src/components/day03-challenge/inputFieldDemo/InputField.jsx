import React, { useState } from 'react';

const InputField = (props) => {
    const [username, setUsername] = useState("");


        function handleChange(e) {
            console.log(e.target.value);

            setUsername(e.target.value);        

        }
        
        return (
          <input name="firstName" value={username} onChange={handleChange} />
        );
}
 
export default InputField;
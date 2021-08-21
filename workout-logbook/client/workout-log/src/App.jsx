import React, { useEffect } from 'react'
import Sitebar from './home/Navbar';

function App() {

  useEffect(() => {
    document.title = "Workout Log Client"
  }, [])

  return (
    <div>
      <Sitebar />
    </div>
  );
}

export default App;

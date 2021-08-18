import './App.css';
import ParentComponent from './components/day02-challenge/Votes/ParentComponent';
import PresidentParent from './components/day02-challenge/Presidents/PresidentParent';
import ClickCounter from './components/day02-challenge/clickCounter/ClickCounter';


function App() {
  const welcomeName = 'Jake';

  const phrase = "I wasn't alive then.";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      {/* <ParentComponent phrase ={phrase}/>
      <hr />
      <PresidentParent/> */}
      <ClickCounter />
    </div>
  );
}



export default App;

import './App.css';
import Header from './components/day01-challenge/Header'
import AboutMe from './components/day01-challenge/AboutMe'
import StudentInformation from './components/day01-challenge/StudentInformation'
import Footer from './components/day01-challenge/Footer'

function App() {
  const welcomeName = 'Jake'
  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      <h2>We just modified our root App component</h2>
      <p>This is a test</p>
      {/* This is an example of a comment */}
      <Header/>
      <h3>Create the following</h3>
      <ul>
        <li>Create a new component in the day01-challenges folder called AboutMe</li>
        <li>h1 tag with name</li>
        <li>p tage with the following, "I grew up in city/state"</li>
        <li>have an unordered list with 3 places you have visited</li>
      </ul>
      <p>Export the component, and import the new component into the App.jsx file</p>
      <hr />
      <h1>Bonus</h1>
      <p>Make the h1 tag (your name) be red in color using inline styling</p>
      <p>Make the li's no bullets - inline styling</p>
      <hr />
      <AboutMe/>
      <hr />
      <StudentInformation studentName = "Veronica" studentGrade ="A" classSubject ="Magical Mending"/>
      <StudentInformation studentName = "Hendrick" studentGrade ="C" classSubject ="Agility"/>
      <StudentInformation studentName = "Sylvando" studentGrade ="B" classSubject ="Charisma"/>
      <hr />
      <Footer/>
    </div>
  );
}



export default App;

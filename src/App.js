// import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

function App() {
  // const details = {
  //   titles: ["The FellowShip of the Ring", "The Two Towers", "The Return of the King"],
  //   runTime: ["2 hrs 58 min", "2 hrs 59 min", "3 hrs 21 min"]
  // }
  const LOTR1 = {
    title: "The FellowShip of the Ring",
    hours: 2,
    minutes: 58
  }
  return (
    <div className="App">
      <Movie 
        title={LOTR1.title}
        hours={LOTR1.hours}
        minutes={LOTR1.minutes}
      />
    </div>
  );
}

export default App;

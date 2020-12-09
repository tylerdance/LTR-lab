// import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

function App() {
  const LOTR1 = {
    title: "The FellowShip of the Ring",
    hours: 2,
    minutes: 58
  }
  const LOTR2 = {
    title: "The Two Towers",
    hours: 2,
    minutes: 59
  }
  const LOTR3 = {
    title: "The Return of the King",
    hours: 3,
    minutes: 21
  }
  return (
    <div className="App">
      <Movie 
        title={LOTR1.title}
        hours={LOTR1.hours}
        minutes={LOTR1.minutes}
      />
      <Movie 
        title={LOTR2.title}
        hours={LOTR2.hours}
        minutes={LOTR2.minutes}
      />
      <Movie 
        title={LOTR3.title}
        hours={LOTR3.hours}
        minutes={LOTR3.minutes}
      />
    </div>
  );
}

export default App;

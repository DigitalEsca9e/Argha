import logo from './logo.svg';
import './App.css';
import {MainPage, ProjectPage} from './Pages';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1>My site</h1>
        <ul>
          <li>UI/UX</li>
          <li>React Apps</li>
          <li>Games</li>
          <li>Videography</li>
        </ul>
      </header>

      <div className="container">
        <MainPage/>
      </div>
    </div>
  );
}

export default App;

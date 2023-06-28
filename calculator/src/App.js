import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import { HomePage } from './Components/HomePage';
import { CalculatorPage } from './Components/CalculatorPage';
import { HomePage } from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        <Route path="/calculator" element={<CalculatorPage/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;

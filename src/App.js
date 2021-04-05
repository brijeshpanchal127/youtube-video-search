
import './App.css';
import { Input } from './components/Input';
import Refine from './components/Refine';
import Results from './components/Results';


function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Youtube Video Search</h1>
      <Input />
      <Refine />
      <Results />
    </div>
  );
}

export default App;

import './App.css';
import Codes from './Components/Codes/Codes.jsx';
import UpdateCodes from './Components/UpdateCodes/UpdateCodes';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <UpdateCodes />
        <Codes />
      </div>
    </div>
  );
}

export default App;
import './App.css';
import Codes from './Components/Codes/Codes.jsx';
import UpdateCode from './Components/UpdateCode/UpdateCode.jsx';
import CreateCode from './Components/CreateCode/CreateCode.jsx';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div>
          <UpdateCode />
          <CreateCode />
        </div>
        <Codes />
      </div>
    </div>
  );
}

export default App;
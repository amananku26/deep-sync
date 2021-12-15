import logo from './logo.svg';
import './App.css';
import Getdata from './components/GetData';
import Craouselss from './components/Craouselss';

function App() {
  return (
    <div className="App">
      <Craouselss/>
      <br/>
      <hr/>
      <br/>
       <h5>Table with pagination and CSV download button ↓</h5>
      <hr/>
      <br/>
      <Getdata/>
    </div>
  );
}

export default App;

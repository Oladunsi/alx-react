import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App(){
  return (
    <div class="App">

      {/* header section */}
      <div class="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {/* body section */}
      <div class='App-body'>
        <p>Login to access the full dashboard</p>
      </div>

      {/* footer section*/}
      <div class='App-footer'>
        <p> {getFullYear} - {getFooterCopy} </p>
      </div>      
    </div>
  );
}

export default App;

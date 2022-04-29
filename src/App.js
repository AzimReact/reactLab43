import './App.css';
import {Button} from './components/button/Button';

function App() {
  return (
    <div className="App">
      Hello world

      <div>
        <Button color={'red'} name={'first'}></Button>
          <span>Button first!</span>

        <Button name={'second'}></Button>
        <Button name={'third'}></Button>
       
        <Button></Button>
      </div>
    </div>  
  );
}

export default App;

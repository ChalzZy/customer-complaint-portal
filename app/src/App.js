import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <h1>React Material UI</h1>
      <button>Normal Button</button>
      <Button>MUI Button</Button>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

export default App;

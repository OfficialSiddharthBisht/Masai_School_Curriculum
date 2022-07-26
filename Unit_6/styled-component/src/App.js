import './App.css';
import Button from './Components/Button'

function App() {
  // Primary -- Default -- Dashed -- Text -- Link
  return (
    <div className="App">
      <Button primary>PRIMARY BUTTON</Button>
      <Button default>DEFAULT BUTTON</Button>
      <Button dashed>DASHED BUTTON</Button>
      <Button text>TEXT BUTTON</Button>
      <Button link>LINK BUTTON</Button>
    </div>
  );
}

export default App;

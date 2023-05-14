//import logo from './logo.svg';
//import './App.css';
import FunctionalComponent from "./Components/FuntionalComp";
import {ClassComponent1} from "./Components/ClassComp";
import { Click } from "./Components/click";
import { Counter } from "./Components/Counter";
function App() {
  return (
    <div>
      <div>
        <h1>Bloody Marry!</h1>
        <h1>This Video is about Components!</h1>
      </div>
      <FunctionalComponent></FunctionalComponent>
      {/*<ClassComponent/>*/}
      <ClassComponent1/>
      <Click></Click>
      <Counter></Counter>
    </div>
    );
}

export default App;

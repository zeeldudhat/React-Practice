import logo from "./logo.svg";
import "./App.css";
import LifeCycle from "./component/LifeCycle"; 
import { Pluse, Minus } from "./component/Context";
import Navigation from './component/Routes'

function App() {
  return (
    <>
    {/* <LifeCycle stage="00"/> */}
    <Navigation />
    </>
  );
}

export default App;

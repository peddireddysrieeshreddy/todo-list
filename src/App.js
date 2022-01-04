import logo from "./logo.svg";
import "./App.css";
import { List } from "./components/List";

function App() {
  return (
    <>
      <div className="header">
        <h1>todo list</h1>
      </div>
      <List />
    </>
  );
}

export default App;

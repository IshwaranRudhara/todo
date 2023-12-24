import "./App.css";
import List from "./component/List";

function App() {
  let arr = [1, 2, 3];
  return (
    <div className="App">
      <h1> hello, wolrd! </h1>

      {arr.map((num) => (
        <List id={num} />
      ))}
    </div>
  );
}
export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header2 from "./Nav/Header2";
import { Container } from "@material-ui/core";
import Routers from "./Routers";

function App() {
  return (
    <div className="App">
      <Header2 />
      <hr />
      <Routers />
      <hr />
    </div>
  );
}

export default App;

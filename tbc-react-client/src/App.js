import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routers from "./Routers";
import Footer from "./Nav/Footer";

function App() {
  return (
    <div className="App">
      <Routers />
      <Footer />
    </div>
  );
}

export default App;

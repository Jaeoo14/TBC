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
      {/* 라우터 만들었는데 제대로 했는 지는 모르겠네요 */}
      {/* 헤더 푸터는 라우터 밖에 빼고 나머지는 라우터에서 거는걸로..? */}
      <Routers />
      <hr />
    </div>
  );
}

export default App;

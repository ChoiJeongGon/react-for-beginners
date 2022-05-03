import React from "react";
// npm i react-router-dom@5.3.0 => 설치
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Detail from "./routes/Detail"
import Home from "./routes/Home";
function App() {
  return (
    // Router (원하는 만큼 한번에 렌더링 하기 위해서)
    // Switch (한번에 하나의 Route만 렌더링 하기 위해서)
    // Route (path="/" url 컴포넌트를 보여주기 위해서) 
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello!!!!</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

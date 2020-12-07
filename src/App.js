
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';  // 
import Home from './components/Home';

// 웹의 서브페이지 라우팅을 하기위한 js파일이다.이곳에서 path 값으로 서브페이지와 메인페이지를 분리한다.
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="About" component={About} exact/>
      </Switch>
    </Router>
  );
}

export default App;


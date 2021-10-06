import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/Header'
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage}/>
        </Switch>
    </div>
  );
}

export default App;

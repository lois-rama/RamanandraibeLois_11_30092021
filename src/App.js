import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/Header'
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage}/>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;

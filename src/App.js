import './App.css';
import Homepage from './pages/Homepage';
import Logement from './pages/Logement';
import About from './pages/About';
import Header from './components/Header'
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/Logement/:id" component={Logement}/>
          <Route path="/APropos" component={About}/>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;

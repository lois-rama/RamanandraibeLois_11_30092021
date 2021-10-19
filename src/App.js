import './App.css';
import Homepage from './pages/Homepage';
import Logement from './pages/Logement';
import Error404 from './pages/404error';
import About from './pages/About';
import Header from './components/Header'
import Footer from './components/Footer';
import {Route, Switch, Redirect} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/Logement/:id" component={Logement}/>
          <Route path="/APropos" component={About}/>
          <Route path="/404" component={Error404}/>
          <Redirect to="/404" />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;

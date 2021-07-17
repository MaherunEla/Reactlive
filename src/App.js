
import './App.css';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import {Switch,Route,} from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';



function App() {
  return (
    <div className="App">
    
     
        <Header/>
       
      <Switch>
        
         <Route path="/About"><About /></Route>
         <Route path="/Contact"> <Contact /></Route>
         <Route path="/"><Home /></Route>
       </Switch>
       <Footer/>
     
    </div>
  );
}

export default App;

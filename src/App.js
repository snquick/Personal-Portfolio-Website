import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
    </Router>
  );
}

export default App;
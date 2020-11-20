import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Section2 from './components/Section2';
import Features from './components/Section3-Features';
import { 
  featureOne, 
  featureTwo, 
  featureThree, 
  featureFour, 
  featureFive } from "./components/Section3-Features/features";
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Landing/>
      <Section2/>
      <Features {...featureOne}/>
      <Features {...featureTwo} />
      <Features {...featureThree}/>
      <Features {...featureFour}/>
      <Features {...featureFive}/>
      <Footer/>
    </div>
  );
}

export default App;

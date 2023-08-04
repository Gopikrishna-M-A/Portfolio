import './App.css';
import About from './components/About/About';
import BackgroundCircles from './components/Background/Background';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <BackgroundCircles/>
      <About/>
      <Contact/>
    </div>
  );
};


export default App;

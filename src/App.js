import './App.css';
import About from './components/About/About';
import BackgroundCircles from './components/Background/Background';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <BackgroundCircles/>
      <About/>
    </div>
  );
};


export default App;

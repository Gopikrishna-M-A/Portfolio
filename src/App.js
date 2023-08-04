import './App.css';
import About from './components/About/About';
import BackgroundCircles from './components/Background/Background';

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <BackgroundCircles/>
      <About/>
    </div>
  );
};


export default App;

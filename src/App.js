
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  return (
    <div className='app'>
      <Header />
      <Intro />
      <Dashboard/>
    </div>
  );
}

export default App;

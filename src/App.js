import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App mx-4 sm:mx-20 lg:mx-40 sm:h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

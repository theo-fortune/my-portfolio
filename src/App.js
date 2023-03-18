import './App.css';
import { Header, Home, About } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;

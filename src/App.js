import './App.css';
import { Header, Home, About, Skills } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;

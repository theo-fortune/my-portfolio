import './App.css';
import { Header, Home, About, Skills, Services } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import {
  Header,
  Home,
  About,
  Skills,
  Services,
  Qualification,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </div>
  );
}

export default App;

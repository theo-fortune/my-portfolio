import "./App.css";
import {
  Header,
  Home,
  About,
  Skills,
  Services,
  Qualification,
  Testimonials,
  Contact
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
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;

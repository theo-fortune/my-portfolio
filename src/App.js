import "./App.css";
import {
  Header,
  Home,
  About,
  Skills,
  Services,
  Qualification,
  Work,
  Testimonials,
  Contact,
  Footer,
  Top
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
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Top />
    </div>
  );
}

export default App;

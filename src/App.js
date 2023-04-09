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
import { Helmet } from "react-helmet";
import { Face } from "./assets";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:image" content={Face} />
      </Helmet>
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

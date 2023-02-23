import Logo from "./assets/Logo2.png";
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Work from "./component/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

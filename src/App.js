import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education/>
      <Skills/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

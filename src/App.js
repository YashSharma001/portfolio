import { Toaster } from "react-hot-toast";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Footer from "./Components/Footer";



function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;

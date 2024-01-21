import { Toaster } from "react-hot-toast";
import Contact from "./Components/Contact";
import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";



function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return ratio < 2 ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Projects />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : (
    <em id="customMessage">Please Change the ratio to View!</em>
  );
}

export default App;

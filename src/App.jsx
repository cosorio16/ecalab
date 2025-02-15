import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 250,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      {/* <About /> */}
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

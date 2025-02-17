import { useEffect } from "react";
import Header from "./components/ui/Header";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Contact from "./components/home/Contact";
import Footer from "./components/ui/Footer";
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
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

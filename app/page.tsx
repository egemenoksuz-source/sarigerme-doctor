import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Emergency from "./components/Emergency";
import WhyChooseUs from "./components/WhyChooseUs";
import Coverage from "./components/Coverage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Emergency />
      <WhyChooseUs />
      <Coverage />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
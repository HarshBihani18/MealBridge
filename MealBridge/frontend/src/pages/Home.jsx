import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import SDGSection from "../components/SDGSection";
import Footer from "../components/Footer";


function Home() {
  return (
    <div
  className="min-h-screen"
  style={{
    backgroundColor: "var(--bg-page)",
    color: "var(--text-dark)",
  }}
>
    <Hero />
     
      <HowItWorks />
      <SDGSection />
      <Footer />
    </div>
  );
}

export default Home;
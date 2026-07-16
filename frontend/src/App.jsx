import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PromptInput from "./components/PromptInput/PromptInput";
import Features from "./components/Features/Features";
import Templates from "./components/Templates/Templates";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PromptInput />
      <Features />
      <Templates />
      <Footer />
    </>
  );
}

export default App;
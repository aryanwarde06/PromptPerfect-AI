import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PromptInput from "../components/PromptInput";
import PromptOutput from "../components/PromptOutput";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PromptInput />
      <PromptOutput />
      <Footer />
    </>
  );
}

export default Home;
import Hero from "@/app/components/hero";
import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <div className="">
     <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
import Hero from "../../components/Hero";
import About from "../../components/About";
import Service from "../../components/Service";
import Subscribtion from "../../components/Subscribtion";
import Banner from "../../components/Banner";
export default function Home() {
  return (
    <div className="bg-black">
      <Hero/>
      <About/>
      <Service/>
      <Subscribtion/>
      <Banner/>
    </div>
  );
}

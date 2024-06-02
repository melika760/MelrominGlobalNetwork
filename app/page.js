import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Aboutus from "./_components/Aboutus";
import Getstarted from "./_components/Getstarted";
import Footer from "./_components/Footer";
export default function Home() {
  return (
   <div className="md:px-20">
    <Header/>
    <Hero/>
    <Aboutus/>
    <Getstarted/>
    <Footer/>
   </div>
  );
}

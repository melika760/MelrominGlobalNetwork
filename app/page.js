import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Aboutus from "./_components/Aboutus";
import Getstarted from "./_components/Getstarted";
import Footer from "./_components/Footer";
import Icons from "./_components/Icons";
import Works from "./_components/works";
export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Aboutus/>
    {/* <Icons/> */}
    <Works/>
    <Getstarted/>
   
    <Footer/>
   </div>
  );
}

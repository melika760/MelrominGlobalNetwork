
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Aboutus from "./_components/Aboutus";
import Getstarted from "./_components/Getstarted";
import Footer from "./_components/Footer";
import Works from "./_components/Works";
import NewWork from "./_components/NewWork";

export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Works/>
    {/* <Aboutus/> */}
   <NewWork/>
    <Getstarted/>
   
    <Footer/>
   </div>
  );
}

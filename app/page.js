
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Aboutus from "./_components/Aboutus";
import Getstarted from "./_components/Getstarted";
import Footer from "./_components/Footer";
import Works from "./_components/Works";
import NewWork from "./_components/NewWork";
export const metadata = {
  title: " Melromin Global Network",
  description: "Learn more about Melromin Global Network, our mission to innovate freight forwarding, and how we connect businesses with top-tier logistics providers worldwide.",
  alternates: {
    canonical: "https://melromin.co.uk/about",
  },
};
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

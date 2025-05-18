
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Aboutus from "./_components/Aboutus";
import Getstarted from "./_components/Getstarted";
import Footer from "./_components/Footer";
import Works from "./_components/Works";
import NewWork from "./_components/NewWork";
export const metadata = {
  title: "Melromin Global Network | Freight Forwarding Reimagined",
  description:
    "Melromin is the world’s first platform to connect freight forwarders and the supply chain in a secure, transparent, and high-benefit digital environment. Reduce costs, boost efficiency, and access global logistics services with financial protection.",
  alternates: {
    canonical: "https://melromin.co.uk/",
  },
  openGraph: {
    title: "Melromin Global Network | Freight Forwarding Reimagined",
    description:
      "Connecting global freight forwarders and logistics companies through a neutral, secure, and benefit-rich digital network.",
    url: "https://melromin.co.uk/",
    siteName: "Melromin",
    images: [
      {
        url: "https://melromin.co.uk/_next/image?url=%2Flogo.png&w=256&q=75", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Melromin Global Network",
      },
    ],
    locale: "en_GB",
    type: "website",
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

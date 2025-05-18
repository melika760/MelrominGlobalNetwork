import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import NewServices from '@/app/_components/NewServices'
import React from 'react'
export const metadata = {
  title: "Freight Services | Melromin for Suppliers & Forwarders",
  description:
    "Discover how Melromin connects suppliers and forwarders to reduce logistics costs, expand market reach, and improve customer satisfaction. Join our global freight forwarding network today.",
  alternates: {
    canonical: "https://melromin.co.uk/services",
  },
  openGraph: {
    title: "Freight Services | Melromin for Suppliers & Forwarders",
    description:
      "Melromin helps suppliers and freight forwarders cut costs, improve visibility, and scale globally through one seamless logistics platform.",
    url: "https://melromin.co.uk/services",
    siteName: "Melromin",
    locale: "en_GB",
    type: "website",
  },
};

const Services = () => {
  return (
    <> <Header/>
      <NewServices/>
      <Footer/>
    </>  
  )
}

export default Services

import AboutPage from '@/app/_components/AboutPage'
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import React from 'react'
export const metadata = {
  title: "About Us | Melromin Global Network",
  description: "Learn more about Melromin Global Network, our mission to innovate freight forwarding, and how we connect businesses with top-tier logistics providers worldwide.",
  alternates: {
    canonical: "https://melromin.co.uk/about",
  },
};
const About = () => {
  return (
    <>
      <Header/>
      <AboutPage/>
      <Footer/>
    </>
  )
}

export default About

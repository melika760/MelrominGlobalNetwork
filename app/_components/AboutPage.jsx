import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Eye, Goal, MessageCircleHeart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className=" text-gray-800">
      {/* Hero Section */}
  <section
        className="relative h-[600px] bg-center bg-cover bg-[url(/heros.jpg)]"
        
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90" />
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl max-sm:text-4xl font-extrabold text-white mb-4">
            About Melromin Global Network
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 max-w-2xl mb-8">
            We connect businesses with trusted freight forwarders, crafting seamless global logistics with transparency and reliability.
          </p>
          <Link href="/sign-up" passHref className='mb-7'>
            <Button  className="bg-primary hover:bg-white hover:text-primary text-white w-full sm:w-[160px] rounded-md transition-colors duration-500 text-md">
              Get Started
            </Button>
          </Link>
        </div>
        {/* Decorative Bottom Curve */}
        <svg
          className="absolute bottom-0 left-0 w-full text-white "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 280"
        >
          <path
            fill="currentColor"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,218.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </section>

      {/* Our Story */}
            <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary">Our Journey</h2>
            <p className="text-lg leading-relaxed">
              Established in London in 2023, Melromin was driven to eliminate
              inefficiencies in international shipping. We unite sellers and
              freight experts on one secure platform, reducing intermediaries and
              ensuring timely, cost-effective deliveries.
            </p>
            <p className="text-lg leading-relaxed">
              Today, our suite ranges from cargo insurance to quality inspections,
              all backed by market-leading protection. Our non-exclusive network
              fosters growth and trust, globally.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: 'Mission',
                desc: 'Provide a transparent, streamlined marketplace for direct connections between suppliers and forwarders.',
                icon: Goal ,
              },
              {
                title: 'Vision',
                desc: 'A world where shipments are tracked, insured, and delivered seamlessly—redefining trust in logistics.',
                icon: Eye,
              },
              {
                title: 'Values',
                desc: null,
                icon: MessageCircleHeart,
                list: [
                  'Transparency & Trust',
                  'Innovation & Efficiency',
                  'Customer-Centric Service',
                  'Global Collaboration',
                ],
              },
            ].map((item) => (
              <Card
                key={item.title}
                asChild
                className="flex flex-col items-center text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent>
                  <div className=" mb-4 flex justify-center items-center">
               <item.icon size={34}/>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  {item.desc && <p className="text-gray-600">{item.desc}</p>}
                  {item.list && (
                    <ul className="mt-4 text-gray-600  space-y-1 ">
                      {item.list.map((val) => (
                        <li key={val}>{val}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12 max-sm:text-xl">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8">
            {[
              { name: 'Rostam Cawoosi Zainabadi', role: 'Co-Founder & CEO', img: '/rostam.png' },
              { name: 'Melika Tafazoli', role: 'Co-Founder & CTO', img: '/melika.png' },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

        <section className="py-20 text-center text-white bg-gradient-to-r from-purple-900 to-purple-500">
                <h2  className="text-3xl font-semibold mb-8">
                    Ready to Simplify Logistics?
                </h2>
                <p className="text-lg mb-6">
                Join Melromin Global Network now and unlock efficient, reliable freight
            solutions worldwide.
                </p>
                <Link href={'/sign-up'}>
                <Button className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-3 px-6 rounded-md transition-colors duration-300 text-lg">
                          Get Started
                        </Button>
                </Link>
               
            </section>
    </main>
  );
}

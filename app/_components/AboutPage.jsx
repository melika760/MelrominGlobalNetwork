import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Goal } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-primary mb-4 transition-opacity duration-700">
            About Melromin Global Network
          </h1>
          <p className="text-xl sm:text-2xl max-w-2xl mx-auto transition-opacity duration-700 delay-200">
            Streamlining global logistics through a transparent, efficient marketplace—
            empowering businesses and forwarders to connect with confidence.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/hero-pattern.svg"
            alt="pattern"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
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
                icon: Goal,
              },
              {
                title: 'Values',
                desc: null,
                icon: Goal,
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
                    <ul className="mt-4 text-gray-600 list-disc list-inside space-y-1">
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
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Rostam Tavakoli', role: 'Co-Founder & CEO', img: '/team/rostam.jpg' },
              { name: 'Melika Tafazoli', role: 'Co-Founder & CTO', img: '/team/melika.jpg' },
              { name: 'Jane Doe', role: 'Head of Operations', img: '/team/jane.jpg' },
              { name: 'John Smith', role: 'Head of Partnerships', img: '/team/john.jpg' },
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
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Simplify Logistics?</h2>
          <p className="mb-6 text-lg max-w-xl mx-auto">
            Join Melromin Global Network now and unlock efficient, reliable freight
            solutions worldwide.
          </p>
          <Link href="/sign-up" passHref>
            <Button size="lg" className="hover:scale-105 transition-transform duration-300">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

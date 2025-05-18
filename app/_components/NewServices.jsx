import React from 'react';
import { Eye, HandCoins, Handshake, TrendingUp } from "lucide-react";
import Link from 'next/link';
const NewServices = () => {
     const Suppliers=[{title:"Reduce costs",icon:HandCoins,des:"Streamline your processes to cut unnecessary costs and increase operational efficiency."},
        {title:"Expand your market reach",icon:Handshake,des:'Connect with more partners and extend your global market presence through direct access to forwarders.'},
        {title:"Boost visibility within the platform",icon:Eye,des:'Increase your presence within the platform and get discovered by potential partners globally.'},{title:"Improve customer satisfaction through efficient services.",icon:TrendingUp,des:'Offer efficient services and better communication to build stronger relationships with your clients.'}]
  
    const Forwarders=[{title:"Lower operational costs",icon:HandCoins,des:'Optimize your logistics processes to cut down on unnecessary operational expenses'},
        {title:"Expand your market ",icon:Handshake,des:'Gain access to a wider client base by connecting with more suppliers offering diverse products.'},
        {title:"Increase visibility",icon:Eye,des:'Stand out within the network and showcase your expertise in providing efficient logistics solutions.'},{title:"Enhance customer satisfaction",icon:TrendingUp,des:'Deliver more reliable tracking and communication to keep your clients happy and loyal.'}]
 return (
        <div className="pt-9 bg-gray-50 ">
            {/* Header */}
             <section
        className="relative h-[600px] bg-center bg-cover bg-[url(/heros.jpg)]"
        
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90" />
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl  font-extrabold text-white mb-4 max-sm:text-4xl">
              How Our Platform Benefits Suppliers and Forwarders
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 max-w-2xl mb-8">
           Discover how our platform connects suppliers and forwarders for more efficient logistics, lower costs,
                    and expanded business opportunities.
          </p>
       
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



            {/* For Suppliers */}
            <section className="bg-white py-20">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                        For Suppliers
                    </h2>
                    <p className="text-lg text-gray-800 mb-8">
                        Our platform helps suppliers lower costs, expand market reach, and improve customer satisfaction
                        through streamlined logistics and reliable communication.
                    </p>
                          
                      
                     
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                         {Suppliers.map((item)=>(
                             <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center justify-between h-full">
                            <div className="flex flex-col justify-center mb-6 items-center">
                                <item.icon className='text-center mb-4 text-primary' size={32}  strokeWidth={1.5}/>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 text-center">{item.des}</p>
                      </div>
                        </div>
                        

          ))} </div>
                       
                   

                    <div className="mt-12">
                        <Link href={'/sign-up'}>
                         <button  className="bg-primary hover:bg-purple-100 hover:text-primary border-primary border-2 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 text-lg">
                            Get Started as a Supplier
                        </button></Link>
                    </div>
                </div>
            </section>

            {/* For Forwarders */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                        For Forwarders
                    </h2>
                    <p className="text-lg text-gray-800 mb-8">
                        Forwarders can lower operational costs, expand their reach, and boost visibility by connecting with
                        reliable suppliers globally.
                    </p>

                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                         {Forwarders.map((item)=>(
                             <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center justify-between h-full">
                            <div className="flex flex-col justify-center mb-6 items-center">
                                <item.icon className='text-center mb-4 text-primary' size={32}  strokeWidth={1.5}/>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 text-center">{item.des}</p>
                      </div>
                        </div>
                        

          ))} </div>

                    <div className="mt-12">
                        <Link href={'/sign-up'}>
                         <button  className="bg-primary hover:bg-purple-100 hover:text-primary border-primary border-2 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 text-lg">
                            Get Started as a Forwarder
                        </button></Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 text-center text-white bg-gradient-to-r from-purple-900 to-purple-500">
                <h2  className="text-3xl font-semibold mb-8">
                    Ready to Join?
                </h2>
                <p className="text-lg mb-6">
                    Sign up today to start benefiting from seamless logistics and connect with global partners.
                </p>
                <button className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-3 px-6 rounded-md transition-colors duration-300 text-lg">
                    Join Now
                </button>
            </section>
        </div>
    );
};

export default NewServices;

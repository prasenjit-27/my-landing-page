import React, { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';

/* -----------------------------------------
  1. NAVBAR COMPONENT
  -----------------------------------------
*/
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">TechNova</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition">Testimonials</a>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">Features</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">About</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">Testimonials</a>
            <div className="pt-4">
              <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

/* -----------------------------------------
  2. HERO COMPONENT
  -----------------------------------------
*/
const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Scale your business <br />
            <span className="text-indigo-600">without limits.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            The all-in-one platform designed to help startups grow faster, 
            manage efficiency, and track success in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
              Start Free Trial <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="flex items-center justify-center bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition">
              View Demo
            </button>
          </div>
        </div>

        {/* Hero Image / Graphic */}
        <div className="md:w-1/2 flex justify-center">
           <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Dashboard Preview" 
            className="rounded-2xl shadow-2xl border border-gray-200 transform hover:scale-105 transition duration-500"
           />
        </div>
      </div>
    </section>
  );
};

/* -----------------------------------------
  3. FEATURES COMPONENT
  -----------------------------------------
*/
const Features = () => {
  const features = [
    {
      icon: <Zap className="text-indigo-600" size={32} />,
      title: "Lightning Fast",
      desc: "Optimized for speed to ensure your workflow never lags behind your ideas."
    },
    {
      icon: <Shield className="text-indigo-600" size={32} />,
      title: "Bank-Grade Security",
      desc: "Your data is encrypted and protected with industry-leading security protocols."
    },
    {
      icon: <Globe className="text-indigo-600" size={32} />,
      title: "Global Reach",
      desc: "Deploy your solutions anywhere in the world with our distributed CDN."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------------------
  4. ABOUT / VALUE PROP COMPONENT
  -----------------------------------------
*/
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Why choose TechNova?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe in empowering teams to achieve more with less. Our platform isn't just a tool; it's a new way of working that brings clarity to chaos.
            </p>
            
            <ul className="space-y-4">
              {[
                "Real-time collaboration for remote teams",
                "Advanced analytics and reporting dashboard",
                "24/7 Dedicated customer support"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -----------------------------------------
  5. FOOTER COMPONENT
  -----------------------------------------
*/
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-indigo-400">TechNova</span>
            <p className="mt-4 text-gray-400 text-sm">
              Making the world a better place through constructing elegant hierarchies.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <div className="flex flex-col space-y-2">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500" />
              <button className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} TechNova Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

/* -----------------------------------------
  MAIN APP COMPONENT
  -----------------------------------------
*/
function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
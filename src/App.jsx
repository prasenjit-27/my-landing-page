import React, { useState } from 'react';
import { 
  Menu, X, ArrowRight, CheckCircle, Zap, Shield, Globe, 
  Twitter, Linkedin, Github, MessageSquare, Play, Sun, Moon 
} from 'lucide-react';

/* --- NAVBAR --- */
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 border-b ${
      darkMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white/90 border-gray-100 text-gray-900'
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-2 group-hover:rotate-12 transition-transform">
              <Zap className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">PRASENJIT</span>
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            {['Features', 'Pricing', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
              }`}>{item}</a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full cursor-pointer transition-all ${
                darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-md active:scale-95 cursor-pointer">
              Launch App
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
              {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-600" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden p-6 space-y-4 shadow-xl border-t ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
          {['Features', 'Pricing', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-lg font-bold cursor-pointer">{item}</a>
          ))}
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold cursor-pointer">Get Started</button>
        </div>
      )}
    </nav>
  );
};

/* --- HERO --- */
const Hero = ({ darkMode }) => (
  <section className={`relative pt-32 pb-20 overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-3xl ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-100/50'}`}></div>
      <div className={`absolute bottom-0 right-[-5%] w-[30%] h-[30%] rounded-full blur-3xl ${darkMode ? 'bg-purple-900/20' : 'bg-purple-100/50'}`}></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className={`inline-flex items-center space-x-2 border px-4 py-1.5 rounded-full mb-8 ${darkMode ? 'bg-slate-800 border-slate-700 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-700'}`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-widest">v2.0 is now live</span>
      </div>
      <h1 className={`text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Next-Gen Code <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Built by Prasenjit.</span>
      </h1>
      <p className={`text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
        Clean architecture, high performance, and exceptional UI. Centralizing modern workflows in one beautifully designed experience.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center shadow-xl cursor-pointer hover:-translate-y-1">
          Get Started Free <ArrowRight className="ml-2" />
        </button>
        <button className={`border-2 px-10 py-4 rounded-2xl font-bold transition-all flex items-center justify-center cursor-pointer hover:-translate-y-1 ${
          darkMode ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-gray-200 text-gray-900 hover:border-gray-900'
        }`}>
          <Play className="mr-2 fill-current" size={18} /> Watch Demo
        </button>
      </div>
    </div>
  </section>
);

/* --- FEATURES --- */
const Features = ({ darkMode }) => {
  const items = [
    { icon: <Zap />, title: "Real-time Sync", desc: "Every change updates globally in under 50ms. No refreshing needed." },
    { icon: <Shield />, title: "Enterprise Security", desc: "SOC2 compliant, end-to-end encryption, and role-based access." },
    { icon: <Globe />, title: "Multi-Region", desc: "Deploy your instance to 20+ global regions with a single click." }
  ];
  return (
    <section id="features" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-indigo-600 font-black text-sm uppercase tracking-widest mb-4">The Platform</h2>
        <p className={`text-4xl font-bold mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Everything you need to scale.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((f, i) => (
            <div key={i} className={`group p-10 rounded-3xl border transition-all duration-300 text-left ${
              darkMode ? 'bg-slate-900 border-slate-700 hover:border-indigo-500' : 'bg-gray-50/50 border-gray-100 hover:bg-white hover:shadow-2xl'
            }`}>
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{f.title}</h3>
              <p className={darkMode ? 'text-slate-400' : 'text-gray-600'}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- PRICING --- */
const Pricing = ({ darkMode }) => (
  <section id="pricing" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className={`text-4xl font-black mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Simple, Transparent Pricing</h2>
      <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
        <div className={`p-10 rounded-3xl border text-left transition-colors ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}>
          <h3 className="text-lg font-bold mb-2">Startup</h3>
          <div className="text-5xl font-black mb-6">$0<span className="text-lg opacity-50 font-medium">/mo</span></div>
          <ul className="space-y-4 mb-10 opacity-70">
            {['Up to 5 users', 'Basic Analytics', 'Community Support'].map(li => (
              <li key={li} className="flex items-center"><CheckCircle className="text-indigo-500 mr-2" size={18}/> {li}</li>
            ))}
          </ul>
          <button className={`w-full py-4 border-2 rounded-xl font-bold cursor-pointer transition-all ${darkMode ? 'border-slate-600 hover:bg-white hover:text-black' : 'border-gray-900 hover:bg-gray-900 hover:text-white'}`}>Start Free</button>
        </div>
        <div className="bg-indigo-600 p-10 rounded-3xl text-left text-white transform md:scale-105 shadow-2xl cursor-default">
          <h3 className="text-lg font-bold mb-2 opacity-80">Pro</h3>
          <div className="text-5xl font-black mb-6">$49<span className="text-lg opacity-50 font-medium">/mo</span></div>
          <ul className="space-y-4 mb-10">
            {['Unlimited users', 'Custom Domains', '24/7 Priority Support'].map(li => (
              <li key={li} className="flex items-center"><CheckCircle className="text-white mr-2" size={18}/> {li}</li>
            ))}
          </ul>
          <button className="w-full py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-gray-100 transition-all cursor-pointer">Get Started</button>
        </div>
      </div>
    </div>
  </section>
);

/* --- FOOTER --- */
const Footer = ({ darkMode }) => (
  <footer className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-400' : 'bg-gray-900 text-gray-400'}`}>
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-center md:text-left">
      <div className="col-span-1">
        <div className="flex items-center justify-center md:justify-start text-white mb-6">
          <Zap className="text-indigo-500 mr-2" fill="currentColor" />
          <span className="text-xl font-black tracking-tighter uppercase">PRASENJIT</span>
        </div>
        <p className="text-sm leading-relaxed mb-6">Designing professional software experiences with clean, state-driven React architecture.</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <Github className="hover:text-white cursor-pointer transition-transform hover:-translate-y-1" size={24}/>
          <Linkedin className="hover:text-white cursor-pointer transition-transform hover:-translate-y-1" size={24}/>
          <Twitter className="hover:text-white cursor-pointer transition-transform hover:-translate-y-1" size={24}/>
        </div>
      </div>
      {['Product', 'Company', 'Support'].map((title) => (
        <div key={title}>
          <h4 className="text-white font-bold mb-6">{title}</h4>
          <ul className="space-y-4 text-sm">
            {['Features', 'API', 'Pricing'].map(link => (
              <li key={link} className="hover:text-white transition cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 mt-16 pt-8 text-xs text-center opacity-60">
      &copy; {new Date().getFullYear()} Prasenjit. Built with React & Tailwind.
    </div>
  </footer>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <Pricing darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
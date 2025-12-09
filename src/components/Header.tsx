import { useState } from 'react';
import { Package, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Inventory</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg shadow-emerald-500/30">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-slate-700 hover:text-emerald-600 font-medium">
              Features
            </a>
            <a href="#testimonials" className="block text-slate-700 hover:text-emerald-600 font-medium">
              Testimonials
            </a>
            <a href="#pricing" className="block text-slate-700 hover:text-emerald-600 font-medium">
              Pricing
            </a>
            <a href="#contact" className="block text-slate-700 hover:text-emerald-600 font-medium">
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <button className="w-full text-slate-700 hover:text-emerald-600 font-medium py-2">
                Sign In
              </button>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

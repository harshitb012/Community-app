
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ease-in-out',
        scrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-subtle' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">C</span>
          </div>
          <span className="text-xl font-display font-semibold text-gray-900">Communion</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" active={location.pathname === '/'} />
          <NavLink to="/events" label="Events" active={location.pathname.includes('/events')} />
          <NavLink to="#about" label="About" active={location.pathname === '/about'} />
          <Button asChild size="sm" className="ml-4 px-6 rounded-full transition-all duration-200 transform hover:scale-[1.02]">
            <Link to="/events">Explore Events</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-elevation animate-slide-in overflow-hidden">
          <nav className="flex flex-col space-y-4 p-6">
            <MobileNavLink to="/" label="Home" active={location.pathname === '/'} />
            <MobileNavLink to="/events" label="Events" active={location.pathname.includes('/events')} />
            <MobileNavLink to="#about" label="About" active={location.pathname === '/about'} />
            <Button asChild className="mt-2 rounded-full transition-all duration-200">
              <Link to="/events">Explore Events</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

type NavLinkProps = {
  to: string;
  label: string;
  active: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ to, label, active }) => (
  <Link 
    to={to}
    className={cn(
      'text-sm font-medium transition-all duration-200 relative',
      active 
        ? 'text-primary' 
        : 'text-gray-600 hover:text-gray-900'
    )}
  >
    {label}
    {active && (
      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
    )}
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ to, label, active }) => (
  <Link 
    to={to}
    className={cn(
      'text-base font-medium py-2 transition-all duration-200',
      active 
        ? 'text-primary' 
        : 'text-gray-600 hover:text-gray-900'
    )}
  >
    {label}
  </Link>
);

export default Header;

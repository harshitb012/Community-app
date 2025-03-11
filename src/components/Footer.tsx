
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-xs py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">C</span>
            </div>
            <span className="text-lg font-display font-semibold text-gray-900">Communion</span>
          </Link>
          <p className="text-gray-600 text-sm max-w-md">
            Connecting people of all faiths through events and community support. 
            Building bridges across different communities and fostering understanding.
          </p>
          <div className="flex space-x-4 mt-6">
            <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" label="Twitter" />
            <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" label="Instagram" />
            <SocialLink icon={<Github size={18} />} href="https://github.com" label="Github" />
          </div>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
            Navigation
          </h3>
          <ul className="space-y-3">
            <FooterLink href="/" label="Home" />
            <FooterLink href="/events" label="Events" />
            <FooterLink href="#about" label="About Us" />
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
            Legal
          </h3>
          <ul className="space-y-3">
            <FooterLink href="#" label="Privacy Policy" />
            <FooterLink href="#" label="Terms of Service" />
            <FooterLink href="#" label="Cookie Policy" />
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-200">
        <p className="text-gray-500 text-sm text-center">
          &copy; {currentYear} Communion App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

type SocialLinkProps = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-primary transition-colors duration-200"
    aria-label={label}
  >
    {icon}
  </a>
);

type FooterLinkProps = {
  href: string;
  label: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <li>
    <Link 
      to={href} 
      className="text-gray-600 hover:text-primary text-sm transition-colors duration-200"
    >
      {label}
    </Link>
  </li>
);

export default Footer;

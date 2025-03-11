
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0" />
        <div className="absolute inset-0 z-10 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-[0.03]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-20 animate-scale-in">
          <div className="inline-block mb-6 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-sm font-medium text-blue-600">Communion App</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Connecting People Across<br />Faiths & Interests
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Communion brings together people from all walks of life, creating meaningful 
            connections through community events and shared experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base shadow-subtle">
              <Link to="/events">
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-gray-300 hover:bg-gray-100 transition-colors">
              <Link to="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Communion</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission is to build bridges between different communities, fostering understanding and creating meaningful connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-blue-500" />}
              title="Community Building"
              description="Connect with like-minded individuals and build meaningful relationships across different faiths and backgrounds."
            />
            <FeatureCard 
              icon={<Calendar className="h-8 w-8 text-blue-500" />}
              title="Diverse Events"
              description="Discover and participate in a wide range of events, from religious ceremonies to social gatherings and charity drives."
            />
            <FeatureCard 
              icon={<Heart className="h-8 w-8 text-blue-500" />}
              title="Support Network"
              description="Create a strong support network within your community to help and uplift one another through shared values."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Explore upcoming events, connect with others, and become part of something meaningful. 
            The journey begins with a single step.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base shadow-subtle">
            <Link to="/events">
              Explore Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-elevation">
    <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;

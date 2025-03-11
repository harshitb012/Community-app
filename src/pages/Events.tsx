
import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import EventCard, { Event } from '@/components/EventCard';
import EventForm from '@/components/EventForm';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Sample data for events
const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Interfaith Dialog Session',
    date: new Date('2023-11-15'),
    location: 'Community Center, San Francisco',
    description: 'Join us for an evening of open dialogue between different faith leaders discussing common values and building mutual understanding.',
    category: 'Religious',
  },
  {
    id: '2',
    title: 'Monthly Community Potluck',
    date: new Date('2023-11-20'),
    location: 'Lincoln Park, Chicago',
    description: 'A social gathering where community members bring dishes from their cultural backgrounds to share with others. An opportunity to connect and learn about different cuisines.',
    category: 'Social',
  },
  {
    id: '3',
    title: 'Homeless Shelter Volunteering',
    date: new Date('2023-11-25'),
    location: 'Hope Shelter, New York City',
    description: 'Volunteer to serve meals and organize clothing donations at the local homeless shelter. Make a difference in your community by helping those in need.',
    category: 'Charity',
  },
  {
    id: '4',
    title: 'Leadership Workshop Series',
    date: new Date('2023-12-05'),
    location: 'Virtual Event via Zoom',
    description: 'Learn key leadership skills applicable to community organizing and faith-based initiatives. This workshop will cover effective communication, conflict resolution, and project management.',
    category: 'Educational',
  },
  {
    id: '5',
    title: 'Food Drive for Local Food Bank',
    date: new Date('2023-12-10'),
    location: 'Multiple Locations',
    description: 'Help collect non-perishable food items for the local food bank to support families in need during the holiday season.',
    category: 'Charity',
  },
  {
    id: '6',
    title: 'Cultural Dance Night',
    date: new Date('2023-12-15'),
    location: 'City Arts Center, Austin',
    description: 'Experience traditional dances from different cultures around the world. Local dance groups will perform and teach basic steps to attendees.',
    category: 'Social',
  },
];

type CategoryFilter = Event['category'] | 'All';

const Events = () => {
  const [events, setEvents] = useState<Event[]>(sampleEvents);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(sampleEvents);
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === activeFilter));
    }
  }, [activeFilter, events]);

  const handleAddEvent = (newEvent: Omit<Event, 'id'>) => {
    const event: Event = {
      ...newEvent,
      id: (events.length + 1).toString(), // Simple ID generation
    };
    setEvents([...events, event]);
  };

  const categories: CategoryFilter[] = ['All', 'Religious', 'Social', 'Charity', 'Educational'];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="mb-12 animate-fade-in">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover and join events that connect people of all faiths and backgrounds.
              Find opportunities to engage with your community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className={cn(
                      'cursor-pointer transition-colors font-medium',
                      activeFilter === category
                        ? 'bg-primary/10 text-primary border-primary/20'
                        : 'hover:bg-gray-100'
                    )}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            
            <EventForm onEventAdded={handleAddEvent} />
          </div>
        </div>
        
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-700 mb-2">No events found</h3>
            <p className="text-gray-500">
              There are no events matching your current filter. Try selecting a different category or add a new event.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setActiveFilter('All')}
            >
              Clear Filter
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Events;

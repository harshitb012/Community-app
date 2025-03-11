
import React from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export type Event = {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string;
  category: 'Religious' | 'Social' | 'Charity' | 'Educational';
};

type EventCardProps = {
  event: Event;
  className?: string;
};

const EventCard: React.FC<EventCardProps> = ({ event, className }) => {
  const categoryColors = {
    Religious: 'bg-purple-100 text-purple-800',
    Social: 'bg-blue-100 text-blue-800',
    Charity: 'bg-green-100 text-green-800',
    Educational: 'bg-amber-100 text-amber-800',
  };

  return (
    <div 
      className={cn(
        'glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-elevation group',
        className
      )}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
            {event.title}
          </h3>
          <Badge 
            variant="outline" 
            className={cn('font-medium', categoryColors[event.category])}
          >
            {event.category}
          </Badge>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{format(event.date, 'EEEE, MMMM d, yyyy')}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 line-clamp-3 mb-4">
          {event.description}
        </p>
        
        <button className="text-primary font-medium text-sm flex items-center hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;

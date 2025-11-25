import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

// Mock data
const events = [
    { id: 1, title: 'International Conference on Climate Change', date: '25', month: 'NOV', location: 'University Auditorium' },
    { id: 2, title: 'Annual Sports Week', date: '01', month: 'DEC', location: 'Sports Complex' },
    { id: 3, title: 'Convocation 2025', date: '15', month: 'DEC', location: 'Main Ground' },
];

export default function EventsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-primary mb-8">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 flex gap-4">
                            <div className="bg-primary/10 text-primary p-4 rounded text-center min-w-[80px] flex flex-col justify-center">
                                <span className="block text-2xl font-bold">{event.date}</span>
                                <span className="text-sm font-bold uppercase">{event.month}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{event.location}</p>
                                <button className="text-primary text-sm font-medium hover:underline">Event Details</button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

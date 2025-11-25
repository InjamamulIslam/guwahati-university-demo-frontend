import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// Mock data for faculty
const facultyMembers = [
    { id: 1, name: 'Dr. John Doe', department: 'Computer Science', designation: 'Professor' },
    { id: 2, name: 'Dr. Jane Smith', department: 'Physics', designation: 'Associate Professor' },
    { id: 3, name: 'Dr. Robert Brown', department: 'History', designation: 'Assistant Professor' },
];

export default function FacultyPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-primary mb-8">Faculty Directory</h1>

            {/* Search/Filter Section (Placeholder) */}
            <div className="mb-8 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Search and filter functionality coming soon...</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facultyMembers.map((faculty) => (
                    <Card key={faculty.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{faculty.name}</CardTitle>
                            <p className="text-sm text-primary font-medium">{faculty.designation}</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{faculty.department}</p>
                            <Link href={`/faculty/${faculty.id}`}>
                                <Button variant="outline" size="sm">View Profile</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

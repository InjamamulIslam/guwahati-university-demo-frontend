import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const departments = [
    { name: 'Arts', description: 'Language, Literature, History, and more.' },
    { name: 'Science', description: 'Physics, Chemistry, Mathematics, and more.' },
    { name: 'Technology', description: 'Computer Science, Electronics, and Biotechnology.' },
    { name: 'Commerce', description: 'Business Administration, Finance, and Economics.' },
    { name: 'Law', description: 'Legal Studies and Jurisprudence.' },
    { name: 'Management', description: 'Business Management and Administration.' },
];

export default function DepartmentsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-primary mb-8">Departments</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept) => (
                    <Card key={dept.name} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{dept.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{dept.description}</p>
                            <Link href={`/departments/${dept.name.toLowerCase()}`}>
                                <Button variant="outline" size="sm">View Details</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

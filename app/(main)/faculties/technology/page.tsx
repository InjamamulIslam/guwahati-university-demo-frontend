import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export default function TechnologyPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-6">Faculty of Technology</h1>

                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                    <p className="mb-4">
                        The Faculty of Technology focuses on providing world-class technical education and fostering innovation in engineering and technology fields.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Departments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Computer Science & Engineering</li>
                                <li>Electronics & Communication</li>
                                <li>Mechanical Engineering</li>
                                <li>Civil Engineering</li>
                                <li>Information Technology</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Programs Offered</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>B.Tech</li>
                                <li>M.Tech</li>
                                <li>MCA</li>
                                <li>Ph.D</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8">
                    <Link href="/">
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export default function MedicinePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-6">Faculty of Medicine & Allied Health Science</h1>

                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                    <p className="mb-4">
                        The Faculty of Medicine & Allied Health Science is committed to excellence in medical education, research, and healthcare delivery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Departments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Medicine</li>
                                <li>Nursing</li>
                                <li>Pharmacy</li>
                                <li>Public Health</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Programs Offered</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>MBBS</li>
                                <li>B.Sc Nursing</li>
                                <li>B.Pharm</li>
                                <li>M.Sc (Medical Sciences)</li>
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

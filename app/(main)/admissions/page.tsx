import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export default function AdmissionsPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl font-bold text-primary mb-4">Admissions 2025-26</h1>
                <p className="text-lg text-muted-foreground">
                    Welcome to the Gauhati University Admission Portal. Apply for Undergraduate, Postgraduate, and PhD programs.
                </p>
                <div className="mt-8">
                    <Link href="/admissions/apply">
                        <Button size="lg">Apply Online Now</Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Important Dates</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex justify-between border-b border-border pb-2">
                                <span>Online Application Starts</span>
                                <span className="font-medium">Nov 01, 2025</span>
                            </li>
                            <li className="flex justify-between border-b border-border pb-2">
                                <span>Last Date of Submission</span>
                                <span className="font-medium text-red-600">Dec 15, 2025</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Entrance Examination</span>
                                <span className="font-medium">Jan 10, 2026</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Admission Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>Read the prospectus carefully before applying.</li>
                            <li>Keep scanned copies of your documents ready.</li>
                            <li>Application fee is non-refundable.</li>
                            <li>Incomplete applications will be rejected.</li>
                        </ul>
                        <Button variant="outline" className="w-full mt-6">Download Prospectus</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

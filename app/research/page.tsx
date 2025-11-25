import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function ResearchPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-primary mb-6">Research at Gauhati University</h1>

            <section className="mb-10">
                <p className="text-lg text-muted-foreground">
                    Gauhati University has a strong legacy of research excellence. Our faculty and scholars are engaged in cutting-edge research across various disciplines.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Research Highlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-primary mb-2">A+</div>
                        <p className="text-sm text-muted-foreground">NAAC Accreditation (2024)</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Publications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                        <p className="text-sm text-muted-foreground">Research Papers Published</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-primary mb-2">150+</div>
                        <p className="text-sm text-muted-foreground">Ongoing Research Projects</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Research Centers</h2>
                    <ul className="space-y-2">
                        <li className="p-3 bg-muted rounded-md">Center for South East Asian Studies</li>
                        <li className="p-3 bg-muted rounded-md">Center for Women's Studies</li>
                        <li className="p-3 bg-muted rounded-md">Internal Quality Assurance Cell (IQAC)</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">PhD Program</h2>
                    <Card>
                        <CardContent className="pt-6">
                            <p className="mb-4">Admission into the PhD program is through the GURET (Gauhati University Research Eligibility Test).</p>
                            <button className="text-primary font-medium hover:underline">View PhD Regulations</button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function NEPPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-primary mb-6">National Education Policy (NEP) 2020</h1>

            <div className="prose max-w-none mb-10">
                <p className="text-lg text-muted-foreground">
                    Gauhati University is committed to the effective implementation of the National Education Policy (NEP) 2020.
                    We have initiated several measures to transform the higher education ecosystem in the region.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>FYUGP (Four Year Undergraduate Program)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            Information regarding the new Four Year Undergraduate Program curriculum, credit framework, and regulations.
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            <li>Curriculum Framework</li>
                            <li>Credit Transfer Policy (ABC)</li>
                            <li>Skill Enhancement Courses</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>IETP (Integrated Teacher Education Program)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            Details about the 4-year dual-major holistic bachelor's degree offering B.A. B.Ed. / B.Sc. B.Ed. / B.Com. B.Ed.
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            <li>Admission Guidelines</li>
                            <li>Syllabus & Course Structure</li>
                            <li>Participating Colleges</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

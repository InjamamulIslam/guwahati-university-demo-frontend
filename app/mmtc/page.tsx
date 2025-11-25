import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function MMTCPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-primary mb-6">MMTC - Malaviya Mission Teacher Training Centre</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Check schedule for Orientation and Refresher courses.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Registration</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Apply online for upcoming training programs.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Download course materials and certificates.</p>
                    </CardContent>
                </Card>
            </div>

            <section>
                <h2 className="text-2xl font-semibold mb-4">About MMTC</h2>
                <p className="text-muted-foreground">
                    The Malaviya Mission Teacher Training Centre (formerly UGC-HRDC) at Gauhati University organizes various faculty induction programs, refresher courses, and short-term courses for faculty members of higher education institutions.
                </p>
            </section>
        </div>
    );
}

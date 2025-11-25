import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function StudentPortalPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-primary">Student Portal</h1>
                <div className="flex gap-4">
                    <span className="text-sm text-muted-foreground self-center">Welcome, Student</span>
                    <Button variant="outline" size="sm">Logout</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>My Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">View and edit your personal details.</p>
                        <Button className="w-full">View Profile</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Examination Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Check your latest semester results.</p>
                        <Button className="w-full">Check Results</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Course Materials</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Access lecture notes and assignments.</p>
                        <Button className="w-full">Access Materials</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

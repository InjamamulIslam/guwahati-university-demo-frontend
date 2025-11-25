import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function FacultyPortalPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-primary">Faculty Portal</h1>
                <div className="flex gap-4">
                    <span className="text-sm text-muted-foreground self-center">Welcome, Professor</span>
                    <Button variant="outline" size="sm">Logout</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Class Schedule</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Manage your upcoming classes.</p>
                        <Button className="w-full">View Schedule</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Student Attendance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Mark and view student attendance.</p>
                        <Button className="w-full">Manage Attendance</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Research & Publications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Update your research profile.</p>
                        <Button className="w-full">Update Profile</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

// Mock data for applications
const mockApplications = [
    { id: 'GU-2025-001', name: 'John Doe', course: 'BA English', percentage: 85, status: 'Pending' },
    { id: 'GU-2025-002', name: 'Jane Smith', course: 'BSc Physics', percentage: 92, status: 'Pending' },
    { id: 'GU-2025-003', name: 'Robert Brown', course: 'BCom', percentage: 78, status: 'Pending' },
    { id: 'GU-2025-004', name: 'Emily Davis', course: 'BA History', percentage: 88, status: 'Pending' },
];

export default function AdminAdmissionsPage() {
    const [applications, setApplications] = useState(mockApplications);
    const [searchTerm, setSearchTerm] = useState('');
    const [meritListGenerated, setMeritListGenerated] = useState(false);

    const generateMeritList = () => {
        const sorted = [...applications].sort((a, b) => b.percentage - a.percentage);
        setApplications(sorted);
        setMeritListGenerated(true);
    };

    const filteredApplications = applications.filter(app =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-primary mb-2">Admissions Dashboard</h1>
                    <p className="text-muted-foreground">Manage and review admission applications</p>
                </div>
                <Button onClick={generateMeritList} disabled={meritListGenerated}>
                    {meritListGenerated ? 'Merit List Generated' : 'Generate Merit List'}
                </Button>
            </div>

            {meritListGenerated && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                        ✓ Merit list has been generated and applications are sorted by percentage.
                    </p>
                </div>
            )}

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Search Applications</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input
                        placeholder="Search by name or application ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Applications ({filteredApplications.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-3 px-4 font-medium">Application ID</th>
                                    <th className="text-left py-3 px-4 font-medium">Name</th>
                                    <th className="text-left py-3 px-4 font-medium">Course</th>
                                    <th className="text-left py-3 px-4 font-medium">Percentage</th>
                                    <th className="text-left py-3 px-4 font-medium">Status</th>
                                    <th className="text-left py-3 px-4 font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredApplications.map((app, index) => (
                                    <tr key={app.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                                        <td className="py-3 px-4 font-mono text-sm">{app.id}</td>
                                        <td className="py-3 px-4">{app.name}</td>
                                        <td className="py-3 px-4">{app.course}</td>
                                        <td className="py-3 px-4">
                                            <span className={`font-bold ${app.percentage >= 85 ? 'text-green-600' : 'text-foreground'}`}>
                                                {app.percentage}%
                                            </span>
                                            {meritListGenerated && index < 3 && (
                                                <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                                                    Rank {index + 1}
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <Button variant="outline" size="sm">View Details</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

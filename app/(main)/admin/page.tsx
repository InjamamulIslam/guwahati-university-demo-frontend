"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('admissions');

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-primary mb-8">Admin Dashboard</h1>

            <div className="flex gap-4 mb-8 border-b border-border pb-2">
                <button
                    onClick={() => setActiveTab('admissions')}
                    className={`pb-2 px-4 font-medium ${activeTab === 'admissions' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
                >
                    Admissions
                </button>
                <button
                    onClick={() => setActiveTab('journals')}
                    className={`pb-2 px-4 font-medium ${activeTab === 'journals' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
                >
                    Journal Editorial
                </button>
            </div>

            {activeTab === 'admissions' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Total Applicants</CardTitle></CardHeader>
                            <CardContent><div className="text-2xl font-bold">1,245</div></CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Pending Review</CardTitle></CardHeader>
                            <CardContent><div className="text-2xl font-bold text-amber-600">45</div></CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Merit Lists Generated</CardTitle></CardHeader>
                            <CardContent><div className="text-2xl font-bold text-green-600">8</div></CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Applications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs uppercase bg-muted">
                                        <tr>
                                            <th className="px-4 py-3">Applicant ID</th>
                                            <th className="px-4 py-3">Name</th>
                                            <th className="px-4 py-3">Program</th>
                                            <th className="px-4 py-3">Status</th>
                                            <th className="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-border">
                                            <td className="px-4 py-3">APP-2024-001</td>
                                            <td className="px-4 py-3">Rahul Sharma</td>
                                            <td className="px-4 py-3">M.Sc. Physics</td>
                                            <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Approved</span></td>
                                            <td className="px-4 py-3"><Button size="sm" variant="ghost">View</Button></td>
                                        </tr>
                                        <tr className="border-b border-border">
                                            <td className="px-4 py-3">APP-2024-002</td>
                                            <td className="px-4 py-3">Priya Das</td>
                                            <td className="px-4 py-3">M.A. English</td>
                                            <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending</span></td>
                                            <td className="px-4 py-3"><Button size="sm" variant="ghost">View</Button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {activeTab === 'journals' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Pending Submissions</CardTitle></CardHeader>
                            <CardContent><div className="text-2xl font-bold">12</div></CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Under Review</CardTitle></CardHeader>
                            <CardContent><div className="text-2xl font-bold text-blue-600">28</div></CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Published (This Year)</CardTitle></CardHeader>
                            <CardContent><div className="text-2xl font-bold text-green-600">145</div></CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Article Submissions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs uppercase bg-muted">
                                        <tr>
                                            <th className="px-4 py-3">ID</th>
                                            <th className="px-4 py-3">Title</th>
                                            <th className="px-4 py-3">Author</th>
                                            <th className="px-4 py-3">Journal</th>
                                            <th className="px-4 py-3">Status</th>
                                            <th className="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-border">
                                            <td className="px-4 py-3">J-882</td>
                                            <td className="px-4 py-3">Climate Change in NE India</td>
                                            <td className="px-4 py-3">Dr. A. Baruah</td>
                                            <td className="px-4 py-3">GU Journal of Science</td>
                                            <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Under Review</span></td>
                                            <td className="px-4 py-3"><Button size="sm" variant="ghost">Review</Button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}

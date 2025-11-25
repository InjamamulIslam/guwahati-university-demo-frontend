import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function ExaminationPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-primary mb-8 text-center">Examination System</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Result Portal */}
                <Card>
                    <CardHeader>
                        <CardTitle>Check Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <Input label="Roll Number" placeholder="Enter your Roll No" />
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-foreground">Select Session</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                    <option>2024-2025</option>
                                    <option>2023-2024</option>
                                </select>
                            </div>
                            <Button className="w-full">View Result</Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Hall Ticket Portal */}
                <Card>
                    <CardHeader>
                        <CardTitle>Download Hall Ticket</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <Input label="Registration Number" placeholder="Enter Registration No" />
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-foreground">Select Examination</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                    <option>Semester I</option>
                                    <option>Semester III</option>
                                    <option>Semester V</option>
                                </select>
                            </div>
                            <Button variant="outline" className="w-full">Download Admit Card</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            {/* Exam Forms */}
            <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-2xl font-semibold mb-4">Examination Forms</h2>
                <div className="bg-muted rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                        <span>Exam Form Fill-up Notice (TDC 1st Sem)</span>
                        <Button size="sm" variant="ghost">Download</Button>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                        <span>Re-evaluation Form</span>
                        <Button size="sm" variant="ghost">Download</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

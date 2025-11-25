import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

// Mock data
const notices = [
    { id: 1, title: 'Admission Notification 2025-26 (Offline)', date: 'Nov 20, 2025' },
    { id: 2, title: 'Examination Schedule for BA/BSc 3rd Semester', date: 'Nov 18, 2025' },
    { id: 3, title: 'Holiday List 2026', date: 'Nov 15, 2025' },
    { id: 4, title: 'PhD Entrance Result Declared', date: 'Nov 10, 2025' },
];

export default function NoticesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-primary mb-8">Notices & Circulars</h1>
            <div className="space-y-4">
                {notices.map((notice) => (
                    <Card key={notice.id}>
                        <CardContent className="p-4 flex justify-between items-center">
                            <div>
                                <Link href={`/notices/${notice.id}`} className="text-lg font-medium hover:text-primary transition-colors">
                                    {notice.title}
                                </Link>
                                <p className="text-sm text-muted-foreground">{notice.date}</p>
                            </div>
                            <Link href={`/notices/${notice.id}`} className="text-primary text-sm font-medium hover:underline">
                                Download/View
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function JournalsPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-primary">GU Journals Portal</h1>
                <Button>Submit Article</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="hover:border-primary transition-colors cursor-pointer">
                        <CardContent className="pt-6">
                            <div className="h-40 bg-muted mb-4 rounded flex items-center justify-center text-muted-foreground">
                                Journal Cover
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Journal of Science & Technology</h3>
                            <p className="text-sm text-muted-foreground mb-4">ISSN: 1234-5678</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs bg-secondary/10 text-secondary-foreground px-2 py-1 rounded">Vol. {10 + i}, Issue 1</span>
                                <span className="text-sm text-primary font-medium">Read Online</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

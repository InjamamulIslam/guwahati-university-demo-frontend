import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ViceChancellorPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden border-4 border-primary/20">
                            <Image
                                src="/vice-chancellor.png"
                                alt="Prof Nani Gopal Mahanta"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-bold text-primary mb-2">Prof Nani Gopal Mahanta</h1>
                        <p className="text-xl text-muted-foreground mb-6">Vice Chancellor, Gauhati University</p>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="mb-4">
                                Prof Nani Gopal Mahanta is a distinguished academic and administrator serving as the Vice Chancellor of Gauhati University.
                            </p>
                            <p className="mb-4">
                                Under his leadership, the university continues to advance its mission of providing quality education and fostering research excellence in the Northeast region.
                            </p>
                            <p className="mb-4">
                                Prof Mahanta brings extensive experience in academic administration and has been instrumental in implementing innovative programs and strengthening the university's academic infrastructure.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-muted p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Office of the Vice Chancellor</h2>
                        <div className="space-y-2 text-muted-foreground">
                            <p><strong>Email:</strong> vc@gauhati.ac.in</p>
                            <p><strong>Phone:</strong> +91-361-XXXXXXX</p>
                        </div>
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Areas of Focus</h2>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Academic Excellence</li>
                            <li>Research & Innovation</li>
                            <li>Infrastructure Development</li>
                            <li>Student Welfare</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8">
                    <Link href="/">
                        <Button variant="outline">Back to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

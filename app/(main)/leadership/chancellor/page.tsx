import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ChancellorPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden border-4 border-primary/20">
                            <Image
                                src="/chancellor.png"
                                alt="Shri Laxman Prasad Acharya"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-bold text-primary mb-2">Shri Laxman Prasad Acharya</h1>
                        <p className="text-xl text-muted-foreground mb-6">Chancellor, Gauhati University</p>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="mb-4">
                                Shri Laxman Prasad Acharya serves as the Chancellor of Gauhati University, bringing extensive experience in public service and administration.
                            </p>
                            <p className="mb-4">
                                As Chancellor, he provides strategic guidance and oversight to ensure the university maintains its commitment to academic excellence and serves the educational needs of the Northeast region.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Office of the Chancellor</h2>
                    <div className="space-y-2 text-muted-foreground">
                        <p><strong>Email:</strong> chancellor@gauhati.ac.in</p>
                        <p><strong>Phone:</strong> +91-361-XXXXXXX</p>
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

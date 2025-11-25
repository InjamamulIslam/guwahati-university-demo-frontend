import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-6">About Gauhati University</h1>

                <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
                    <Image
                        src="/library.png"
                        alt="Gauhati University Library"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-6">
                        Gauhati University was incorporated by an Act of 1947. It started functioning on 26 January, 1948 as an affiliating, teaching and residential university in a few temporary buildings in Guwahati, with K. K. Handique as the first Vice-Chancellor. Phanidhar Dutta, Sailandhar Rajkhowa and Sarat Kumar Dutta were selected as the Registrar, Treasurer and Secretary of University Classes respectively.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Vision</h2>
                    <p className="mb-6">
                        To perform a significant role in the educational, economic and social development of the region and the nation.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Mission</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>To provide quality higher education to the students of the North East Region.</li>
                        <li>To promote research and innovation in various fields of knowledge.</li>
                        <li>To preserve and promote the cultural heritage of the region.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

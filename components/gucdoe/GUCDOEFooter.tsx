import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export const GUCDOEFooter = () => {
    return (
        <footer className="bg-muted/50 border-t border-border mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-primary">GUCDOE</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Gauhati University Centre for Distance and Online Education provides quality education through distance learning mode since 1989.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-primary">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/gucdoe/admission" className="text-muted-foreground hover:text-primary transition-colors">Online Admission</Link></li>
                            <li><Link href="/gucdoe/results" className="text-muted-foreground hover:text-primary transition-colors">Examination Results</Link></li>
                            <li><Link href="/gucdoe/slm" className="text-muted-foreground hover:text-primary transition-colors">Study Materials</Link></li>
                            <li><Link href="/gucdoe/question-papers" className="text-muted-foreground hover:text-primary transition-colors">Question Papers</Link></li>
                            <li><Link href="/gucdoe/compliance" className="text-muted-foreground hover:text-primary transition-colors">UGC-DEB Compliance</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-primary">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Phone size={16} className="mt-1 flex-shrink-0 text-primary" />
                                <div>
                                    <p className="text-muted-foreground">Help: +91 88110 92688</p>
                                    <p className="text-muted-foreground">Exam: +91 88110 92679</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail size={16} className="mt-1 flex-shrink-0 text-primary" />
                                <a href="mailto:gucdoeadmission@gauhati.ac.in" className="text-muted-foreground hover:text-primary transition-colors break-all">
                                    gucdoeadmission@gauhati.ac.in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Gauhati University Centre for Distance and Online Education. All rights reserved.</p>
                    <p className="mt-2">
                        <Link href="/" className="hover:text-primary transition-colors">Return to Main Website</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

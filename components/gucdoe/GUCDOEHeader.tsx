"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/Button';

export const GUCDOEHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/gucdoe' },
        { name: 'About Us', href: '/gucdoe/about' },
        { name: 'People', href: '/gucdoe/people' },
        { name: 'Academic', href: '/gucdoe/academic' },
        { name: 'Centers', href: '/gucdoe/centers' },
        { name: 'Library', href: '/gucdoe/library' },
        { name: 'Student Support', href: '/gucdoe/support' },
        { name: 'Feedbacks', href: '/gucdoe/feedbacks' },
        { name: 'Downloads', href: '/gucdoe/downloads' },
        { name: 'Fee Collection', href: '/gucdoe/fee-collection' },
        { name: 'Contact Us', href: '/gucdoe/contact' },
        { name: 'Galleries', href: '/gucdoe/galleries' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur shadow-md border-b border-border">
            <div className="container mx-auto px-4">
                {/* Top Bar */}
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/gucdoe" className="flex items-center gap-3 group">
                        <div className="relative h-14 w-14 overflow-hidden transition-transform group-hover:scale-105">
                            <Image
                                src="/gu_logo.png"
                                alt="GUCDOE Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-bold text-primary leading-tight">GUCDOE</span>
                            <span className="text-xs text-muted-foreground font-medium">Distance & Online Education</span>
                        </div>
                    </Link>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <ThemeToggle />
                        <Link href="/gucdoe/admission">
                            <Button size="sm">Apply Now</Button>
                        </Link>
                        <Link href="/">
                            <Button variant="outline" size="sm">Main Website</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            className="p-2 text-foreground hover:bg-accent rounded-md transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1 pb-3 border-t border-border pt-3">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href}>
                            <button className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors">
                                {item.name}
                            </button>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-border bg-background">
                    <nav className="container mx-auto px-4 py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <button className="w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors">
                                    {item.name}
                                </button>
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-border space-y-2">
                            <Link href="/gucdoe/admission" className="block">
                                <Button className="w-full">Apply Now</Button>
                            </Link>
                            <Link href="/" className="block">
                                <Button variant="outline" className="w-full">Main Website</Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

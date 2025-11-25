"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/Button';
import { NAV_ITEMS, NavItem } from '@/lib/nav-items';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    // Close dropdown on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveDropdown(null);
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const toggleDropdown = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-background/95 backdrop-blur shadow-md border-b border-border'
                : 'bg-background border-b border-transparent'
                }`}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-12 w-12 overflow-hidden transition-transform group-hover:scale-105">
                        <Image
                            src="/gu_logo.png"
                            alt="Gauhati University Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-primary leading-tight">Gauhati University</span>
                        <span className="text-xs text-muted-foreground font-medium tracking-wider">ESTD. 1948</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
                    {NAV_ITEMS.map((item) => (
                        <DesktopNavItem key={item.label} item={item} />
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-3">
                    <ThemeToggle />
                    <Link href="/admissions/apply">
                        <Button size="sm">Apply Now</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="p-2 text-foreground hover:bg-accent rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="p-4 space-y-4">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="border-b border-border last:border-0 pb-2 last:pb-0">
                                {item.children ? (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="flex items-center justify-between w-full py-2 text-base font-medium hover:text-primary transition-colors"
                                            aria-expanded={activeDropdown === item.label}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div
                                            className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${activeDropdown === item.label ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href || '#'}
                                                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href || '#'}
                                        className="block py-2 text-base font-medium hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 flex flex-col gap-3">
                            <Link href="/login" className="w-full">
                                <Button variant="outline" className="w-full">Login</Button>
                            </Link>
                            <Link href="/admissions/apply" className="w-full">
                                <Button className="w-full">Apply Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

const DesktopNavItem: React.FC<{ item: NavItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!item.children) {
        return (
            <Link
                href={item.href || '#'}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent/50"
            >
                {item.label}
            </Link>
        );
    }

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setIsOpen(false);
                }
            }}
        >
            <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md group-hover:bg-accent/50 ${isOpen ? 'text-primary bg-accent/50' : 'text-foreground/80 hover:text-primary'
                    }`}
                aria-expanded={isOpen}
            >
                {item.label}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 origin-top-left z-50 ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                    } ${item.isMega ? 'w-[600px] -left-20' : 'w-56'}`}
            >
                <div className="bg-background border border-border rounded-lg shadow-lg overflow-hidden p-2">
                    {item.isMega ? (
                        <div className="grid grid-cols-2 gap-2 p-2">
                            {item.children.map((child) => (
                                <Link
                                    key={child.label}
                                    href={child.href || '#'}
                                    className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors group/item"
                                >
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                        <ChevronRight size={14} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                                            {child.label}
                                        </div>
                                        <div className="text-xs text-muted-foreground">Access the {child.label}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            {item.children.map((child) => (
                                <Link
                                    key={child.label}
                                    href={child.href || '#'}
                                    className="px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors"
                                >
                                    {child.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

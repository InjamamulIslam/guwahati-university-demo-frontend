"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Bell, Download, FileText, Calendar, Phone, Mail, ExternalLink, Search, BookOpen, Users, Award, Home, Info, GraduationCap, Building2, Library, HeadphonesIcon, MessageSquare, FolderDown, CreditCard, MapPin, Image as ImageIcon } from 'lucide-react';

export default function GUCDOEPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const notifications = [
        { title: "Link for downloading admit cards for Semester Examination November 2025", urgent: true },
        { title: "Precautions to be taken by the students before enrolling in Programmes offered under Open & Distance Learning (ODL) mode", urgent: false },
    ];

    const importantNotices = [
        "Notification for Walk-in Interview: Assistant Professor (Contractual) Position at GUCDOE",
        "Last Date Extended: For 2nd & 3rd Semester Admission of 2023-24 July-August & January Session",
        "Notice: Extension of Deadline for Post Graduate Admissions 2024-25 (July) Session",
        "Non-enrollment of foreign nationals in Open and Distance Learning (ODL) Programmes as per UGC (ODL Programmes and Online Programmes) Regulations, 2020",
    ];

    const results = [
        "Results of M.A. in Political Science 1st Semester Examination held in April-2025",
        "Results of M.A. in English 1st Semester Examination held in April- 2025",
        "Results of M Com 1 Semester Examination held in April- 2025",
        "[Revised] Results of MA in Education 2nd Semester Examination held in April- 2025",
    ];

    const quickLinks = [
        { name: "Online SLM", icon: BookOpen, href: '/gucdoe/slm' },
        { name: "Old Question Papers", icon: FileText, href: '/gucdoe/question-papers' },
        { name: "Download Marksheet", icon: Download, href: '/gucdoe/marksheet' },
        { name: "Download Admit Card", icon: Download, href: '/gucdoe/admit-card' },
        { name: "Mandatory Disclosure", icon: FileText, href: '/gucdoe/disclosure' },
        { name: "UGC-DEB Compliance", icon: Award, href: '/gucdoe/compliance' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/library.png"
                        alt="GUCDOE Campus"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
                <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
                    <div className="max-w-4xl text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to GUCDOE</h1>
                        <p className="text-xl md:text-2xl mb-2 text-white/90">Gauhati University Centre for Distance and Online Education</p>
                        <p className="text-base md:text-lg text-white/80 mb-8">Empowering Learners Through Quality Distance Education Since 1989</p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/gucdoe/admission">
                                <Button size="lg" variant="secondary">Apply Now</Button>
                            </Link>
                            <Link href="/gucdoe/results">
                                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                                    Check Results
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Bar */}
            <div className="container mx-auto px-4 py-8">
                <Card className="max-w-2xl mx-auto shadow-lg">
                    <CardContent className="p-4">
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search for courses, results, notifications..."
                                    className="w-full pl-10 pr-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Button>Search</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="container mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Urgent Notifications */}
                        <Card className="border-l-4 border-l-red-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-red-600">
                                    <Bell className="animate-pulse" />
                                    Urgent Notifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {notifications.map((notif, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors cursor-pointer">
                                        <ExternalLink size={16} className="mt-1 flex-shrink-0 text-red-600" />
                                        <p className="text-sm font-medium text-foreground">{notif.title}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Important Notifications */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Bell />
                                    Important Notifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {importantNotices.map((notice, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 hover:bg-accent rounded-lg transition-colors cursor-pointer border-b border-border last:border-0">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">{notice}</p>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="ghost" className="w-full mt-4">View All Notifications</Button>
                            </CardContent>
                        </Card>

                        {/* Latest Results */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Award />
                                    Latest Results
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {results.map((result, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 hover:bg-accent rounded-lg transition-colors cursor-pointer border border-border">
                                            <div className="flex items-center gap-3">
                                                <FileText size={18} className="text-primary flex-shrink-0" />
                                                <p className="text-sm font-medium">{result}</p>
                                            </div>
                                            <ExternalLink size={16} className="text-muted-foreground flex-shrink-0" />
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full mt-4">View All Results</Button>
                            </CardContent>
                        </Card>

                        {/* Events & Examination Schedule */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar />
                                    Events & Examination Schedule
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                                    <p className="font-semibold text-sm mb-1">M.Sc. IT Practical Examination</p>
                                    <p className="text-xs text-muted-foreground">November 2025 Exam - Practical & Project Viva</p>
                                </div>
                                <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                                    <p className="font-semibold text-sm mb-1">Examination Schedule</p>
                                    <p className="text-xs text-muted-foreground">M.A., M.Sc. (IT), and M.Com. 1st-4th Semester - November 2025</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Links */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Links</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {quickLinks.map((link, idx) => {
                                        const Icon = link.icon;
                                        return (
                                            <Link key={idx} href={link.href}>
                                                <button className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 rounded-lg transition-all hover:shadow-md border border-primary/20 text-left">
                                                    <Icon size={20} className="text-primary flex-shrink-0" />
                                                    <span className="text-sm font-medium">{link.name}</span>
                                                </button>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Phone />
                                    Contact Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="text-xs font-semibold text-muted-foreground mb-2">Help Desk</p>
                                    <a href="tel:+918811092688" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                                        <Phone size={16} />
                                        +91 88110 92688
                                    </a>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-muted-foreground mb-2">Examination Section</p>
                                    <a href="tel:+918811092679" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                                        <Phone size={16} />
                                        +91 88110 92679
                                    </a>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-muted-foreground mb-2">WhatsApp</p>
                                    <a href="https://wa.me/918811092693" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                                        <Phone size={16} />
                                        +91 88110 92693
                                    </a>
                                </div>
                                <div className="pt-4 border-t border-border space-y-2">
                                    <a href="mailto:gucdoeadmission@gauhati.ac.in" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors break-all">
                                        <Mail size={14} className="flex-shrink-0" />
                                        gucdoeadmission@gauhati.ac.in
                                    </a>
                                    <a href="mailto:gucdoeexam@gauhati.ac.in" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors break-all">
                                        <Mail size={14} className="flex-shrink-0" />
                                        gucdoeexam@gauhati.ac.in
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recognition */}
                        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                            <CardContent className="p-6 text-center">
                                <Award className="mx-auto mb-3 text-green-600" size={32} />
                                <p className="font-bold text-green-800 dark:text-green-200 mb-1">UGC-DEB Recognized</p>
                                <p className="text-xs text-green-700 dark:text-green-300">Academic Year 2023-24 & Onwards</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Users, Award, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

// Department data
const departmentData: Record<string, any> = {
    arts: {
        name: 'Arts',
        fullName: 'Faculty of Arts',
        description: 'The Faculty of Arts offers comprehensive programs in humanities, languages, and social sciences, fostering critical thinking and cultural awareness.',
        image: '/arts-classroom.png',
        programs: [
            { level: 'Undergraduate', name: 'B.A. in English', duration: '3 Years', seats: 60 },
            { level: 'Undergraduate', name: 'B.A. in History', duration: '3 Years', seats: 50 },
            { level: 'Undergraduate', name: 'B.A. in Political Science', duration: '3 Years', seats: 50 },
            { level: 'Postgraduate', name: 'M.A. in English', duration: '2 Years', seats: 30 },
            { level: 'Postgraduate', name: 'M.A. in History', duration: '2 Years', seats: 25 },
        ],
        facilities: ['Well-stocked Library', 'Seminar Halls', 'Computer Lab', 'Language Lab'],
        highlights: [
            'Highly qualified and experienced faculty',
            'Regular seminars and workshops',
            'Research opportunities',
            'Industry collaborations',
        ],
    },
    science: {
        name: 'Science',
        fullName: 'Faculty of Science',
        description: 'The Faculty of Science is dedicated to advancing scientific knowledge through cutting-edge research and quality education in pure and applied sciences.',
        image: '/science-lab.png',
        programs: [
            { level: 'Undergraduate', name: 'B.Sc. in Physics', duration: '3 Years', seats: 50 },
            { level: 'Undergraduate', name: 'B.Sc. in Chemistry', duration: '3 Years', seats: 50 },
            { level: 'Undergraduate', name: 'B.Sc. in Mathematics', duration: '3 Years', seats: 60 },
            { level: 'Postgraduate', name: 'M.Sc. in Physics', duration: '2 Years', seats: 25 },
            { level: 'Postgraduate', name: 'M.Sc. in Chemistry', duration: '2 Years', seats: 25 },
        ],
        facilities: ['Modern Laboratories', 'Research Centers', 'Computing Facilities', 'Scientific Library'],
        highlights: [
            'State-of-the-art laboratories',
            'Research publications',
            'Industry partnerships',
            'Ph.D. programs available',
        ],
    },
    technology: {
        name: 'Technology',
        fullName: 'Faculty of Technology',
        description: 'The Faculty of Technology focuses on providing world-class technical education and fostering innovation in engineering and technology fields.',
        image: '/science-lab.png',
        programs: [
            { level: 'Undergraduate', name: 'B.Tech in Computer Science', duration: '4 Years', seats: 60 },
            { level: 'Undergraduate', name: 'B.Tech in Electronics', duration: '4 Years', seats: 50 },
            { level: 'Postgraduate', name: 'M.Tech in Computer Science', duration: '2 Years', seats: 30 },
            { level: 'Postgraduate', name: 'MCA', duration: '2 Years', seats: 40 },
        ],
        facilities: ['Advanced Computer Labs', 'Electronics Workshop', 'Innovation Hub', 'Project Labs'],
        highlights: [
            'Industry-oriented curriculum',
            'Internship opportunities',
            'Placement assistance',
            'Startup incubation support',
        ],
    },
    commerce: {
        name: 'Commerce',
        fullName: 'Faculty of Commerce',
        description: 'The Faculty of Commerce prepares students for successful careers in business, finance, and management through rigorous academic programs.',
        image: '/arts-classroom.png',
        programs: [
            { level: 'Undergraduate', name: 'B.Com', duration: '3 Years', seats: 80 },
            { level: 'Undergraduate', name: 'BBA', duration: '3 Years', seats: 60 },
            { level: 'Postgraduate', name: 'M.Com', duration: '2 Years', seats: 40 },
            { level: 'Postgraduate', name: 'MBA', duration: '2 Years', seats: 50 },
        ],
        facilities: ['Business Lab', 'Seminar Rooms', 'Library', 'Computer Center'],
        highlights: [
            'Industry expert sessions',
            'Case study methodology',
            'Corporate internships',
            'Entrepreneurship development',
        ],
    },
    law: {
        name: 'Law',
        fullName: 'Faculty of Law',
        description: 'The Faculty of Law is dedicated to providing quality legal education and producing competent legal professionals.',
        image: '/arts-classroom.png',
        programs: [
            { level: 'Undergraduate', name: 'LL.B (3 Year)', duration: '3 Years', seats: 60 },
            { level: 'Undergraduate', name: 'B.A. LL.B (Integrated)', duration: '5 Years', seats: 50 },
            { level: 'Postgraduate', name: 'LL.M', duration: '2 Years', seats: 30 },
        ],
        facilities: ['Moot Court', 'Law Library', 'Legal Aid Clinic', 'Seminar Halls'],
        highlights: [
            'Experienced legal practitioners as faculty',
            'Moot court competitions',
            'Legal aid services',
            'Internship with law firms',
        ],
    },
    management: {
        name: 'Management',
        fullName: 'Faculty of Management',
        description: 'The Faculty of Management offers comprehensive programs in business administration and management studies.',
        image: '/arts-classroom.png',
        programs: [
            { level: 'Undergraduate', name: 'BBA', duration: '3 Years', seats: 60 },
            { level: 'Postgraduate', name: 'MBA', duration: '2 Years', seats: 60 },
            { level: 'Postgraduate', name: 'PGDM', duration: '2 Years', seats: 40 },
        ],
        facilities: ['Management Lab', 'Case Study Room', 'Business Library', 'Auditorium'],
        highlights: [
            'Industry-academia interface',
            'Live projects',
            'International exposure',
            'Placement support',
        ],
    },
};

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const dept = departmentData[slug];

    if (!dept) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold text-primary mb-4">Department Not Found</h1>
                <Link href="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={dept.image}
                        alt={dept.fullName}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
                <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
                    <div className="text-white max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{dept.fullName}</h1>
                        <p className="text-lg md:text-xl text-white/90">{dept.description}</p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Programs Offered */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="text-primary" />
                                    Programs Offered
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {['Undergraduate', 'Postgraduate'].map((level) => {
                                        const programs = dept.programs.filter((p: any) => p.level === level);
                                        if (programs.length === 0) return null;

                                        return (
                                            <div key={level}>
                                                <h3 className="text-lg font-semibold text-primary mb-3">{level} Programs</h3>
                                                <div className="space-y-3">
                                                    {programs.map((program: any, idx: number) => (
                                                        <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                                                            <div>
                                                                <h4 className="font-semibold text-foreground">{program.name}</h4>
                                                                <p className="text-sm text-muted-foreground">Duration: {program.duration} | Seats: {program.seats}</p>
                                                            </div>
                                                            <Link href="/admissions/apply">
                                                                <Button size="sm">Apply Now</Button>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Facilities */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Award className="text-primary" />
                                    Facilities
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {dept.facilities.map((facility: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                                            <span className="text-sm">{facility}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Apply */}
                        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-3">Ready to Apply?</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Start your journey with {dept.fullName} today!
                                </p>
                                <Link href="/admissions/apply">
                                    <Button size="lg" className="w-full">
                                        Apply Now
                                        <ArrowRight size={18} className="ml-2" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Department Highlights */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Department Highlights</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {dept.highlights.map((highlight: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Contact Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Need Help?</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-sm text-muted-foreground">
                                    For more information about our programs, please contact:
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p className="font-medium">Department Office</p>
                                    <p className="text-muted-foreground">Phone: +91 361 2570000</p>
                                    <p className="text-muted-foreground">Email: {dept.name.toLowerCase()}@gauhati.ac.in</p>
                                </div>
                                <Link href="/contact">
                                    <Button variant="outline" size="sm" className="w-full mt-4">
                                        Contact Us
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

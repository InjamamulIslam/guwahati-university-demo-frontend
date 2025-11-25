import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';
import { fetchNotices, fetchEvents } from '@/lib/api';
import { Award, Calendar, Users } from 'lucide-react';
import ImageSlider from '@/components/ui/ImageSlider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

// Define types for data
interface Notice {
  id: number;
  title: string;
  date: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  month: string;
  location: string;
}

export default async function Home() {
  // Fetch data from API (Server Component)
  let notices: Notice[] = [];
  let events: Event[] = [];

  try {
    notices = await fetchNotices();
    events = await fetchEvents();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    // Fallback data or empty state
    notices = [
      { id: 1, title: 'Admission Notification 2025-26 (Offline)', date: 'Nov 20, 2025' },
    ];
  }

  return (
    <div className="flex flex-col gap-10 pb-10">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-banner.png"
            alt="Gauhati University Campus"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 text-white">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to <br /> Gauhati University
          </h1>
          <p className="text-xl max-w-2xl mb-8 text-white/90">
            Excellence in Education, Research, and Innovation.
            Empowering minds for a better tomorrow.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="secondary">Explore Programs</Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white">
              Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Academic Faculties Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">Academic Faculties</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of academic faculties offering world-class education and research opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: 'Arts',
              fullName: 'Faculty of Arts',
              description: 'Humanities, Languages & Social Sciences',
              icon: '📚',
              color: 'border-purple-500/20 hover:border-purple-500'
            },
            {
              name: 'Commerce',
              fullName: 'Faculty of Commerce',
              description: 'Business, Economics & Management',
              icon: '💼',
              color: 'border-blue-500/20 hover:border-blue-500'
            },
            {
              name: 'Law',
              fullName: 'Faculty of Law',
              description: 'Legal Studies & Jurisprudence',
              icon: '⚖️',
              color: 'border-amber-500/20 hover:border-amber-500'
            },
            {
              name: 'Medicine',
              fullName: 'Faculty of Medicine',
              description: 'Medical & Health Sciences',
              icon: '🏥',
              color: 'border-red-500/20 hover:border-red-500'
            },
            {
              name: 'Science',
              fullName: 'Faculty of Science',
              description: 'Pure & Applied Sciences',
              icon: '🔬',
              color: 'border-green-500/20 hover:border-green-500'
            },
            {
              name: 'Technology',
              fullName: 'Faculty of Technology',
              description: 'Engineering & Computer Science',
              icon: '💻',
              color: 'border-indigo-500/20 hover:border-indigo-500'
            },
          ].map((faculty) => (
            <Link key={faculty.name} href={`/faculties/${faculty.name.toLowerCase()}`} className="h-full">
              <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 ${faculty.color} h-full bg-card/50 backdrop-blur-sm overflow-hidden flex flex-col`}>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {faculty.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">
                        {faculty.fullName}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {faculty.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border/50 flex-shrink-0">
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Explore Faculty</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vice Chancellor's Message */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-primary mb-6">About the University</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Gauhati University is one of the premier institutions of higher education in Northeast India and one of the most sought-after postgraduate institutions. We have been a top-ranking institute (placed within the top 1.12% of all institutes) in the National Institutional Ranking Framework (NIRF).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 1948, the university has a rich history of academic excellence and contributes significantly to the region's development.
          </p>
          <Button variant="outline" className="mt-4">Read More</Button>

          {/* Image Slider */}
          <ImageSlider />

          {/* Achievements */}

        </div>

        {/* Quick Links / Notices */}
        <div className="space-y-6">
          <Card className="h-full">
            <CardHeader className="pb-2">
              <Tabs defaultValue="notices" className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl text-primary">Updates Center</CardTitle>
                  <TabsList>
                    <TabsTrigger value="notices">Notices</TabsTrigger>
                    <TabsTrigger value="events">Events</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="notices" className="mt-0">
                  <CardContent className="p-0 space-y-4">
                    {notices.map((notice) => (
                      <div key={notice.id} className="border-b border-border pb-2 last:border-0 last:pb-0">
                        <Link href="#" className="block hover:text-primary transition-colors">
                          <p className="text-sm font-medium">{notice.title}</p>
                          <span className="text-xs text-muted-foreground">{notice.date}</span>
                        </Link>
                      </div>
                    ))}
                    <Button variant="ghost" size="sm" className="w-full mt-2">View All Notices</Button>
                  </CardContent>
                </TabsContent>

                <TabsContent value="events" className="mt-0">
                  <CardContent className="p-0 space-y-4">
                    {events.map((event) => (
                      <div key={event.id} className="flex gap-3">
                        <div className="bg-secondary/10 text-secondary-foreground p-2 rounded text-center min-w-[60px]">
                          <span className="block text-lg font-bold">{event.date}</span>
                          <span className="text-xs uppercase">{event.month}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{event.title}</h4>
                          <p className="text-xs text-muted-foreground">{event.location}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="ghost" size="sm" className="w-full mt-2">View All Events</Button>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>
      </div>



      {/* Leadership Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Chancellor & Vice Chancellor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Chancellor */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/chancellor.png"
                    alt="Shri Laxman Prasad Acharya"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Shri Laxman Prasad Acharya</h3>
                <p className="text-primary font-semibold mb-4">Chancellor</p>
                <Link href="/leadership/chancellor">
                  <Button variant="outline" size="sm">View Details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Vice Chancellor */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/vice-chancellor.png"
                    alt="Prof Nani Gopal Mahanta"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Prof Nani Gopal Mahanta</h3>
                <p className="text-primary font-semibold mb-4">Vice Chancellor</p>
                <Link href="/leadership/vice-chancellor">
                  <Button variant="outline" size="sm">View Details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Departments Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-primary">Our Departments</h2>
            <p className="text-muted-foreground mt-2">Explore our diverse range of academic disciplines</p>
          </div>
          <Link href="/departments"><Button variant="outline">View All Departments</Button></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Arts', 'Science', 'Technology', 'Commerce', 'Law', 'Management'].map((dept) => (
            <Link key={dept} href={`/departments/${dept.toLowerCase()}`} className="h-full">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{dept}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">Discover programs and research in {dept}.</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-12 bg-muted/30">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">University Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* NIRF Ranking */}
          <Card className="hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-yellow-600">NIRF</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">33<sup className="text-lg">rd</sup></h3>
              <p className="text-sm text-muted-foreground">Ranked among Top Universities in India (2025)</p>
            </CardContent>
          </Card>

          {/* NAAC Accreditation */}
          <Card className="hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">A+</h3>
              <p className="text-sm text-muted-foreground">NAAC Accredited Grade (CGPA 3.60)</p>
            </CardContent>
          </Card>

          {/* Years of Excellence */}
          <Card className="hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">1948</h3>
              <p className="text-sm text-muted-foreground">Established - 75+ Years of Excellence</p>
            </CardContent>
          </Card>

          {/* Faculty Strength */}
          <Card className="hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-sm text-muted-foreground">Dedicated Faculty Members</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16 mt-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">75+</h3>
            <p className="text-primary-foreground/80">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">40+</h3>
            <p className="text-primary-foreground/80">Departments</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">350+</h3>
            <p className="text-primary-foreground/80">Affiliated Colleges</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">5000+</h3>
            <p className="text-primary-foreground/80">Students</p>
          </div>
        </div>
      </section>
    </div>
  );
}

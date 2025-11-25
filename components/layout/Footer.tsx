import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-border bg-muted/50">
            <div className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">Gauhati University</h3>
                        <p className="text-sm text-muted-foreground">
                            Gopinath Bordoloi Nagar,<br />
                            Guwahati - 781014,<br />
                            Assam, India.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">About Us</a></li>
                            <li><a href="#" className="hover:text-primary">Administration</a></li>
                            <li><a href="#" className="hover:text-primary">Academic Calendar</a></li>
                            <li><a href="#" className="hover:text-primary">Library</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Portals</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">Student Portal</a></li>
                            <li><a href="#" className="hover:text-primary">Faculty Portal</a></li>
                            <li><a href="#" className="hover:text-primary">Alumni</a></li>
                            <li><a href="#" className="hover:text-primary">Examinations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Email: registrar@gauhati.ac.in</li>
                            <li>Phone: +91-361-2570415</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Gauhati University. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

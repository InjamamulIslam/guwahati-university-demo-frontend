"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

export const ApplicationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        course: '',
        board10: '',
        percentage10: '',
        board12: '',
        percentage12: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        console.log('Form Submitted:', formData);
        nextStep(); // Go to success step
    };

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -z-10" />
                {[1, 2, 3, 4].map((s) => (
                    <div
                        key={s}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                            }`}
                    >
                        {step > s ? <CheckCircle size={20} /> : s}
                    </div>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>
                        {step === 1 && "Personal Information"}
                        {step === 2 && "Academic Details"}
                        {step === 3 && "Document Upload"}
                        {step === 4 && "Review & Submit"}
                        {step === 5 && "Application Submitted"}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {step === 5 ? (
                        <div className="text-center py-8">
                            <div className="flex justify-center mb-4">
                                <CheckCircle size={64} className="text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h3>
                            <p className="text-muted-foreground mb-6">
                                Your application ID is <span className="font-mono font-bold">GU-2025-APP-001</span>.
                                Please keep this for future reference.
                            </p>
                            <Button onClick={() => window.location.href = '/'}>Return to Home</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {step === 1 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">First Name</label>
                                        <Input name="firstName" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Last Name</label>
                                        <Input name="lastName" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email</label>
                                        <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Phone</label>
                                        <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Date of Birth</label>
                                        <Input name="dob" type="date" value={formData.dob} onChange={handleChange} required />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium">Address</label>
                                        <Input name="address" value={formData.address} onChange={handleChange} required />
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium">Applying For Course</label>
                                        <Input name="course" value={formData.course} onChange={handleChange} placeholder="e.g. BA English" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">10th Board</label>
                                        <Input name="board10" value={formData.board10} onChange={handleChange} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">10th Percentage</label>
                                        <Input name="percentage10" type="number" value={formData.percentage10} onChange={handleChange} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">12th Board</label>
                                        <Input name="board12" value={formData.board12} onChange={handleChange} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">12th Percentage</label>
                                        <Input name="percentage12" type="number" value={formData.percentage12} onChange={handleChange} required />
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                                        <p className="text-muted-foreground mb-2">Upload Passport Size Photo</p>
                                        <Button variant="outline" type="button">Choose File</Button>
                                    </div>
                                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                                        <p className="text-muted-foreground mb-2">Upload Signature</p>
                                        <Button variant="outline" type="button">Choose File</Button>
                                    </div>
                                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                                        <p className="text-muted-foreground mb-2">Upload Marksheets (PDF)</p>
                                        <Button variant="outline" type="button">Choose File</Button>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="space-y-4">
                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="font-bold mb-2">Personal Details</h4>
                                        <p>Name: {formData.firstName} {formData.lastName}</p>
                                        <p>Email: {formData.email}</p>
                                        <p>Phone: {formData.phone}</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="font-bold mb-2">Academic Details</h4>
                                        <p>Course: {formData.course}</p>
                                        <p>12th Percentage: {formData.percentage12}%</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <input type="checkbox" required id="declare" />
                                        <label htmlFor="declare">I declare that all information provided is true to the best of my knowledge.</label>
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between mt-8">
                                {step > 1 && (
                                    <Button type="button" variant="outline" onClick={prevStep}>
                                        <ChevronLeft size={16} className="mr-2" /> Previous
                                    </Button>
                                )}
                                {step < 4 ? (
                                    <Button type="button" onClick={nextStep} className="ml-auto">
                                        Next <ChevronRight size={16} className="ml-2" />
                                    </Button>
                                ) : (
                                    <Button type="submit" className="ml-auto bg-green-600 hover:bg-green-700">
                                        Submit Application
                                    </Button>
                                )}
                            </div>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const response = await api.post('/login', { username, password });
            const { role } = response.data;

            // Store token (mock)
            localStorage.setItem('token', response.data.token);

            if (role === 'student') {
                router.push('/student-portal');
            } else if (role === 'faculty') {
                router.push('/faculty-portal');
            } else {
                router.push('/');
            }
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-[80vh]">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-primary">Portal Login</CardTitle>
                    <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <Input
                            label="Username / Email"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p className="text-sm text-red-500">{error}</p>}

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-input" />
                                Remember me
                            </label>
                            <a href="#" className="text-primary hover:underline">Forgot Password?</a>
                        </div>

                        <Button className="w-full" size="lg" type="submit">Sign In</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

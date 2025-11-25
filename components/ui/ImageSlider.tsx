'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Slide {
    id: number;
    image: string;
    title: string;
    description: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: '/slider/library.png',
        title: 'State-of-the-Art Library',
        description: 'Empowering research and learning with extensive digital and physical resources.',
    },
    {
        id: 2,
        image: '/slider/campus.png',
        title: 'Green & Vibrant Campus',
        description: 'A serene environment fostering creativity and academic excellence.',
    },
    {
        id: 3,
        image: '/slider/auditorium.png',
        title: 'World-Class Facilities',
        description: 'Hosting international seminars, cultural events, and academic conferences.',
    },
];

export default function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
    };

    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-xl group mt-8">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500 ease-out translate-y-0">
                        <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{slide.title}</h3>
                        <p className="text-white/90 max-w-lg drop-shadow-sm">{slide.description}</p>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/20 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevSlide}
            >
                <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/20 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextSlide}
            >
                <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Dots */}
            <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                            setIsAutoPlaying(false);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

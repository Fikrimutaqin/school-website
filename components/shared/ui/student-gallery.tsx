"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GalleryItem } from "@/types/student/student.type";

interface StudentGalleryProps {
    data: {
        title: string;
        subtitle: string;
        linkText: string;
        linkUrl: string;
        items: GalleryItem[];
    };
}

export default function StudentGallery({ data }: StudentGalleryProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {data.title}
                        </h2>
                        <p className="text-sm sm:text-base text-slate-500 font-light mt-2 max-w-2xl leading-relaxed">
                            {data.subtitle}
                        </p>
                    </div>

                    <Link
                        href={data.linkUrl}
                        className="px-6 py-3 border border-primary/50 text-primary hover:bg-primary/5 rounded-full text-sm font-semibold transition-all duration-300 shadow-2xs shrink-0 w-fit flex items-center gap-1.5 group cursor-pointer"
                    >
                        <span>{data.linkText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                </div>

                {/* Gallery Cards Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.items.map((item) => (
                        <Card
                            key={item.id}
                            className="relative aspect-4/5 rounded-[2rem] overflow-hidden shadow-md border-none group hover:shadow-xl transition-all duration-500 hover:scale-[1.01] cursor-pointer"
                        >
                            {/* Backdrop Image */}
                            <Image
                                src={item.imageUrl}
                                fill
                                sizes="(max-w-768px) 100vw, 400px"
                                alt={item.title}
                                loading="eager"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Black gradient overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent z-10" />

                            {/* Centered Category or Title Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                                <h3 className="text-white font-extrabold text-base sm:text-lg leading-snug drop-shadow-sm tracking-tight transition-transform duration-300 group-hover:translate-x-0.5">
                                    {item.title}
                                </h3>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}

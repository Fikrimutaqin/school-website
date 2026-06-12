"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Card } from "@/components/ui/card";
import { AboutSectionProps } from "@/types/about/about.type";



// Helper component to render Lucide Icons dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};

export default function AboutSection({ data }: AboutSectionProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image and Experience Card */}
                    <div className="lg:col-span-5 relative w-full flex justify-center">
                        {/* Background subtle circle blob for design aesthetics */}
                        <div className="absolute -left-6 -top-6 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl z-0" />

                        <div className="relative z-10 w-full max-w-[480px] aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                            <Image
                                src={data.imageUrl}
                                alt="Gedung Sekolah"
                                fill
                                sizes="(max-w-768px) 100vw, 480px"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                            />
                        </div>

                        {/* Overlapping Experience Card */}
                        <Card className="absolute bottom-6 right-6 lg:-right-6 lg:bottom-10 z-20 shadow-2xl bg-white border border-slate-100 p-6 rounded-3xl w-[190px] flex flex-col gap-1.5 transition-transform duration-300 hover:-translate-y-1">
                            <span className="text-4xl md:text-5xl font-extrabold text-primary leading-none tracking-tight">
                                {data.experienceYears}
                            </span>
                            <span className="text-xs md:text-sm font-semibold text-slate-500 leading-snug">
                                {data.experienceText}
                            </span>
                        </Card>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <span className="text-xs lg:text-sm font-bold text-primary tracking-widest uppercase mb-3 block">
                            {data.tagline}
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl">
                            {data.title}
                        </h2>

                        {/* Thin horizontal red line */}
                        <div className="w-20 h-1 bg-primary rounded-full mt-3 mb-6" />

                        <p className="text-sm lg:text-base text-slate-600 leading-relaxed max-w-3xl mb-8 font-light">
                            {data.description}
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                            {data.features.map((feature, index) => (
                                <Card
                                    key={index}
                                    className="p-5 flex items-start gap-4 bg-white border border-slate-200/80 rounded-2xl shadow-xs transition-shadow duration-300 hover:shadow-md"
                                >
                                    <div className="p-2.5 bg-primary/5 rounded-xl text-primary shrink-0">
                                        <DynamicIcon name={feature.iconName} className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-semibold text-slate-800 text-sm lg:text-base leading-snug">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs lg:text-sm text-slate-500 leading-relaxed font-light">
                                            {feature.description}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Link Button */}
                        <Link
                            href={data.linkUrl}
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm lg:text-base transition-colors duration-200 hover:text-primary/80 group w-fit"
                        >
                            <span>{data.linkText}</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

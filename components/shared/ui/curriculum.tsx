"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CurriculumSectionProps } from "@/types/curriculum/curriculum.type";

// Helper component to render Lucide Icons dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as any)[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};

export default function CurriculumSection({ data }: CurriculumSectionProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 sm:mb-16">
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-2">
                            <span className="text-primary text-xs lg:text-sm font-bold tracking-widest uppercase">
                                {data.tagline}
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-3">
                            {data.title}
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-slate-200/80">
                        <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* Curriculum Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.items.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-slate-50/50 hover:bg-white border border-slate-200/40 p-8 flex flex-col min-h-[350px] rounded-[2rem] shadow-xs relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5"
                        >
                            {/* Decorative background circle blob in top-right */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full filter blur-xl z-0 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full justify-between flex-1">
                                {/* Icon Box */}
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-primary/25">
                                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-slate-500 leading-relaxed font-light mb-8 flex-1">
                                    {item.description}
                                </p>

                                {/* Footer / Industry Readiness Progress Bar */}
                                <div className="flex flex-col gap-2 w-full mt-auto">
                                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-wider">
                                        <span>KESIAPAN INDUSTRI</span>
                                        <span>{item.industryReadiness}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${item.industryReadiness}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}

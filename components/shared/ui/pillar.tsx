"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PillarSectionProps } from "@/types/pillar/pillar.type";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

// Helper component to render Lucide Icons dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};

export default function PillarSection({ data }: PillarSectionProps) {
    const featuredPillar = data.items.find(item => item.isFeatured);
    const regularPillars = data.items.filter(item => !item.isFeatured);

    const topRegular = regularPillars[0];
    const bottomRegulars = regularPillars.slice(1);

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
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm lg:text-base transition-colors duration-200 hover:text-primary/80 group shrink-0 w-fit"
                    >
                        <span>{data.linkText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Main Pillars Grid (1 Column for Mobile, 3 Columns for Desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

                    {/* 1. Left Featured Pillar (STEM Excellence) */}
                    {featuredPillar && (
                        <Card className="lg:col-span-2 relative flex flex-col justify-end min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group border-none">
                            {/* Background image */}
                            {featuredPillar.imageUrl && (
                                <Image
                                    src={featuredPillar.imageUrl}
                                    fill
                                    alt={featuredPillar.title}
                                    loading="eager"
                                    sizes="1/3"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            )}
                            {/* Brand-red gradient overlay for visual hierarchy */}
                            <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-primary/40 group-hover:via-primary/30 transition-colors duration-500" />

                            {/* Card Content */}
                            <div className="relative z-10 p-8 flex flex-col justify-end text-white">
                                <span className="bg-white/20 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm w-fit mb-3 backdrop-blur-xs">
                                    FEATURED
                                </span>
                                <h3 className="text-2xl font-extrabold tracking-tight mb-2">
                                    {featuredPillar.title}
                                </h3>
                                <p className="text-sm text-white/90 font-light leading-relaxed">
                                    {featuredPillar.description}
                                </p>
                            </div>
                        </Card>
                    )}

                    {/* 2. Right Nesting Columns */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Top row: Humanities & Social Sciences (Full Width of Right Section) */}
                        {topRegular && (
                            <Card className="sm:col-span-2 bg-blue-50/40 border border-slate-200/40 p-8 flex flex-col sm:flex-row gap-6 items-start rounded-3xl shadow-xs hover:shadow-md transition-all duration-300">
                                <div className="p-3.5 bg-white border border-slate-100 rounded-2xl text-primary shrink-0 shadow-xs">
                                    <DynamicIcon name={topRegular.iconName} className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                                        {topRegular.title}
                                    </h3>
                                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed font-light">
                                        {topRegular.description}
                                    </p>
                                </div>
                            </Card>
                        )}

                        {/* Bottom row: The Arts and Language (Split cols) */}
                        {bottomRegulars.map((item) => {
                            const isSolidRed = item.variant === "solid-red";
                            return (
                                <Card
                                    key={item.id}
                                    className={`p-8 flex flex-col gap-6 items-start rounded-3xl shadow-xs hover:shadow-md transition-all duration-300 ${isSolidRed
                                        ? "bg-primary text-white border-primary shadow-sm"
                                        : "bg-blue-50/40 border border-slate-200/40 text-slate-900"
                                        }`}
                                >
                                    <div className={`p-3.5 rounded-2xl shrink-0 shadow-xs ${isSolidRed
                                        ? "bg-white/10 text-white"
                                        : "bg-white border border-slate-100 text-primary"
                                        }`}>
                                        <DynamicIcon name={item.iconName} className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className={`text-xl font-bold tracking-tight mb-2 ${isSolidRed ? "text-white" : "text-slate-900"
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-xs md:text-sm leading-relaxed font-light ${isSolidRed ? "text-white/90" : "text-slate-600"
                                            }`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}

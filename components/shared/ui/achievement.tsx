"use client";

import * as LucideIcons from "lucide-react";
import { BadgeCheck, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AchievementSectionProps } from "@/types/achievement/achievement.type";

// Helper component to render Lucide Icons dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};

export default function AchievementSection({ data }: AchievementSectionProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-slate-50/50">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Header Tagline */}
                <div className="inline-block bg-primary/5 text-primary text-xs lg:text-sm px-4 py-1.5 rounded-full font-bold tracking-widest uppercase mb-4 border border-primary/10">
                    {data.tagline}
                </div>

                {/* Main Section Title */}
                <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                    {data.title}
                </h2>

                {/* Subdescription */}
                <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-light leading-relaxed mb-12 sm:mb-16">
                    {data.description}
                </p>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {data.items.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-white border border-slate-200/60 p-5 flex flex-col rounded-[2rem] shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5"
                        >
                            {/* Icon Box */}
                            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-3 border border-primary/5">
                                <DynamicIcon name={item.iconName} className="w-6 h-6" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-500 leading-relaxed font-light mb-4 flex-1">
                                {item.description}
                            </p>

                            {/* Footer / Category Badge */}
                            <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-auto">
                                <BadgeCheck className="w-4 h-4 text-primary" />
                                <span>{item.category}</span>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}

"use client";

import { Card } from "@/components/ui/card";
import { MajorItem } from "@/types/major/major.type";
import { Briefcase, FlaskConical } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

// Helper component to render Lucide Icons dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};

interface MajorItemSectionProps {
    data: MajorItem;
    isReversed: boolean;
}

export default function MajorItemSection({ data, isReversed }: MajorItemSectionProps) {
    return (
        <section 
            id={`major-${data.id}`}
            className="w-full py-16 lg:py-20 bg-white border-b border-slate-100 last:border-b-0 scroll-mt-24"
        >
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Details & Skills (ordered 2 if reversed on desktop) */}
                    <div className={`lg:col-span-7 flex flex-col items-start text-left ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                    }`}>
                        {/* Category Badge */}
                        <span className="bg-red-50 text-primary border border-red-100 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
                            {data.category}
                        </span>

                        {/* Title */}
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                            {data.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed mb-8 max-w-2xl">
                            {data.description}
                        </p>

                        {/* Skills focus grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                            {data.skills.map((skill) => (
                                <Card 
                                    key={skill.id}
                                    className="bg-white border border-slate-200/50 p-5 flex flex-col items-start rounded-2xl shadow-xs transition-shadow duration-300 hover:shadow-md w-full"
                                >
                                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-3.5 border border-primary/5 shadow-3xs">
                                        <DynamicIcon name={skill.iconName} className="w-5 h-5 text-primary" />
                                    </div>
                                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 tracking-tight">
                                        {skill.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                                        {skill.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Career & Lab Details (ordered 1 if reversed on desktop) */}
                    <div className={`lg:col-span-5 flex flex-col gap-6 w-full ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                    }`}>
                        {/* Career prospects card */}
                        <Card className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-[2rem] shadow-xs flex flex-col items-start w-full">
                            <div className="flex items-center gap-3 font-bold text-slate-900 text-lg sm:text-xl border-b border-slate-100 pb-4 mb-4 w-full text-left">
                                <Briefcase className="w-5 h-5 text-primary shrink-0" />
                                <span>Prospek Karir</span>
                            </div>
                            <ul className="flex flex-col gap-3 w-full text-left">
                                {data.careers.map((career, idx) => (
                                    <li key={idx} className="flex items-center gap-2.5 text-slate-600 text-sm font-medium">
                                        <div className="size-1.5 rounded-full bg-primary shrink-0" />
                                        <span>{career}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* Lab Facilities card */}
                        <Card className="bg-[#f0f4ff]/30 border border-slate-200/30 p-6 sm:p-8 rounded-[2rem] shadow-xs flex flex-col items-start w-full text-left">
                            <div className="flex items-center gap-3 font-bold text-slate-900 text-lg sm:text-xl pb-3 w-full">
                                <FlaskConical className="w-5 h-5 text-primary shrink-0" />
                                <span>Fasilitas Lab</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                                {data.labDetails}
                            </p>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    );
}

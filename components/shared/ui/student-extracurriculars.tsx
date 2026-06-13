"use client";

import { Card } from "@/components/ui/card";
import { ExtracurricularItem } from "@/types/student/student.type";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

// Helper component to render Lucide Icons dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};

interface StudentExtracurricularsProps {
    data: ExtracurricularItem[];
}

export default function StudentExtracurriculars({ data }: StudentExtracurricularsProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-white" id="explorasi">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Eksplorasi Minat & Bakat
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 font-light mt-4 leading-relaxed">
                        Berbagai pilihan ekstrakurikuler yang dirancang untuk mengasah kemampuan teknis, kepemimpinan, dan kerja sama tim.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-[#f3f7ff] border border-slate-200/20 p-6 flex flex-col items-start rounded-3xl shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 w-full"
                        >
                            {/* Icon Box */}
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 border border-primary/5 shadow-2xs">
                                <DynamicIcon name={item.iconName} className="w-5 h-5 text-primary" />
                            </div>

                            {/* Category Label */}
                            <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 block">
                                {item.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                                {item.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

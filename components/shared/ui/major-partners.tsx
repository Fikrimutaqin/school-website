"use client";

import { PartnerItem } from "@/types/major/major.type";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

// Helper component to render Lucide Icons dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};

interface MajorPartnersProps {
    data: {
        title: string;
        subtitle: string;
        items: PartnerItem[];
    };
}

export default function MajorPartners({ data }: MajorPartnersProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-slate-50/30">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header */}
                <div className="mb-12 max-w-3xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {data.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 font-light mt-4 leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                {/* Partners List */}
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-70">
                    {data.items.map((partner) => (
                        <div 
                            key={partner.id}
                            className="flex items-center gap-3 select-none hover:opacity-100 transition-opacity duration-300"
                        >
                            <DynamicIcon name={partner.iconName} className="w-6 h-6 text-slate-400" />
                            <span className="text-sm sm:text-base font-extrabold tracking-widest text-slate-400">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

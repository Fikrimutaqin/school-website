import CtaSection from "@/components/shared/ui/cta";
import HeroSection from "@/components/shared/ui/hero";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DEFAULT_CTA_DATA } from "@/types/cta/cta.type";
import { DEFAULT_HERO_DATA_CURRICULUM } from "@/types/hero/hero.type";
import { DEFAULT_CURRICULUM_PAGE_DATA } from "@/types/curriculum/curriculum.type";
import PillarSection from "@/components/shared/ui/pillar";
import { DEFAULT_PILLAR_DATA } from "@/types/pillar/pillar.type";
import SpecialtySection from "@/components/shared/ui/specialty";
import { DEFAULT_SPECIALTY_DATA } from "@/types/specialty/specialty.type";

// Helper component to render Lucide Icons dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};

export default function CurriculumPage() {
    return (
        <div className="w-full flex flex-col">
            <HeroSection data={DEFAULT_HERO_DATA_CURRICULUM} />
            <section className="w-full py-16 lg:py-20 bg-slate-50/50">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {DEFAULT_CURRICULUM_PAGE_DATA.items.map((item) => (
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
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <PillarSection data={DEFAULT_PILLAR_DATA} />
            <SpecialtySection data={DEFAULT_SPECIALTY_DATA} />
            <CtaSection data={DEFAULT_CTA_DATA} />
        </div>
    );
}
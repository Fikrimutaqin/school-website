import HeroSection from "@/components/shared/ui/hero";
import { Card } from "@/components/ui/card";
import { DEFAULT_HERO_DATA_PROFILE } from "@/types/hero/hero.type";
import { DEFAULT_CARD_DATA } from "@/types/card/card.type";
import { CheckCircle2 } from "lucide-react";
import HistorySection from "@/components/shared/ui/history";
import { DEFAULT_HISTORY_DATA } from "@/types/history/history.type";
import { DEFAULT_LEADER_DATA } from "@/types/leader/leader.type";
import FacilitySection from "@/components/shared/ui/facility";
import { DEFAULT_FACILITY_DATA } from "@/types/facility/facility.type";
import CtaSection from "@/components/shared/ui/cta";
import { DEFAULT_CTA_DATA } from "@/types/cta/cta.type";
import Image from "next/image";

export default function ProfilePage() {
    return (
        <div className="w-full flex flex-col">
            <HeroSection data={DEFAULT_HERO_DATA_PROFILE} />

            <section className="w-full py-16 lg:py-20 bg-white" id="scroll-down">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {DEFAULT_CARD_DATA.map((item, index) => (
                            <Card
                                key={index}
                                className="p-5 flex items-center justify-center gap-4 bg-slate-50/50 hover:bg-white border border-slate-200/40 rounded-2xl shadow-xs transition-shadow duration-300 hover:shadow-md "
                            >
                                <div className="p-2.5 bg-primary/5 rounded-xl text-primary shrink-0">
                                    <item.icon />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <h3 className="font-semibold text-slate-800 text-sm lg:text-lg leading-snug text-center">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className="text-xs lg:text-base text-slate-500 leading-relaxed font-light text-center">
                                            {item.description}
                                        </p>
                                    )}
                                    {item.listItems && (
                                        <ul className="text-xs list-none list-inside lg:text-sm text-slate-500 leading-relaxed font-light pl-4">
                                            {item.listItems.map((listItem, index) => (
                                                <li className="py-1 flex items-start gap-2" key={index}>
                                                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-1" />
                                                    {listItem}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <HistorySection data={DEFAULT_HISTORY_DATA} />

            <section className="w-full py-16 lg:py-20 bg-slate-50/50">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        Kepemimpinan Sekolah
                    </h2>

                    <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-light leading-relaxed mb-12 sm:mb-16">
                        Dedikasi tim pengajar dan pengelola profesional kami.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {DEFAULT_LEADER_DATA.map((item) => (
                            <Card
                                key={item.id}
                                className="bg-white border border-slate-200/60 p-5 flex flex-col items-center rounded-3xl shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
                                    <Image
                                        src={item.imageUrl}
                                        fill
                                        sizes="(max-w-768px) 100vw, 350px"
                                        loading="eager"
                                        alt={item.title}
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                                {/* Content */}
                                <div className="flex flex-col items-center text-center mt-5">
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs md:text-sm font-bold text-primary tracking-wide uppercase mt-1">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <FacilitySection data={DEFAULT_FACILITY_DATA} />
            <CtaSection data={DEFAULT_CTA_DATA} />
        </div>
    );
}
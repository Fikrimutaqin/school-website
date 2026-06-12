"use client";

import { MapsSectionProps } from "@/types/maps/maps.type";

export default function MapsSection({ data }: MapsSectionProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-slate-50/50">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-primary text-xs lg:text-sm font-bold tracking-widest uppercase block mb-3">
                    {data.tagline}
                </span>

                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                    {data.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7 w-full">
                        <div className="relative w-full aspect-video md:aspect-4/3 lg:aspect-16/10 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200/60 bg-slate-100 group transition-all duration-500 hover:shadow-xl">
                            <iframe
                                src={data.mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full filter grayscale contrast-[1.1] transition-all duration-700 ease-out group-hover:grayscale-0"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

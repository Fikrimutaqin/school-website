"use client";

import Image from "next/image";
import { HistorySectionProps } from "@/types/history/history.type";

export default function HistorySection({ data }: HistorySectionProps) {
    return (
        <section className="relative w-full py-16 lg:py-20 bg-slate-50/30 overflow-hidden">
            {/* Title Section */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Sejarah & Perjalanan
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                {/* Central vertical line for desktop, left line for mobile */}
                <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-[2px] bg-primary -translate-x-1/2" />

                <div className="space-y-16 lg:space-y-24">
                    {data.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-16"
                            >
                                {/* Node Dot on Timeline */}
                                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white -translate-x-1/2 z-10 shadow-md top-6 lg:top-1/2 lg:-translate-y-1/2" />

                                {/* Content block */}
                                <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 flex flex-col gap-2.5 ${isEven ? "lg:items-end lg:text-right lg:pr-8" : "lg:order-2 lg:items-start lg:text-left lg:pl-8"
                                    }`}>
                                    <span className="bg-primary text-white text-xs lg:text-sm font-semibold px-4 py-1.5 rounded-full w-fit shadow-xs">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl lg:text-2xl font-extrabold text-slate-900 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm lg:text-base text-slate-600 leading-relaxed font-light max-w-lg">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Image block */}
                                <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                                    }`}>
                                    <div className="relative aspect-16/10 w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-slate-100/80 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            fill
                                            sizes="(max-w-768px) 100vw, 500px"
                                            loading="eager"
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

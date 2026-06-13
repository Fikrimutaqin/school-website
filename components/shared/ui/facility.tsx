"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FacilitySectionProps } from "@/types/facility/facility.type";

export default function FacilitySection({ data }: FacilitySectionProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-slate-50/50">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {data.title}
                        </h2>
                        <p className="text-sm sm:text-base text-slate-500 font-light mt-2 max-w-xl leading-relaxed">
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

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.items.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-white border border-slate-200/50 flex flex-col rounded-3xl overflow-hidden shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-5"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-16/10 overflow-hidden rounded-2xl">
                                <Image
                                    src={item.imageUrl}
                                    fill
                                    sizes="(max-w-768px) 100vw, 400px"
                                    alt={item.title}
                                    loading="eager"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="pt-5 px-3 flex flex-col gap-2.5 flex-1">
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-light flex-1">
                                    {item.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

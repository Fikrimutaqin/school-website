"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SpecialtySectionProps } from "@/types/specialty/specialty.type";

export default function SpecialtySection({ data }: SpecialtySectionProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {data.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 font-light mt-4 leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                {/* Specialties List */}
                <div className="flex flex-col gap-6">
                    {data.items.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-white border border-slate-200/50 p-5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 rounded-3xl shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
                        >
                            {/* Left Side: Image */}
                            <div className="relative w-full lg:w-[350px] aspect-16/10 overflow-hidden rounded-2xl shrink-0">
                                <Image
                                    src={item.imageUrl}
                                    fill
                                    sizes="(max-w-768px) 100vw, 350px"
                                    alt={item.title}
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Middle Side: Content */}
                            <div className="flex-1 flex flex-col items-start w-full text-left justify-center">
                                {/* Stream Label */}
                                <div className="flex items-center gap-3 text-xs lg:text-sm font-bold text-primary tracking-widest uppercase">
                                    <span>STREAM {item.streamNumber}</span>
                                    <div className="w-10 h-[1.5px] bg-primary/30" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm lg:text-base text-slate-500 font-light leading-relaxed mb-6 max-w-3xl">
                                    {item.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-slate-50 text-slate-600 border border-slate-200/40 text-xs font-medium px-3.5 py-1.5 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Action Button */}
                            <Link
                                href={item.linkUrl}
                                className="p-4 border border-slate-200/80 hover:border-primary text-slate-400 hover:text-primary rounded-full hover:bg-primary/5 transition-all duration-300 group/btn self-end lg:self-center lg:ml-auto flex items-center justify-center shrink-0 cursor-pointer shadow-2xs"
                                aria-label={`Detail ${item.title}`}
                            >
                                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

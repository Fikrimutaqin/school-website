"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OsisData } from "@/types/student/student.type";

interface StudentOsisProps {
    data: OsisData;
}

export default function StudentOsis({ data }: StudentOsisProps) {
    return (
        <section className="w-full py-16 lg:py-20 bg-slate-50/30 overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">
                        {/* Tagline Badge with icon */}
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase mb-4">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span>{data.tagline}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                            {data.title}
                        </h2>

                        {/* Quote Box */}
                        <div className="border-l-4 border-primary pl-4 py-1.5 mb-6">
                            <p className="text-slate-700 italic text-sm lg:text-base leading-relaxed font-light">
                                "{data.quote}"
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed mb-8 max-w-xl">
                            {data.description}
                        </p>

                        {/* Join Button */}
                        <Button
                            asChild
                            className="bg-primary hover:bg-primary/95 text-white font-semibold px-8 py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer w-full sm:w-auto"
                        >
                            <Link href={data.btnLink}>
                                <span>{data.btnText}</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:col-span-6 relative w-full flex justify-center z-10">
                        {/* Decorative blur circle */}
                        <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

                        <div className="relative aspect-4/3 w-full max-w-[560px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100/50 hover:scale-[1.01] transition-transform duration-500">
                            <Image
                                src={data.imageUrl}
                                alt={data.title}
                                fill
                                sizes="(max-w-768px) 100vw, 560px"
                                loading="eager"
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

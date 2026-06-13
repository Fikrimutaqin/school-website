"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StudentHeroData } from "@/types/student/student.type";

interface StudentHeroProps {
    data: StudentHeroData;
}

export default function StudentHero({ data }: StudentHeroProps) {
    return (
        <section className="w-full py-16 lg:py-24 bg-linear-to-br from-blue-50/20 via-white to-white overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">
                        {/* Tagline Badge */}
                        <span className="bg-red-50 text-primary border border-red-100 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                            {data.tagline}
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
                            {data.title}
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-xl">
                            {data.description}
                        </p>

                        {/* Action Button */}
                        <Button
                            asChild
                            className="bg-primary hover:bg-primary/95 text-white font-semibold px-8 py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 shadow-md w-full sm:w-auto cursor-pointer"
                        >
                            <Link href={data.btnLink}>
                                {data.btnText}
                            </Link>
                        </Button>
                    </div>

                    {/* Right Side: Image */}
                    <div className="lg:col-span-6 relative w-full flex justify-center z-10">
                        {/* Subtle background blob for aesthetics */}
                        <div className="absolute -right-10 -top-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

                        <div className="relative aspect-4/3 w-full max-w-[560px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100/50 hover:scale-[1.01] transition-transform duration-500">
                            <Image
                                src={data.imageUrl}
                                alt={data.title}
                                fill
                                sizes="(max-w-768px) 100vw, 560px"
                                priority
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

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MajorPageData } from "@/types/major/major.type";

interface MajorHeroProps {
    data: MajorPageData["hero"];
}

export default function MajorHero({ data }: MajorHeroProps) {
    return (
        <div className="w-full flex flex-col">
            {/* Red Hero Banner */}
            <section className="relative w-full py-20 lg:py-28 bg-primary text-white overflow-hidden text-center">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_50%)] pointer-events-none" />
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-6">
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-3xl">
                        {data.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl font-light leading-relaxed">
                        {data.subtitle}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center mt-6 w-full sm:w-auto justify-center">
                        <Button
                            asChild
                            className="bg-white hover:bg-zinc-100 text-primary hover:text-primary font-bold px-8 py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 shadow-md w-full sm:w-auto cursor-pointer"
                        >
                            <Link href={data.primaryBtnLink}>
                                {data.primaryBtnText}
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="bg-transparent hover:bg-white/10 text-white border-2 border-white hover:text-white font-bold px-8 py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 shadow-md w-full sm:w-auto cursor-pointer"
                        >
                            <Link href={data.secondaryBtnLink}>
                                {data.secondaryBtnText}
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Subheader Navigation Links */}
            <div className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-40 py-4.5 shadow-2xs hidden md:block">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-12 text-sm font-semibold text-slate-500">
                    <a href="#major-1" className="hover:text-primary transition-colors cursor-pointer hover:underline underline-offset-4">
                        Teknik Komputer & Jaringan
                    </a>
                    <a href="#major-2" className="hover:text-primary transition-colors cursor-pointer hover:underline underline-offset-4">
                        Akuntansi & Keuangan
                    </a>
                    <a href="#major-3" className="hover:text-primary transition-colors cursor-pointer hover:underline underline-offset-4">
                        Multimedia & Desain Kreatif
                    </a>
                </div>
            </div>
        </div>
    );
}

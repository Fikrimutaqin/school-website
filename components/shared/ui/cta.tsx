"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaSectionProps } from "@/types/cta/cta.type";

export default function CtaSection({ data }: CtaSectionProps) {
    return (
        <section 
            className="relative w-full py-20 lg:py-24 bg-primary text-white overflow-hidden"
            style={
                data.backgroundImageUrl
                    ? {
                          backgroundImage: `url(${data.backgroundImageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                      }
                    : undefined
            }
        >
            {/* Tinted overlay for readability and brand integration */}
            <div className="absolute inset-0 bg-primary/90 z-0" />

            {/* Background design elements for a premium aesthetic */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_50%)] pointer-events-none z-0" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl pointer-events-none z-0" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl pointer-events-none z-0" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl">
                    {data.title}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl font-light leading-relaxed">
                    {data.description}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 w-full sm:w-auto">
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
    );
}

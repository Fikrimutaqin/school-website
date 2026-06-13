"use client";

import { Award, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSectionProps } from "@/types/hero/hero.type";
import { useTypewriter } from "@/hooks/use-typewriter";

export default function HeroSection({ data }: HeroSectionProps) {
    const words = data.titleHighlight
        ? ["Leaders", "Innovators", "Achievers"]
        : [];

    const typedText = useTypewriter({ words });

    return (
        <section
            className={`relative w-full h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center text-center overflow-hidden ${!data.backgroundImageUrl ? "bg-primary/80" : ""
                }`}
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
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Content Container */}
            <div className="relative z-20 max-w-5xl px-6 flex flex-col items-center gap-6 md:gap-8 animate-fade-in">

                {/* Badge (Pill shape) */}
                {data.badgeText && (
                    <div className="inline-flex items-center gap-2 bg-transparent px-4 py-2 text-white text-xs lg:text-base font-semibold tracking-wider border-b-2 transition-all duration-300">
                        <Award className="w-4 h-4 text-white" />
                        <span>{data.badgeText}</span>
                    </div>
                )}

                {/* Main Heading with Typewriter Animation */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl drop-shadow-md flex flex-wrap items-center justify-center">
                    {data.titlePrefix && (
                        <span>{data.titlePrefix}</span>
                    )}

                    {data.titleHighlight && (
                        <span className="text-white bg-primary select-all px-4 py-1 mx-2 rounded-xl inline-flex items-center relative min-h-[1.25em] shadow-lg border border-primary/25">
                            {typedText}
                            <span className="w-[3px] h-[0.7em] bg-white ml-1.5 animate-pulse inline-block" />
                        </span>
                    )}

                    {data.titleSuffix && (
                        <span>{data.titleSuffix}</span>
                    )}
                </h1>

                {/* Description */}
                {data.description && (
                    <p className="text-sm sm:text-lg md:text-xl text-zinc-200/90 max-w-3xl leading-relaxed font-light drop-shadow-xs">
                        {data.description}
                    </p>
                )}

                {/* Actions (Buttons) */}
                <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 w-full sm:w-auto">
                    {data.primaryBtnLink && (
                        <Button
                            asChild
                            className="bg-primary hover:bg-primary/95 text-white font-medium px-8 py-6 rounded-full text-base transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer w-full sm:w-auto"
                        >
                            <a href={data.primaryBtnLink}>
                                {data.primaryBtnText}
                            </a>
                        </Button>
                    )}

                    {data.secondaryBtnLink && (
                        <Button
                            asChild
                            variant="outline"
                            className="bg-white hover:bg-zinc-100 text-slate-900 border-0 font-medium px-8 py-6 rounded-full text-base transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer w-full sm:w-auto"
                        >
                            <a href={data.secondaryBtnLink}>
                                {data.isShowIconBtnSecondary && (
                                    <Play className="w-5 h-5 fill-primary text-primary" />
                                )}
                                {data.secondaryBtnText}
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}

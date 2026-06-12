"use client";

import React from "react";
import Link from "next/link";
import { Megaphone, ArrowRight } from "lucide-react";
import { DEFAULT_ANNOUNCEMENTS, AnnouncementSectionProps } from "@/types/announcement/announcement.type";

export default function AnnouncementSection({
    tagline = "Pengumuman",
    items = DEFAULT_ANNOUNCEMENTS
}: AnnouncementSectionProps) {
    if (!items || items.length === 0) return null;

    return (
        <section className="w-full bg-white pt-8 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Ribbon Container */}
                <div className="w-full bg-rose-50/50 border border-rose-100/40 flex items-stretch h-12 sm:h-14 overflow-hidden rounded-[1.25rem] shadow-xs relative">

                    {/* Megaphone Tag Badge (Sticky Left) */}
                    <div className="flex items-center gap-2 px-5 sm:px-6 bg-primary text-white text-xs sm:text-sm font-bold tracking-wider z-20 shrink-0 rounded-l-[1.15rem] shadow-md shadow-primary/15">
                        <Megaphone className="w-4 h-4 animate-bounce" />
                        <span className="uppercase">{tagline}</span>
                    </div>

                    {/* Fading overlay to separate scrolling text from badge */}
                    <div className="absolute left-[125px] sm:left-[150px] inset-y-0 w-8 bg-linear-to-r from-rose-50/90 to-transparent z-10 pointer-events-none" />

                    {/* Marquee Container */}
                    <div className="flex-1 overflow-hidden relative flex items-center group">
                        <div className="flex shrink-0 animate-marquee whitespace-nowrap gap-12 pr-12 items-center group-hover:paused">
                            {items.map((ann, idx) => (
                                <div key={`orig-${ann.id}-${idx}`} className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    {ann.linkUrl ? (
                                        <Link
                                            href={ann.linkUrl}
                                            className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
                                        >
                                            <span>{ann.title}</span>
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </Link>
                                    ) : (
                                        <span className="text-xs sm:text-sm font-semibold text-slate-700">{ann.title}</span>
                                    )}
                                    <span className="text-[10px] sm:text-xs text-slate-400 font-light bg-white border border-slate-100/50 px-2 py-0.5 rounded-full shrink-0">
                                        {ann.date}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Duplicated List for Perfect Loop */}
                        <div className="flex shrink-0 animate-marquee whitespace-nowrap gap-12 pr-12 items-center group-hover:paused" aria-hidden="true">
                            {items.map((ann, idx) => (
                                <div key={`dup-${ann.id}-${idx}`} className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    {ann.linkUrl ? (
                                        <Link
                                            href={ann.linkUrl}
                                            className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
                                        >
                                            <span>{ann.title}</span>
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </Link>
                                    ) : (
                                        <span className="text-xs sm:text-sm font-semibold text-slate-700">{ann.title}</span>
                                    )}
                                    <span className="text-[10px] sm:text-xs text-slate-400 font-light bg-white border border-slate-100/50 px-2 py-0.5 rounded-full shrink-0">
                                        {ann.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

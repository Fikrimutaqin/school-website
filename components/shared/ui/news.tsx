"use client";

import Link from "next/link";
import { Calendar, User } from "lucide-react";
import NewsCardImage from "./news-card-image";
import { NewsSectionProps } from "@/types/news/news.type";

export default function NewsSection({ data }: NewsSectionProps) {
    const featuredItem = data.items.find((item) => item.isFeatured) || data.items[0];
    const nonFeaturedItems = data.items.filter((item) => item.id !== featuredItem?.id).slice(0, 3);

    return (
        <section className="w-full py-16 lg:py-20 bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <span className="text-primary text-xs lg:text-sm font-bold tracking-widest uppercase block mb-3">
                            {data.tagline}
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {data.title}
                        </h2>
                    </div>

                    <Link
                        href={data.linkUrl}
                        className="inline-flex items-center justify-center px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full font-semibold text-xs lg:text-sm tracking-wide shrink-0 self-start sm:self-auto"
                    >
                        {data.linkText}
                    </Link>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Column: Featured News */}
                    {featuredItem && (
                        <div className="lg:col-span-7 h-full">
                            <Link
                                href={`/news/${featuredItem.id}`}
                                className="group relative block h-full rounded-[2.5rem] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
                            >
                                <NewsCardImage
                                    src={featuredItem.imageUrl}
                                    alt={featuredItem.title}
                                    isFeatured={true}
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10 transition-opacity duration-300 group-hover:via-black/55" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-6 sm:p-10 z-20 flex flex-col justify-end items-start text-white">
                                    <span className="px-3.5 py-1.5 bg-primary text-white text-[11px] font-bold rounded-lg mb-4 tracking-wide shadow-md shadow-primary/30 uppercase">
                                        {featuredItem.category}
                                    </span>

                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight leading-tight group-hover:text-rose-100 transition-colors">
                                        {featuredItem.title}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-light">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-primary" />
                                            <span>{featuredItem.date}</span>
                                        </div>
                                        {featuredItem.author && (
                                            <div className="flex items-center gap-1.5">
                                                <User className="w-3.5 h-3.5 text-primary" />
                                                <span>{featuredItem.author}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

                    {/* Right Column: Non-featured News List */}
                    <div className="lg:col-span-5 flex flex-col gap-6 justify-start">
                        {nonFeaturedItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`/news/${item.id}`}
                                className="group flex flex-col sm:flex-row gap-6 p-5 border border-rose-100/50 rounded-[2rem] bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 animate-fade-in"
                            >
                                <NewsCardImage
                                    src={item.imageUrl}
                                    alt={item.title}
                                    isFeatured={false}
                                />

                                <div className="flex flex-col justify-center flex-1">
                                    <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item.category}</span>
                                    </div>

                                    <h4 className="text-base lg:text-lg font-bold text-slate-800 line-clamp-2 mb-2 group-hover:text-primary transition-colors leading-snug">
                                        {item.title}
                                    </h4>

                                    <span className="text-xs text-slate-400 font-light">
                                        {item.date}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

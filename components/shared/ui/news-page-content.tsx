"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, RotateCcw } from "lucide-react";
import { DEFAULT_NEWS_DATA, NewsItem } from "@/types/news/news.type";

export default function NewsPageContent() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
    const [visibleCount, setVisibleCount] = useState<number>(6);

    const categories = ["Semua", "Prestasi", "Akademik", "Kegiatan", "Pengumuman"];
    const allItems = DEFAULT_NEWS_DATA.items;

    // Find featured item (always St. Robotics victory in Prestasi for display)
    const featuredItem = allItems.find((item) => item.isFeatured);

    // Filter items based on active category
    const filteredItems = allItems.filter((item) => {
        if (selectedCategory === "Semua") {
            // Under "Semua", the featured item is already displayed separately at the top,
            // so we exclude it from the main grid.
            return !item.isFeatured;
        }
        // If a specific category is selected, we include all items matching that category
        return item.category === selectedCategory;
    });

    // Handle load more
    const hasMore = visibleCount < filteredItems.length;
    const displayedItems = filteredItems.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <div className="w-full bg-slate-50/20">
            {/* Header Section */}
            <div className="bg-[#f0f4ff]/50 border-b border-slate-100 py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                    <span className="text-primary text-xs lg:text-sm font-bold tracking-widest uppercase block mb-3">
                        INFORMASI & PEMBARUAN
                    </span>
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        Berita & Acara Sekolah
                    </h1>
                    <p className="text-slate-600 max-w-2xl text-sm lg:text-base leading-relaxed">
                        Dapatkan informasi terbaru mengenai kegiatan akademik, prestasi siswa, dan acara mendatang di lingkungan St. Academic Excellence.
                    </p>
                </div>
            </div>

            {/* Featured Article Section - Only visible under "Semua" filter */}
            {selectedCategory === "Semua" && featuredItem && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="group bg-white border border-slate-100/85 rounded-[2.5rem] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-stretch">
                            {/* Image column */}
                            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[360px] lg:min-h-auto w-full rounded-[2rem] overflow-hidden bg-slate-100">
                                <Image
                                    src={featuredItem.imageUrl}
                                    alt={featuredItem.title}
                                    fill
                                    priority
                                    sizes="(max-w-1024px) 100vw, 600px"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                                />
                                <div className="absolute top-6 left-6 bg-primary text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-wider rounded-lg z-10 shadow-md">
                                    TERBARU
                                </div>
                            </div>

                            {/* Info Content column */}
                            <div className="lg:col-span-6 flex flex-col justify-center py-2 lg:pl-4">
                                <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-4 font-semibold uppercase tracking-wider">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>{featuredItem.date}</span>
                                    <span>•</span>
                                    <span className="text-primary">{featuredItem.category}</span>
                                </div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                                    {featuredItem.title}
                                </h2>
                                <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6">
                                    {featuredItem.description}
                                </p>
                                <Link
                                    href={`/news/${featuredItem.id}`}
                                    className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:translate-x-1.5 transition-transform duration-300 self-start group/link"
                                >
                                    Baca Selengkapnya
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Category Filter Bar */}
            <div className="bg-[#f0f4ff]/40 border-y border-slate-100 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => {
                            const isActive = selectedCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setVisibleCount(6); // reset pagination when category changes
                                    }}
                                    className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer shadow-xs ${isActive
                                            ? "bg-primary text-white border border-primary"
                                            : "bg-white border border-slate-200 text-slate-500 hover:border-primary/50 hover:text-primary"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Articles Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                {displayedItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedItems.map((item) => (
                            <article
                                key={item.id}
                                className="group flex flex-col h-full bg-white border border-slate-100/80 rounded-[2rem] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                            >
                                {/* Image Area */}
                                <div className="relative aspect-16/10 overflow-hidden bg-slate-50">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 400px"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <span className="absolute top-4 left-4 bg-[#8B1E3F]/85 backdrop-blur-xs text-white text-[10px] font-bold px-3.5 py-1.5 uppercase tracking-wider rounded-lg z-10 shadow-sm">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-1">
                                    <span className="text-slate-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 block">
                                        {item.date}
                                    </span>
                                    <h3 className="text-base sm:text-lg font-bold text-slate-800 line-clamp-2 mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                                        {item.description}
                                    </p>
                                    <Link
                                        href={`/news/${item.id}`}
                                        className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest mt-auto group/item-link"
                                    >
                                        Selengkapnya
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/item-link:translate-x-0.5" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50/50 rounded-[2rem] border border-dashed border-slate-200">
                        <p className="text-slate-400 text-sm">Tidak ada berita yang ditemukan untuk kategori ini.</p>
                    </div>
                )}

                {/* Load More Button */}
                {hasMore && (
                    <div className="flex justify-center mt-12 lg:mt-16">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs active:scale-98"
                        >
                            Tampilkan Lebih Banyak
                            <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

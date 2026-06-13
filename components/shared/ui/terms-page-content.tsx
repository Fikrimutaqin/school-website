"use client";

import { useState, useEffect } from "react";
import { FileText, ChevronRight } from "lucide-react";
import { DEFAULT_TERMS_DATA } from "@/types/terms/terms.type";

export default function TermsPageContent() {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const sections = DEFAULT_TERMS_DATA.sections;
        const observerOptions = {
            root: null,
            rootMargin: "-15% 0px -70% 0px", // triggers when section is in reading view
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((sec) => {
            const element = document.getElementById(sec.id);
            if (element) {
                observer.observe(element);
            }
        });

        // Set first section as active initially if nothing is active
        if (sections.length > 0 && !activeSection) {
            setActiveSection(sections[0].id);
        }

        return () => {
            observer.disconnect();
        };
    }, [activeSection]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 90; // account for fixed header navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="w-full bg-slate-50/20">
            {/* Header Section */}
            <div className="bg-[#f0f4ff]/50 border-b border-slate-100 py-16 lg:py-20 animate-fade-in">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                    <span className="text-primary text-xs lg:text-sm font-bold tracking-widest uppercase block mb-3">
                        KETENTUAN LAYANAN
                    </span>
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        {DEFAULT_TERMS_DATA.title}
                    </h1>
                    <p className="text-slate-600 max-w-2xl text-sm lg:text-base leading-relaxed">
                        Terakhir Diperbarui: <span className="font-semibold">{DEFAULT_TERMS_DATA.lastUpdated}</span>. Harap baca syarat dan ketentuan penggunaan website sekolah St. Academic Excellence dengan seksama.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Sticky Sidebar Navigation */}
                    <div className="lg:col-span-4 sticky top-24 hidden lg:block">
                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs">
                            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm uppercase tracking-wider mb-5 pb-3 border-b border-slate-100">
                                <FileText className="w-4 h-4 text-primary" />
                                <span>Daftar Isi</span>
                            </div>
                            <nav className="space-y-1">
                                {DEFAULT_TERMS_DATA.sections.map((section) => {
                                    const isActive = activeSection === section.id;
                                    return (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                                                isActive
                                                    ? "bg-red-50 text-primary font-bold"
                                                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                                            }`}
                                        >
                                            <span className="truncate pr-2">{section.title.substring(3)}</span>
                                            <ChevronRight
                                                className={`w-4 h-4 transition-transform duration-300 ${
                                                    isActive
                                                        ? "text-primary translate-x-0.5"
                                                        : "text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5"
                                                }`}
                                            />
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* Right Prose Content */}
                    <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-xs">
                        <div className="space-y-12">
                            {DEFAULT_TERMS_DATA.sections.map((section) => (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-28 border-b border-slate-100 last:border-0 pb-8 last:pb-0"
                                >
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-snug">
                                        {section.title}
                                    </h2>
                                    <div className="space-y-4">
                                        {section.content.map((paragraph, index) => (
                                            <p
                                                key={index}
                                                className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

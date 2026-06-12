"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { DEFAULT_FLOATING_DATA, FloatingWidgetsData } from "@/types/floating/floating.type";

interface FloatingWidgetsProps {
    data?: FloatingWidgetsData;
}

export default function FloatingWidgets({ data = DEFAULT_FLOATING_DATA }: FloatingWidgetsProps) {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (window.scrollY > data.scrollThreshold) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, [data.scrollThreshold]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const whatsAppUrl = `https://wa.me/${data.whatsAppNumber}?text=${encodeURIComponent(data.whatsAppMessage)}`;

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`w-14 h-14 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-lg rounded-full flex items-center justify-center transition-all duration-500 ease-out transform cursor-pointer group hover:scale-105 active:scale-95 ${showScroll
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-75 pointer-events-none"
                    }`}
                aria-label="Kembali ke Atas"
            >
                <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />

                {/* Tooltip */}
                <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
                    Kembali ke Atas
                </span>
            </button>

            {/* WhatsApp Floating Button */}
            <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#22c35e] hover:bg-[#22c35e] text-white shadow-xl shadow-[#25D366]/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group hover:animate-none"
                aria-label="Hubungi kami di WhatsApp"
                style={{ animationDuration: "3s" }}
            >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.49 2 2 6.48 2 12.02c0 1.89.52 3.65 1.43 5.18L2 22l4.96-1.3c1.51.82 3.23 1.29 5.07 1.29 5.54 0 10.03-4.48 10.03-10.02C22.062 6.48 17.57 2 12.03 2zm0 18.33c-1.66 0-3.2-.45-4.54-1.24l-.32-.19-3.37.88.9-3.29-.21-.33c-.87-1.39-1.37-3.03-1.37-4.78C3.12 7.6 6.9 3.82 11.53 3.82c4.63 0 8.41 3.78 8.41 8.4 0 4.63-3.78 8.41-8.41 8.41H12zm4.72-6.52c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.29-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.5-.45-.43-.61-.44-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.71.32-.24.26-.93.91-.93 2.22s.95 2.57 1.09 2.76c.13.19 1.87 2.85 4.53 4s3.24 1.7 3.82 1.63c.58-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.12-.26-.19-.52-.32z" />
                </svg>

                {/* Tooltip */}
                <span className="absolute right-16 bg-slate-900 text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
                    Hubungi Kami
                </span>
            </a>

        </div>
    );
}

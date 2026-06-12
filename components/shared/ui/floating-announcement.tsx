"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, Megaphone, ArrowRight } from "lucide-react";
import { DEFAULT_ANNOUNCEMENTS, AnnouncementItem } from "@/types/announcement/announcement.type";

export default function FloatingAnnouncement() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDismissed, setIsDismissed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const announcementsCount = DEFAULT_ANNOUNCEMENTS.length;
    const activeAnnouncement = DEFAULT_ANNOUNCEMENTS[currentIndex];

    // Use a mutable ref to hold the hover state so the interval callback always reads the latest value
    const isHoveredRef = useRef(isHovered);
    isHoveredRef.current = isHovered;

    // Check on mount if user dismissed it in this session
    useEffect(() => {
        const dismissed = localStorage.getItem("dismissed_announcements_session");
        if (dismissed === "true") {
            setIsDismissed(true);
        }
    }, []);

    useEffect(() => {
        if (announcementsCount === 0 || isDismissed) return;

        // Show the initial announcement after a short delay
        const initialShowTimer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);

        // Rotation timer - switches announcement every 10 seconds
        const rotationInterval = setInterval(() => {
            if (isHoveredRef.current) {
                // If user is hovering over the card, do not rotate it
                return;
            }

            // Slide down animation
            setIsOpen(false);

            // Wait 500ms for slide-down animation to complete, then load next data and slide back up
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % announcementsCount);
                setIsOpen(true);
            }, 500);

        }, 10000); // 10 seconds rotation

        return () => {
            clearTimeout(initialShowTimer);
            clearInterval(rotationInterval);
        };
    }, [announcementsCount, isDismissed]);

    const handleClose = () => {
        setIsOpen(false);
        setIsDismissed(true);
        localStorage.setItem("dismissed_announcements_session", "true");
    };

    if (isDismissed || !activeAnnouncement) return null;

    return (
        <div
            className={`fixed bottom-6 left-6 z-50 max-w-sm w-[calc(100vw-3rem)] transition-all duration-500 ease-out transform ${isOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95 pointer-events-none"
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white/95 backdrop-blur-md border border-rose-100/80 shadow-2xl rounded-3xl p-5 relative overflow-hidden group">

                {/* Visual pulse background element */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full filter blur-xl z-0 pointer-events-none" />

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-colors duration-200 z-20 cursor-pointer"
                    aria-label="Tutup Pengumuman"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="relative z-10 flex flex-col gap-3">

                    {/* Tagline Header with Live Pulse */}
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>

                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary tracking-widest uppercase">
                            <Megaphone className="w-3.5 h-3.5" />
                            <span>Pengumuman ({currentIndex + 1}/{announcementsCount})</span>
                        </div>
                    </div>

                    {/* Announcement Title */}
                    <h4 className="text-sm font-bold text-slate-900 leading-snug tracking-tight pr-4 min-h-10 flex items-center">
                        {activeAnnouncement.title}
                    </h4>

                    {/* Meta & CTA Footer */}
                    <div className="flex items-center justify-between gap-4 mt-2 pt-2 border-t border-slate-100/80">
                        <span className="text-[10px] sm:text-xs text-slate-400 font-light">
                            {activeAnnouncement.date}
                        </span>

                        {activeAnnouncement.linkUrl && (
                            <Link
                                href={activeAnnouncement.linkUrl}
                                onClick={handleClose}
                                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary/80 transition-colors duration-200"
                            >
                                <span>Lihat Detail</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}

"use client";

import { useState, useEffect } from "react";
import { Clock, MapPin, X } from "lucide-react";
import { useUserLocation } from "@/hooks/use-user-location";

interface PrayerTimesData {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
}

const DEFAULT_TIMINGS: PrayerTimesData = {
    Fajr: "04:18",
    Dhuhr: "11:34",
    Asr: "14:54",
    Maghrib: "17:26",
    Isha: "18:41",
};

export default function PrayerTimes() {
    const [timings, setTimings] = useState<PrayerTimesData>(DEFAULT_TIMINGS);
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const { city, province, error } = useUserLocation();

    useEffect(() => {
        // Read visibility from localStorage to persist user choice across pages
        const isClosed = localStorage.getItem("prayer_bar_closed");
        if (isClosed === "true") {
            setIsVisible(false);
        }

        const fetchPrayerTimes = async () => {
            try {
                // Fetch times for Jakarta, Indonesia (Method 11: Kemenag Indonesia or Method 2: ISNA)
                const res = await fetch(
                    `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia&method=11`
                );
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();
                const apiTimings = json.data.timings;

                setTimings({
                    Fajr: apiTimings.Fajr,
                    Dhuhr: apiTimings.Dhuhr,
                    Asr: apiTimings.Asr,
                    Maghrib: apiTimings.Maghrib,
                    Isha: apiTimings.Isha,
                });
            } catch (err) {
                console.error("Prayer times fetch failed, using defaults:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPrayerTimes();
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem("prayer_bar_closed", "true");
    };

    // Format current date
    const formattedDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    if (!isVisible) return null;

    return (
        <div className="w-full bg-white text-black text-[10px] sm:text-xs py-3 lg:py-4 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center border-b border-gray-200 gap-2 z-50 relative">
            {/* Left side: Location and Date */}
            <div className="flex items-center gap-3 font-medium">
                <div className="flex items-center gap-1 text-primary">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {!error && (
                        <span>{city}, {province}</span>
                    )}
                </div>
                <span className="text-black">|</span>
                <span>{formattedDate}</span>
            </div>

            {/* Right side: Prayer Times and Close Button */}
            <div className="flex items-center gap-x-10 w-full md:w-auto justify-between md:justify-end">
                <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-4 gap-y-1 w-full">
                    <div className="flex items-center gap-1.5 lg:w-1/2">
                        <Clock className="w-3 h-3 text-black" />
                        <span className="font-semibold text-black">Schedule Prayer:</span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 font-semibold w-full justify-center">
                        <div className="flex flex-col lg:flex-row items-center gap-1">
                            <span className="text-black font-normal">Fajr</span>
                            <span className="text-white bg-primary px-1.5 py-0.5 rounded-sm">{timings.Fajr}</span>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-1">
                            <span className="text-black font-normal">Dzuhur</span>
                            <span className="text-white bg-primary px-1.5 py-0.5 rounded-sm">{timings.Dhuhr}</span>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-1">
                            <span className="text-black font-normal">Ashar</span>
                            <span className="text-white bg-primary px-1.5 py-0.5 rounded-sm">{timings.Asr}</span>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-1">
                            <span className="text-black font-normal">Maghrib</span>
                            <span className="text-white bg-primary px-1.5 py-0.5 rounded-sm">{timings.Maghrib}</span>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-1">
                            <span className="text-black font-normal">Isya</span>
                            <span className="text-white bg-primary px-1.5 py-0.5 rounded-sm">{timings.Isha}</span>
                        </div>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 lg:relative lg:top-0 lg:right-0 hover:bg-gray-100 p-1.5 rounded-full transition-colors text-gray-400 hover:text-black cursor-pointer shrink-0"
                    aria-label="Close prayer times"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

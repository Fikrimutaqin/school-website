"use client";

import Image from "next/image";

interface NewsCardImageProps {
    src: string;
    alt: string;
    isFeatured?: boolean;
}

export default function NewsCardImage({ src, alt, isFeatured = false }: NewsCardImageProps) {
    return (
        <div
            className={`relative w-full overflow-hidden shadow-xs border border-slate-200/50 ${isFeatured
                    ? "h-full min-h-[350px] sm:min-h-[450px] md:min-h-[520px] rounded-[2.5rem]"
                    : "w-full aspect-video md:aspect-square md:w-[180px] md:h-[140px] shrink-0 rounded-2xl"
                }`}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes={isFeatured ? "(max-w-768px) 100vw, 750px" : "180px"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={isFeatured}
            />
        </div>
    );
}

import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="w-full min-h-[75vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-white relative overflow-hidden">
            {/* Soft decorative background circles */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-xl">
                {/* 404 Text with pulse effect */}
                <h1 className="text-9xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-b from-primary via-primary/80 to-primary/50 drop-shadow-sm select-none animate-pulse">
                    404
                </h1>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
                    Halaman Tidak Ditemukan
                </h2>

                {/* Subtext description */}
                <p className="text-sm sm:text-base text-slate-500 font-light mt-4 leading-relaxed max-w-md">
                    Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman tersebut mungkin telah dipindahkan, dihapus, atau tidak pernah ada.
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center mt-10 w-full justify-center">
                    <Button
                        asChild
                        className="bg-primary hover:bg-primary/95 text-white font-semibold px-6 py-6 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer w-full sm:w-auto"
                    >
                        <Link href="/">
                            <Home className="w-5 h-5" />
                            Kembali ke Beranda
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

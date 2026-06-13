import type { Metadata } from "next";
import NewsPageContent from "@/components/shared/ui/news-page-content";

export const metadata: Metadata = {
    title: "Berita & Acara Sekolah - St. Academic Excellence",
    description: "Dapatkan informasi terbaru mengenai kegiatan akademik, prestasi siswa, dan acara mendatang di lingkungan St. Academic Excellence.",
};

export default function NewsPage() {
    return <NewsPageContent />;
}

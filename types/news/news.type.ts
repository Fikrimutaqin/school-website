export interface NewsItem {
    id: string;
    title: string;
    category: string; // e.g. "Prestasi", "Kegiatan", "Fasilitas"
    date: string;
    author?: string; // e.g. "Humas Sekolah"
    imageUrl: string;
    isFeatured?: boolean;
}

export interface NewsData {
    tagline: string;
    title: string;
    linkText: string;
    linkUrl: string;
    items: NewsItem[];
}

export interface NewsSectionProps {
    data: NewsData;
}

export const DEFAULT_NEWS_DATA: NewsData = {
    tagline: "UPDATE TERBARU",
    title: "Berita & Acara Sekolah",
    linkText: "Lihat Semua Berita",
    linkUrl: "/news",
    items: [
        {
            id: "1",
            title: "Siswa Kami Menangkan Kompetisi Robotik Internasional 2024",
            category: "Prestasi",
            date: "15 Maret 2024",
            author: "Humas Sekolah",
            imageUrl: "/images/news-featured.png",
            isFeatured: true
        },
        {
            id: "2",
            title: "Literasi Digital: Membangun Etika Berinternet Bagi Siswa Baru",
            category: "Kegiatan",
            date: "12 Maret 2024",
            imageUrl: "/images/news-lib.png",
            isFeatured: false
        },
        {
            id: "3",
            title: "Peresmian Laboratorium Riset Teknologi Terbaru",
            category: "Fasilitas",
            date: "10 Maret 2024",
            imageUrl: "/images/news-lab.png",
            isFeatured: false
        },
        {
            id: "4",
            title: "Peresmian Laboratorium Riset Teknologi Terbaru",
            category: "Fasilitas",
            date: "10 Maret 2024",
            imageUrl: "/images/news-lab.png",
            isFeatured: false
        }
    ]
};

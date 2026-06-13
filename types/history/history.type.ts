export interface HistoryItem {
    year: string;
    title: string;
    description: string;
    imageUrl: string;
}

export interface HistorySectionProps {
    data: HistoryItem[];
}

export const DEFAULT_HISTORY_DATA: HistoryItem[] = [
    {
        year: "1995",
        title: "Awal Perjalanan",
        description: "St. Academic Excellence didirikan dengan satu gedung dan 50 siswa pertama, didasari oleh misi untuk memberikan standar pendidikan internasional yang terjangkau.",
        imageUrl: "/images/history-1995.png"
    },
    {
        year: "2010",
        title: "Ekspansi Fasilitas",
        description: "Pembukaan Sayap Sains dan Kompleks Olahraga modern, membawa sekolah mendapatkan akreditasi internasional pertamanya.",
        imageUrl: "/images/history-2010.png"
    },
    {
        year: "2024",
        title: "Unggul di Era Digital",
        description: "Kini kami melayani lebih dari 2.000 siswa dengan kurikulum berbasis teknologi AI dan riset berkelanjutan.",
        imageUrl: "/images/history-2024.png"
    }
];

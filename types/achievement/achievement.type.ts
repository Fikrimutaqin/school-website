export interface AchievementItem {
    id: string;
    title: string;
    description: string;
    category: string; // e.g. "Bidang Informatika", "Tingkat Provinsi"
    iconName: string;  // e.g. "Medal", "Award", "Trophy"
}

export interface AchievementData {
    tagline: string;
    title: string;
    description: string;
    items: AchievementItem[];
}

export interface AchievementSectionProps {
    data: AchievementData;
}

export const DEFAULT_ACHIEVEMENT_DATA: AchievementData = {
    tagline: "PRESTASI UNGGULAN",
    title: "Kebanggaan Komunitas Kami",
    description: "Dedikasi kami dalam mencetak generasi berprestasi tercermin dalam berbagai pencapaian di tingkat nasional maupun internasional.",
    items: [
        {
            id: "1",
            title: "Emas OSN Nasional",
            description: "Meraih medali emas dalam Olimpiade Sains Nasional bidang Informatika tahun 2023 dengan skor tertinggi.",
            category: "Bidang Informatika",
            iconName: "Medal"
        },
        {
            id: "2",
            title: "Sekolah Vokasi Terbaik",
            description: "Penghargaan sebagai institusi pendidikan vokasi terbaik tingkat provinsi berdasarkan indeks kesiapan kerja.",
            category: "Tingkat Provinsi",
            iconName: "Award"
        },
        {
            id: "3",
            title: "Juara Umum Olahraga",
            description: "Mempertahankan gelar juara umum dalam kompetisi atletik dan basket antar sekolah se-Jakarta Selatan.",
            category: "Jakarta Series",
            iconName: "Trophy"
        }
    ]
};

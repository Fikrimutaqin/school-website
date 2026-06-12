export interface CurriculumItem {
    id: string;
    title: string;
    description: string;
    industryReadiness: number; // e.g. 92 (representing 92%)
    iconName: string; // e.g. "Terminal", "Wallet", "Palette"
}

export interface CurriculumData {
    tagline: string;
    title: string;
    description: string;
    items: CurriculumItem[];
}

export interface CurriculumSectionProps {
    data: CurriculumData;
}

export const DEFAULT_CURRICULUM_DATA: CurriculumData = {
    tagline: "PROGRAM KEAHLIAN",
    title: "Pilih Masa Depanmu",
    description: "Kurikulum industri terintegrasi yang dirancang untuk membekali siswa dengan keahlian teknis yang relevan di pasar kerja global.",
    items: [
        {
            id: "1",
            title: "Teknik Komputer & Jaringan",
            description: "Eksplorasi infrastruktur jaringan modern, keamanan siber tingkat lanjut, dan administrasi sistem berbasis cloud.",
            industryReadiness: 92,
            iconName: "Terminal"
        },
        {
            id: "2",
            title: "Akuntansi & Keuangan",
            description: "Pengelolaan keuangan digital terintegrasi, audit akuntansi, dan perpajakan berbasis sistem ERP terkini.",
            industryReadiness: 88,
            iconName: "Wallet"
        },
        {
            id: "3",
            title: "Desain Komunikasi Visual",
            description: "Produksi konten kreatif, desain grafis modern, animasi 3D, dan strategi pemasaran digital inovatif.",
            industryReadiness: 95,
            iconName: "Palette"
        }
    ]
};

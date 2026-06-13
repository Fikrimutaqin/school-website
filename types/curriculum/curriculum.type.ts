export interface CurriculumItem {
    id: string;
    title: string;
    description: string;
    industryReadiness: number; // e.g. 92 (representing 92%)
    iconName: string; // e.g. "Terminal", "Wallet", "Palette"
    isFeatured?: boolean;
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

export const DEFAULT_CURRICULUM_PAGE_DATA: CurriculumData = {
    tagline: "METODE PEMBELAJARAN",
    title: "Pilar Kurikulum Unggulan Kami",
    description: "Pendekatan holistik yang mengintegrasikan pengembangan karakter, fleksibilitas belajar, dan standar kompetensi global.",
    items: [
        {
            id: "1",
            title: "Pendidikan Karakter",
            description: "Fokus pada integritas, empati, dan tanggung jawab sosial untuk membentuk pribadi yang berintegritas dan berbudi pekerti luhur.",
            industryReadiness: 100,
            iconName: "Users"
        },
        {
            id: "2",
            title: "Kurikulum Merdeka",
            description: "Memberikan fleksibilitas bagi siswa untuk mendalami minat dan bakat secara pribadi yang mendalam sesuai dengan jalur pembelajaran yang dipersonalisasi.",
            industryReadiness: 100,
            iconName: "Sparkles",
            isFeatured: true
        },
        {
            id: "3",
            title: "Standar Internasional",
            description: "Adopsi standar global dalam pengajaran bahasa Inggris dan sains untuk memastikan lulusan mampu bersaing di kancah internasional.",
            industryReadiness: 100,
            iconName: "Globe"
        }
    ]
};

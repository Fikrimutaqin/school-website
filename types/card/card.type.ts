import { Eye, LucideIcon, Rocket } from "lucide-react";

export interface CardData {
    icon: LucideIcon;
    title: string;
    description: string | null;
    listItems: string[] | null;
}

export interface CardSectionProps {
    data: CardData[];
}

export const DEFAULT_CARD_DATA: CardData[] = [
    {
        icon: Eye,
        title: "Visi Kami",
        description: "Menjadi sekolah pilihan utama yang menghasilkan pemimpin masa depan dengan keunggulan akademik, karakter mulia, dan kompetensi global.",
        listItems: null
    },
    {
        icon: Rocket,
        title: "Misi Kami",
        description: null,
        listItems: [
            "Menyediakan pendidikan berkualitas tinggi yang memadukan keunggulan akademik, pengembangan karakter, dan keterampilan abad 21",
            "Menciptakan lingkungan belajar yang positif, inklusif, dan mendukung pertumbuhan holistik setiap siswa",
            "Mendorong inovasi dan kreativitas melalui metode pembelajaran modern dan teknologi pendidikan terkini",
            "Membentuk generasi yang berintegritas, bertanggung jawab, dan peduli terhadap masyarakat serta lingkungan"
        ]
    }
];

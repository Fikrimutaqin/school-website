export interface AboutFeature {
    title: string;
    description: string;
    iconName: string; // e.g. "Lightbulb" | "Users"
}

export interface AboutData {
    tagline: string;
    title: string;
    description: string;
    experienceYears: string;
    experienceText: string;
    imageUrl: string;
    features: AboutFeature[];
    linkText: string;
    linkUrl: string;
}

export interface AboutSectionProps {
    data: AboutData;
}

export const DEFAULT_ABOUT_DATA: AboutData = {
    tagline: "TENTANG KAMI",
    title: "Pilar Kecemerlangan Akademik & Karakter Berintegritas",
    description: "Didirikan dengan visi untuk menciptakan lingkungan belajar yang inspiratif, St. Academic Excellence telah menjadi wadah bagi ribuan putra-putri terbaik bangsa untuk mengejar mimpi mereka. Kami percaya bahwa setiap siswa memiliki potensi unik yang perlu diasah melalui pendekatan holistik yang menggabungkan kecerdasan kognitif, kematangan emosional, dan kedalaman spiritual.",
    experienceYears: "25+",
    experienceText: "Years of Educational Heritage",
    imageUrl: "/about-bg.png",
    linkText: "Baca Selengkapnya",
    linkUrl: "/about",
    features: [
        {
            title: "Misi Kami",
            description: "Menciptakan ekosistem pendidikan yang adaptif terhadap perubahan global.",
            iconName: "Lightbulb",
        },
        {
            title: "Komunitas",
            description: "Kolaborasi erat antara guru, orang tua, dan siswa yang solid.",
            iconName: "Users",
        },
    ],
};
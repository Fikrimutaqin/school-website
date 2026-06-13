export interface ExtracurricularItem {
    id: string;
    title: string;
    description: string;
    iconName: string;
    category: string;
}

export interface OsisData {
    tagline: string;
    title: string;
    quote: string;
    description: string;
    btnText: string;
    btnLink: string;
    imageUrl: string;
}

export interface GalleryItem {
    id: string;
    title: string;
    imageUrl: string;
}

export interface StudentHeroData {
    tagline: string;
    title: string;
    description: string;
    btnText: string;
    btnLink: string;
    imageUrl: string;
}

export interface StudentPageData {
    hero: StudentHeroData;
    extracurriculars: ExtracurricularItem[];
    osis: OsisData;
    gallery: {
        title: string;
        subtitle: string;
        linkText: string;
        linkUrl: string;
        items: GalleryItem[];
    };
}

export const DEFAULT_STUDENT_PAGE_DATA: StudentPageData = {
    hero: {
        tagline: "KEHIDUPAN KAMPUS",
        title: "Kesiswaan & Kehidupan Kampus",
        description: "Membangun potensi, karakter, dan kreativitas melalui lingkungan belajar yang dinamis dan mendukung setiap langkah perkembangan siswa.",
        btnText: "Eksplorasi Sekarang",
        btnLink: "#explorasi",
        imageUrl: "/images/student-hero.png"
    },
    extracurriculars: [
        {
            id: "1",
            title: "Klub Robotik",
            category: "TECHNOLOGY & INNOVATION",
            description: "Menjelajahi dunia otomasi dan kecerdasan buatan melalui proyek robotika terapan.",
            iconName: "Cpu"
        },
        {
            id: "2",
            title: "Paduan Suara",
            category: "ARTS & CULTURE",
            description: "Mengembangkan harmoni vokal dan mengekspresikan kreativitas melalui karya musik global.",
            iconName: "Music"
        },
        {
            id: "3",
            title: "Tim Basket",
            category: "SPORTS & ATHLETICS",
            description: "Membangun disiplin fisik dan semangat kompetitif dalam olahraga beregu yang dinamis.",
            iconName: "Trophy"
        },
        {
            id: "4",
            title: "Pramuka",
            category: "LEADERSHIP & SERVICE",
            description: "Menanamkan nilai karakter, kemandirian, dan pengabdian kepada masyarakat luas.",
            iconName: "Users"
        }
    ],
    osis: {
        tagline: "ORGANISASI SISWA",
        title: "Majelis OSIS (Organisasi Siswa Intra Sekolah)",
        quote: "Misi kami adalah menjadi wadah aspirasi siswa, menggerakkan kolaborasi kreatif, dan mewujudkan lingkungan sekolah yang harmonis serta berprestasi.",
        description: "OSIS St. Academic Excellence bukan sekadar organisasi, melainkan laboratorium kepemimpinan di mana setiap siswa diajak untuk berinovasi dan mengambil tanggung jawab nyata.",
        btnText: "Bergabung dengan Kami",
        btnLink: "/osis-register",
        imageUrl: "/images/student-osis.png"
    },
    gallery: {
        title: "Momen Berharga Siswa",
        subtitle: "Setiap detik di St. Academic Excellence adalah peluang untuk menciptakan kenangan indah dan pencapaian luar biasa.",
        linkText: "Lihat Seluruh Galeri",
        linkUrl: "/gallery",
        items: [
            {
                id: "1",
                title: "Pentaskan Kreativitas 2024",
                imageUrl: "/images/gallery-choir.png"
            },
            {
                id: "2",
                title: "Final Liga Basket Sekolah",
                imageUrl: "/images/gallery-basketball.png"
            },
            {
                id: "3",
                title: "Pameran Inovasi Sains",
                imageUrl: "/images/gallery-science.png"
            }
        ]
    }
};

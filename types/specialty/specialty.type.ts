export interface SpecialtyItem {
    id: string;
    streamNumber: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    linkUrl: string;
}

export interface SpecialtySectionData {
    title: string;
    subtitle: string;
    items: SpecialtyItem[];
}

export interface SpecialtySectionProps {
    data: SpecialtySectionData;
}

export const DEFAULT_SPECIALTY_DATA: SpecialtySectionData = {
    title: "Program Keahlian Spesialisasi",
    subtitle: "Kami menawarkan alur spesialisasi yang dirancang untuk membekali siswa dengan keterampilan praktis siap kerja.",
    items: [
        {
            id: "1",
            streamNumber: "01",
            title: "Teknik Komputer & Jaringan",
            description: "Fokus pada arsitektur perangkat keras, keamanan siber, dan manajemen infrastruktur jaringan cloud masa depan.",
            imageUrl: "/images/specialty-tkj.png",
            tags: ["Cybersecurity", "Cloud Computing", "IoT"],
            linkUrl: "/programs/tkj"
        },
        {
            id: "2",
            streamNumber: "02",
            title: "Akuntansi & Keuangan Lembaga",
            description: "Membekali siswa dengan literasi keuangan digital, audit profesional, dan manajemen aset yang strategis.",
            imageUrl: "/images/specialty-akuntansi.png",
            tags: ["Taxation", "Digital Audit", "Fintech"],
            linkUrl: "/programs/accounting"
        },
        {
            id: "3",
            streamNumber: "03",
            title: "Multimedia & Desain Kreatif",
            description: "Eksplorasi dunia visual melalui desain grafis, animasi 3D, sinematografi, dan pengembangan konten kreatif.",
            imageUrl: "/images/specialty-multimedia.png",
            tags: ["3D Animation", "Visual FX", "UI/UX"],
            linkUrl: "/programs/multimedia"
        }
    ]
};

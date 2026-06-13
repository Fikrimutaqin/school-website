export interface FacilityItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export interface FacilitySectionData {
    title: string;
    subtitle: string;
    linkText: string;
    linkUrl: string;
    items: FacilityItem[];
}

export interface FacilitySectionProps {
    data: FacilitySectionData;
}

export const DEFAULT_FACILITY_DATA: FacilitySectionData = {
    title: "Fasilitas Unggulan",
    subtitle: "Ruang belajar yang dirancang untuk menginspirasi eksplorasi.",
    linkText: "Lihat Semua Fasilitas",
    linkUrl: "/facilities",
    items: [
        {
            id: "1",
            title: "Digital Library",
            description: "Akses ke jutaan jurnal dan e-book internasional dalam ruang yang tenang dan nyaman.",
            imageUrl: "/images/facility-library.png"
        },
        {
            id: "2",
            title: "Science Center",
            description: "Laboratorium berstandar industri untuk riset biologi, kimia, dan fisika terapan.",
            imageUrl: "/images/facility-lab.png"
        },
        {
            id: "3",
            title: "Sports Center",
            description: "Gedung olahraga indoor dengan standar olimpiade untuk berbagai cabang prestasi.",
            imageUrl: "/images/facility-sports.png"
        }
    ]
};

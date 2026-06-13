export interface PillarItem {
    id: string;
    title: string;
    description: string;
    iconName: string;
    imageUrl?: string;
    isFeatured?: boolean;
    variant: "light-blue" | "solid-red" | "image-bg";
}

export interface PillarSectionData {
    title: string;
    subtitle: string;
    linkText: string;
    linkUrl: string;
    items: PillarItem[];
}

export interface PillarSectionProps {
    data: PillarSectionData;
}

export const DEFAULT_PILLAR_DATA: PillarSectionData = {
    title: "Pilar Pengetahuan Inti",
    subtitle: "Kurikulum kami disusun secara sistematis untuk mencakup spektrum ilmu pengetahuan yang luas, memastikan keseimbangan antara logika dan kreativitas.",
    linkText: "Lihat Semua Mata Pelajaran",
    linkUrl: "/subjects",
    items: [
        {
            id: "1",
            title: "STEM Excellence",
            description: "Sains, Teknologi, Teknik, dan Matematika sebagai fondasi inovasi masa depan.",
            iconName: "Atom",
            imageUrl: "/images/facility-lab.png",
            isFeatured: true,
            variant: "image-bg"
        },
        {
            id: "2",
            title: "Humanities & Social Sciences",
            description: "Memahami sejarah, budaya, dan struktur sosial untuk membangun perspektif kritis.",
            iconName: "BookOpen",
            variant: "light-blue"
        },
        {
            id: "3",
            title: "The Arts",
            description: "Ekspresi kreatif melalui seni rupa dan pertunjukan.",
            iconName: "Palette",
            variant: "solid-red"
        },
        {
            id: "4",
            title: "Language",
            description: "Penguasaan multibahasa untuk komunikasi global.",
            iconName: "Languages",
            variant: "light-blue"
        }
    ]
};

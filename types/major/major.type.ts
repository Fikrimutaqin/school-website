export interface SkillCard {
    id: string;
    title: string;
    description: string;
    iconName: string;
}

export interface MajorItem {
    id: string;
    category: string;
    title: string;
    description: string;
    skills: SkillCard[];
    careers: string[];
    labDetails: string;
}

export interface PartnerItem {
    id: string;
    name: string;
    iconName: string;
}

export interface MajorPageData {
    hero: {
        title: string;
        subtitle: string;
        primaryBtnText: string;
        primaryBtnLink: string;
        secondaryBtnText: string;
        secondaryBtnLink: string;
    };
    majors: MajorItem[];
    partners: {
        title: string;
        subtitle: string;
        items: PartnerItem[];
    };
}

export const DEFAULT_MAJOR_PAGE_DATA: MajorPageData = {
    hero: {
        title: "Program Keahlian Spesialisasi",
        subtitle: "Mempersiapkan generasi unggul dengan kurikulum berbasis industri dan teknologi terdepan untuk menghadapi tantangan tenaga kerja global yang dinamis.",
        primaryBtnText: "Daftar Ke Dalam",
        primaryBtnLink: "/admission",
        secondaryBtnText: "Eksplorasi Karir",
        secondaryBtnLink: "#programs"
    },
    majors: [
        {
            id: "1",
            category: "ENGINEERING",
            title: "Teknik Komputer & Jaringan",
            description: "Fokus pada arsitektur perangkat keras, keamanan siber, dan manajemen infrastruktur jaringan cloud masa depan.",
            skills: [
                {
                    id: "1-1",
                    title: "Cybersecurity",
                    description: "Fokus pada arsitektur pertahanan, analisis ancaman siber, dan pengujian penetrasi.",
                    iconName: "ShieldAlert"
                },
                {
                    id: "1-2",
                    title: "Cloud Computing",
                    description: "Manajemen infrastruktur cloud modern berbasis AWS, Google Cloud, dan Azure.",
                    iconName: "Cloud"
                },
                {
                    id: "1-3",
                    title: "Internet of Things",
                    description: "Perancangan hardware, sensor cerdas, dan sistem kontrol pintar terintegrasi.",
                    iconName: "Cpu"
                }
            ],
            careers: [
                "Network Security Engineer",
                "Cloud System Administrator",
                "IT Support & Infrastructure Consultant"
            ],
            labDetails: "Lab Cisco Academy terstandarisasi dengan perangkat router & switch nyata, server rack dedicated, dan perangkat simulasi canggih."
        },
        {
            id: "2",
            category: "BUSINESS",
            title: "Akuntansi & Keuangan",
            description: "Membekali siswa dengan literasi keuangan digital, audit profesional, dan manajemen aset yang strategis.",
            skills: [
                {
                    id: "2-1",
                    title: "Digital Audit",
                    description: "Pemeriksaan laporan keuangan menggunakan software audit terkomputerisasi.",
                    iconName: "FileSpreadsheet"
                },
                {
                    id: "2-2",
                    title: "Taxation",
                    description: "Kalkulasi pajak badan dan perorangan sesuai regulasi terkini.",
                    iconName: "Receipt"
                },
                {
                    id: "2-3",
                    title: "Fintech",
                    description: "Pengenalan teknologi finansial, sistem pembayaran, dan software akuntansi ERP.",
                    iconName: "Wallet"
                }
            ],
            careers: [
                "Digital Tax Consultant",
                "Financial Analyst Assistant",
                "Junior Internal Auditor"
            ],
            labDetails: "Mini Bank & Laboratory of Accounting terkomputerisasi dengan software spreadsheet dan sistem akuntansi terupdate."
        },
        {
            id: "3",
            category: "CREATIVE",
            title: "Multimedia & Desain Kreatif",
            description: "Eksplorasi dunia visual melalui desain grafis, animasi 3D, sinematografi, dan pengembangan konten kreatif.",
            skills: [
                {
                    id: "3-1",
                    title: "3D Animation",
                    description: "Pemodelan 3D, pembuatan aset game, dan teknik rigging/animasi modern.",
                    iconName: "Tv"
                },
                {
                    id: "3-2",
                    title: "UI/UX Design",
                    description: "Perancangan antarmuka aplikasi, riset pengguna, dan pembuatan prototipe interaktif.",
                    iconName: "Laptop"
                },
                {
                    id: "3-3",
                    title: "Visual FX",
                    description: "Teknik pasca-produksi, efek visual canggih, dan editing sinematografi profesional.",
                    iconName: "Palette"
                }
            ],
            careers: [
                "Motion Graphic Designer",
                "Product Designer (UI/UX)",
                "Video Editor & VFX Specialist"
            ],
            labDetails: "Studio Green Screen profesional, iMac Lab untuk rendering grafis tinggi, dan kamera mirrorless terstandar industri."
        }
    ],
    partners: {
        title: "Kerjasama Industri",
        subtitle: "Kemitraan strategis dengan perusahaan terkemuka untuk magang, sertifikasi, dan penyaluran kerja.",
        items: [
            {
                id: "p1",
                name: "TECHCORP",
                iconName: "Laptop"
            },
            {
                id: "p2",
                name: "GLOBAL BANK",
                iconName: "Landmark"
            },
            {
                id: "p3",
                name: "DESIGN HUB",
                iconName: "Brush"
            },
            {
                id: "p4",
                name: "CLOUD SYNC",
                iconName: "Cloud"
            }
        ]
    }
};

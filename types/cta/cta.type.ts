export interface CtaData {
    title: string;
    description: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
    backgroundImageUrl?: string;
}

export interface CtaSectionProps {
    data: CtaData;
}

export const DEFAULT_CTA_DATA: CtaData = {
    title: "Bergabung Bersama Kami",
    description: "Pendaftaran tahun ajaran 2026/2027 telah dibuka. Mari menjadi bagian dari komunitas pembelajar masa depan.",
    primaryBtnText: "Daftar Sekarang",
    primaryBtnLink: "/admission",
    secondaryBtnText: "Unduh Brosur",
    secondaryBtnLink: "/brochure",
    backgroundImageUrl: "/images/cta-bg.png"
};

export interface HeroData {
    badgeText: string | null;
    titlePrefix: string | null;
    titleHighlight: string | null;
    titleSuffix: string | null;
    description: string | null;
    primaryBtnText: string | null;
    primaryBtnLink: string | null;
    secondaryBtnText: string | null;
    secondaryBtnLink: string | null;
    backgroundImageUrl: string | null;
    isShowIconBtnSecondary: boolean;
}

export interface HeroSectionProps {
    data: HeroData;
}


export const DEFAULT_HERO_DATA: HeroData = {
    badgeText: "Accredited A Excellent Since 1995",
    titlePrefix: "Molding Future ",
    titleHighlight: "Leaders",
    titleSuffix: " with Character & Competence",
    description: "Experience a transformative educational journey at St. Academic Excellence, where tradition meets innovation to prepare students for global success.",
    primaryBtnText: "Explore Our Programs",
    primaryBtnLink: "/programs",
    secondaryBtnText: "Virtual Tour",
    secondaryBtnLink: "/tour",
    backgroundImageUrl: "/hero-bg.png",
    isShowIconBtnSecondary: true
};

export const DEFAULT_HERO_DATA_PROFILE: HeroData = {
    badgeText: null,
    titlePrefix: "Profil St. Academic Excellence",
    titleHighlight: "",
    titleSuffix: "",
    description: "Membentuk pemimpin masa depan melalui tradisi keunggulan akademik dan pengembangan karakter yang kokoh.",
    primaryBtnText: null,
    primaryBtnLink: null,
    secondaryBtnText: "See Profile",
    secondaryBtnLink: "#scroll-down",
    backgroundImageUrl: null,
    isShowIconBtnSecondary: false
};


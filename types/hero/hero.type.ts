export interface HeroData {
    badgeText: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
    backgroundImageUrl: string;
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
    backgroundImageUrl: "/hero-bg.png"
};

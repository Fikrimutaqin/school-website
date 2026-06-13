export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterContact {
    address: string;
    phone: string;
    email: string;
}

export interface FooterSocials {
    website: string;
    email: string;
    phone: string;
    facebook: string;
    instagram: string;
    youtube: string;
}

export interface FooterData {
    brandNameLine1: string;
    brandNameLine2: string;
    description: string;
    navigationTitle: string;
    navigationItems: FooterLink[];
    contactTitle: string;
    contactDetails: FooterContact;
    relatedLinksTitle: string;
    relatedLinksItems: FooterLink[];
    copyrightText: string;
    socials: FooterSocials;
}

export interface FooterProps {
    data?: FooterData;
}

export const DEFAULT_FOOTER_DATA: FooterData = {
    brandNameLine1: "St. Akademi",
    brandNameLine2: "Excellence",
    description: "Membangun generasi berkarakter, cerdas, dan siap menghadapi tantangan masa depan dengan landasan integritas.",
    navigationTitle: "Navigasi",
    navigationItems: [
        { label: "Profile Sekolah", href: "/profile" },
        { label: "Akademik", href: "/curriculum" },
        { label: "Student", href: "/students" },
        { label: "Pendaftaran", href: "/register-spmb" }
    ],
    contactTitle: "Kontak",
    contactDetails: {
        address: "Jl. Pendidikan No. 123, Jakarta Selatan",
        phone: "(021) 123-4567",
        email: "info@stakademiexcellence.sch.id"
    },
    relatedLinksTitle: "Link Terkait",
    relatedLinksItems: [
        { label: "Hubungi Kami", href: "/contact" },
        { label: "Kebijakan Privasi", href: "/terms" }
    ],
    copyrightText: "St. Akademi Excellence. All rights reserved.",
    socials: {
        website: "https://stakademiexcellence.sch.id",
        email: "mailto:info@stakademiexcellence.sch.id",
        phone: "tel:+62211234567",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com"
    }
};

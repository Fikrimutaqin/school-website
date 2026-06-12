export interface FloatingWidgetsData {
    whatsAppNumber: string; // international format without + or spaces, e.g. "6281234567890"
    whatsAppMessage: string;
    scrollThreshold: number; // scroll distance in pixels before showing the Back to Top button
}

export const DEFAULT_FLOATING_DATA: FloatingWidgetsData = {
    whatsAppNumber: "6281234567890",
    whatsAppMessage: "Halo St. Akademi Excellence, saya ingin menanyakan informasi mengenai pendaftaran sekolah.",
    scrollThreshold: 300
};

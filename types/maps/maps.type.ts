export interface MapsData {
    tagline: string;
    title: string;
    address: string;
    phone: string;
    email: string;
    operatingHours: string;
    mapEmbedUrl: string;
    googleMapsUrl: string;
}

export interface MapsSectionProps {
    data: MapsData;
}

export const DEFAULT_MAPS_DATA: MapsData = {
    tagline: "LOKASI KAMI",
    title: "Kunjungi School St. Akademi Excellence",
    address: "Jl. Pendidikan No. 123, Jakarta Selatan, DKI Jakarta 12345",
    phone: "(021) 123-4567",
    email: "info@stakademiexcellence.sch.id",
    operatingHours: "Senin - Jumat: 07:00 - 15:00 WIB",
    // Embed code for a beautiful modern map (using a clean public coordinates pin)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0270634674744!2d106.8271528!3d-6.2601264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMzYuNSJTIDEwNsKwNDknMzcuNyJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
    googleMapsUrl: "https://maps.google.com/?q=Jakarta"
};

export interface ContactDetails {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
    mapEmbedUrl?: string;
}

export const DEFAULT_CONTACT_DATA: ContactDetails = {
    address: "Jl. Pendidikan No. 123, Jakarta Selatan, DKI Jakarta 12345",
    phone: "(021) 123-4567",
    email: "info@stakademiexcellence.sch.id",
    workingHours: "Senin - Jumat: 07.30 - 15.30 WIB",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2087611846435!2d106.8222341!3d-6.236173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e5b3af0ebd%3A0xab0b4a11f26a19ab!2sJl.%20Pendidikan%2C%20RT.1%2FWR.1%2C%20Kuningan%20Bar.%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1718256000000!5m2!1sid!2sid"
};

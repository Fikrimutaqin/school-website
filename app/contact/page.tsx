import type { Metadata } from "next";
import ContactPageContent from "@/components/shared/ui/contact-page-content";

export const metadata: Metadata = {
    title: "Hubungi Kami - St. Academic Excellence",
    description: "Hubungi layanan administrasi dan informasi St. Academic Excellence secara langsung melalui telepon, email, atau kirim pesan formulir online.",
};

export default function ContactPage() {
    return <ContactPageContent />;
}

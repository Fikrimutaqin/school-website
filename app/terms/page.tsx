import type { Metadata } from "next";
import TermsPageContent from "@/components/shared/ui/terms-page-content";

export const metadata: Metadata = {
    title: "Syarat & Ketentuan - St. Academic Excellence",
    description: "Syarat dan ketentuan resmi penggunaan situs web St. Academic Excellence oleh siswa, orang tua, dan masyarakat umum.",
};

export default function TermsPage() {
    return <TermsPageContent />;
}

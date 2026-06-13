import type { Metadata } from "next";
import RegisterSpmbContent from "@/components/shared/ui/register-spmb-content";

export const metadata: Metadata = {
    title: "Pendaftaran Siswa Baru TA 2024/2025 - St. Academic Excellence",
    description: "Penerimaan Peserta Didik Baru (PPDB / SPMB) St. Academic Excellence Tahun Ajaran 2024/2025. Segera daftarkan diri Anda secara online.",
};

export default function RegisterSpmbPage() {
    return <RegisterSpmbContent />;
}

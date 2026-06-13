export interface SpmbStep {
    number: number;
    title: string;
    desc: string;
}

export interface SpmbDocument {
    title: string;
    desc: string;
}

export interface SpmbMajor {
    title: string;
    desc: string;
}

export const SPMB_STEPS: SpmbStep[] = [
    {
        number: 1,
        title: "Registrasi Akun",
        desc: "Daftar menggunakan email aktif & buat password."
    },
    {
        number: 2,
        title: "Isi Formulir",
        desc: "Lengkapi biodata diri dan riwayat sekolah."
    },
    {
        number: 3,
        title: "Pembayaran",
        desc: "Biaya pendaftaran via Virtual Account."
    },
    {
        number: 4,
        title: "Verifikasi",
        desc: "Validasi dokumen oleh tim admisi kami."
    },
    {
        number: 5,
        title: "Ujian Seleksi",
        desc: "Tes akademik & wawancara terjadwal."
    }
];

export const SPMB_DOCUMENTS: SpmbDocument[] = [
    {
        title: "Scan Ijazah / SKL",
        desc: "Asli atau fotokopi yang dilegalisir (PDF max 2MB)"
    },
    {
        title: "Akta Kelahiran",
        desc: "Scan dokumen asli (Warna)"
    },
    {
        title: "Kartu Keluarga (KK)",
        desc: "Domisili terbaru minimal 1 tahun"
    },
    {
        title: "Pas Foto 3x4",
        desc: "Latar belakang merah, format JPG/PNG"
    }
];

export const SPMB_MAJORS: SpmbMajor[] = [
    {
        title: "Rekayasa Perangkat Lunak",
        desc: "Fokus Web & Mobile Development"
    },
    {
        title: "Teknik Jaringan & Komputer",
        desc: "Cybersecurity & Cloud Systems"
    },
    {
        title: "Multimedia & Desain",
        desc: "UI/UX & Motion Graphics"
    },
    {
        title: "Akuntansi Digital",
        desc: "Fintech & Data Analytics"
    }
];

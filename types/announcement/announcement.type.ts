export interface AnnouncementItem {
    id: string;
    title: string;
    date: string;
    linkUrl?: string;
}

export interface AnnouncementSectionProps {
    tagline?: string;
    items?: AnnouncementItem[];
}

export const DEFAULT_ANNOUNCEMENTS: AnnouncementItem[] = [
    {
        id: "1",
        title: "Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 Telah Dibuka!",
        date: "12 Juni 2026",
        linkUrl: "/pendaftaran"
    },
    {
        id: "2",
        title: "Pengumuman Hasil Kelulusan Ujian Akhir Sekolah Dapat Diakses Melalui Portal Siswa.",
        date: "10 Juni 2026",
        linkUrl: "/pengumuman/kelulusan"
    },
    {
        id: "3",
        title: "Selamat Kepada Tim Robotik Sekolah Atas Kemenangan Juara 1 di Ajang Internasional!",
        date: "08 Juni 2026",
        linkUrl: "/news/1"
    },
    {
        id: "4",
        title: "Jadwal Pengambilan Rapor Semester Genap Dimulai Tanggal 20 Juni 2026.",
        date: "05 Juni 2026",
        linkUrl: "/akademik"
    }
];

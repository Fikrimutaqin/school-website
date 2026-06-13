export interface NewsItem {
    id: string;
    title: string;
    description: string;
    category: "Prestasi" | "Akademik" | "Kegiatan" | "Pengumuman";
    date: string;
    author?: string; // e.g. "Humas Sekolah"
    imageUrl: string;
    isFeatured?: boolean;
}

export interface NewsData {
    tagline: string;
    title: string;
    linkText: string;
    linkUrl: string;
    items: NewsItem[];
}

export interface NewsSectionProps {
    data: NewsData;
}

export const DEFAULT_NEWS_DATA: NewsData = {
    tagline: "INFORMASI & PEMBARUAN",
    title: "Berita & Acara Sekolah",
    linkText: "Lihat Semua Berita",
    linkUrl: "/news",
    items: [
        {
            id: "1",
            title: "St. Academic Excellence Menangkan Kompetisi Robotik Nasional 2024",
            description: "Tim robotika sekolah berhasil meraih juara pertama dalam ajang tahunan bergengsi setelah mengembangkan prototipe sistem irigasi pintar bertenaga surya. Prestasi ini mengukuhkan dedikasi sekolah terhadap inovasi STEM.",
            category: "Prestasi",
            date: "14 Mei 2024",
            author: "Humas Sekolah",
            imageUrl: "/images/news-featured.png",
            isFeatured: true
        },
        {
            id: "2",
            title: "Persiapan Wisuda Angkatan 2024: Simak Jadwal Lengkapnya",
            description: "Sekolah mengumumkan detail teknis dan jadwal latihan untuk prosesi wisuda yang akan dilaksanakan di Aula Utama bulan...",
            category: "Kegiatan",
            date: "10 MEI 2024",
            imageUrl: "/images/student-hero.png",
            isFeatured: false
        },
        {
            id: "3",
            title: "Penerapan Kurikulum Baru Berbasis Literasi Digital",
            description: "Mulai semester depan, St. Academic Excellence akan mengintegrasikan teknologi AI secara bertanggung jawab...",
            category: "Akademik",
            date: "08 MEI 2024",
            imageUrl: "/images/news-lib.png",
            isFeatured: false
        },
        {
            id: "4",
            title: "Undangan Forum Diskusi Orang Tua & Guru (FOTG)",
            description: "Kami mengundang seluruh orang tua siswa untuk hadir dalam sesi diskusi strategis mengenai perkembangan fasilitas sekolah.",
            category: "Pengumuman",
            date: "05 MEI 2024",
            imageUrl: "/images/student-osis.png",
            isFeatured: false
        },
        {
            id: "5",
            title: "Festival Seni & Budaya Nusantara 2024",
            description: "Kemeriahan perayaan keragaman budaya Indonesia melalui pertunjukan seni dan pameran kuliner oleh siswa-siswi kami.",
            category: "Kegiatan",
            date: "01 MEI 2024",
            imageUrl: "/images/gallery-choir.png",
            isFeatured: false
        },
        {
            id: "6",
            title: "Finalis Olimpiade Biologi Internasional",
            description: "Dua siswa kami berhasil lolos sebagai finalis mewakili Indonesia dalam ajang IBO yang akan diadakan di Astana.",
            category: "Prestasi",
            date: "28 APRIL 2024",
            imageUrl: "/images/news-lab.png",
            isFeatured: false
        },
        {
            id: "7",
            title: "Pendaftaran Siswa Baru TA 2024/2025 Dibuka",
            description: "Jangan lewatkan kesempatan untuk menjadi bagian dari komunitas pembelajar unggul. Gelombang pertama pendaftaran...",
            category: "Pengumuman",
            date: "26 APRIL 2024",
            imageUrl: "/images/facility-library.png",
            isFeatured: false
        },
        {
            id: "8",
            title: "Workshop Penulisan Karya Ilmiah Remaja (KIR)",
            description: "Membimbing siswa untuk mengembangkan minat penelitian ilmiah sejak dini dengan menghadirkan mentor akademisi ternama.",
            category: "Akademik",
            date: "20 APRIL 2024",
            imageUrl: "/images/gallery-science.png",
            isFeatured: false
        },
        {
            id: "9",
            title: "Penyelenggaraan Class Meeting Semester Genap",
            description: "Kegiatan tahunan olahraga dan seni antar kelas untuk menyalurkan minat bakat serta mempererat solidaritas siswa.",
            category: "Kegiatan",
            date: "18 APRIL 2024",
            imageUrl: "/images/gallery-basketball.png",
            isFeatured: false
        },
        {
            id: "10",
            title: "Prestasi Gemilang Tim Futsal Sekolah di Turnamen Regional",
            description: "Menyabet gelar juara dua setelah pertandingan sengit di babak final melawan sekolah favorit. Selamat untuk perjuangan tim!",
            category: "Prestasi",
            date: "15 APRIL 2024",
            imageUrl: "/images/facility-sports.png",
            isFeatured: false
        }
    ]
};

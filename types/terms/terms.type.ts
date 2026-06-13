export interface TermsSection {
    id: string;
    title: string;
    content: string[];
}

export interface TermsData {
    title: string;
    lastUpdated: string;
    sections: TermsSection[];
}

export const DEFAULT_TERMS_DATA: TermsData = {
    title: "Syarat & Ketentuan Penggunaan",
    lastUpdated: "13 Juni 2026",
    sections: [
        {
            id: "penerimaan",
            title: "1. Penerimaan Ketentuan",
            content: [
                "Dengan mengakses, menelusuri, atau menggunakan situs web resmi St. Academic Excellence ini, Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh syarat dan ketentuan ini serta mematuhi semua hukum dan peraturan yang berlaku.",
                "Jika Anda tidak menyetujui salah satu dari ketentuan ini, Anda tidak diperkenankan untuk menggunakan situs web ini atau layanan yang disediakan di dalamnya. Ketentuan ini berlaku untuk seluruh pengunjung, pengguna, dan pihak lain yang mengakses situs web."
            ]
        },
        {
            id: "intelektual",
            title: "2. Hak Kekayaan Intelektual",
            content: [
                "Seluruh materi yang ditampilkan di situs web ini, termasuk namun tidak terbatas pada teks, grafik, logo, ikon tombol, gambar, klip audio, unduhan digital, kompilasi data, dan perangkat lunak, adalah milik eksklusif St. Academic Excellence atau pemberi lisensinya dan dilindungi oleh undang-undang hak cipta nasional dan internasional.",
                "Anda tidak diperbolehkan memodifikasi, menyalin, mendistribusikan, mentransmisikan, menampilkan, mereproduksi, menerbitkan, melisensikan, membuat karya turunan, mentransfer, atau menjual informasi atau konten apa pun yang diperoleh dari situs web ini tanpa izin tertulis sebelumnya dari pihak sekolah."
            ]
        },
        {
            id: "penggunaan",
            title: "3. Ketentuan Penggunaan Situs",
            content: [
                "Situs web ini disediakan semata-mata untuk keperluan informasi akademik, profil sekolah, layanan penerimaan siswa baru, dan sarana komunikasi resmi sekolah.",
                "Pengguna setuju untuk tidak menggunakan situs web untuk tujuan yang melanggar hukum atau dilarang oleh syarat dan ketentuan ini. Anda dilarang menggunakan situs ini dengan cara yang dapat merusak, menonaktifkan, membebani, atau mengganggu server sekolah atau jaringan yang terhubung ke server kami."
            ]
        },
        {
            id: "pendaftaran",
            title: "4. Layanan Pendaftaran Online",
            content: [
                "Dalam proses pendaftaran siswa baru secara online, Anda wajib memberikan informasi yang akurat, lengkap, dan terbaru. Kegagalan untuk memberikan data yang benar merupakan pelanggaran ketentuan pendaftaran dan dapat mengakibatkan pembatalan status pendaftaran calon siswa.",
                "Keamanan akun, username, dan password yang digunakan untuk masuk ke portal pendaftaran adalah tanggung jawab penuh pengguna. Anda setuju untuk segera memberitahukan pihak sekolah jika ada penggunaan akun tanpa izin atau pelanggaran keamanan lainnya."
            ]
        },
        {
            id: "tanggung-jawab",
            title: "5. Batasan Tanggung Jawab",
            content: [
                "St. Academic Excellence senantiasa berupaya menyajikan data yang akurat dan mutakhir. Namun, seluruh informasi di situs web ini disediakan 'sebagaimana adanya' tanpa jaminan apa pun, baik tersurat maupun tersirat, mengenai keandalan, kelengkapan, atau ketersediaan berkelanjutan dari situs.",
                "Sekolah tidak bertanggung jawab atas kerugian atau kerusakan langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan situs web ini, termasuk adanya gangguan teknis atau malware di perangkat pengguna."
            ]
        },
        {
            id: "perubahan",
            title: "6. Perubahan Ketentuan",
            content: [
                "Pihak manajemen St. Academic Excellence berhak untuk merevisi, mengubah, atau memperbarui syarat dan ketentuan ini kapan saja tanpa pemberitahuan tertulis sebelumnya kepada pengguna.",
                "Perubahan akan langsung berlaku setelah dipublikasikan di halaman syarat & ketentuan situs web ini. Penggunaan situs secara berkelanjutan setelah adanya perubahan menandakan penerimaan Anda terhadap ketentuan baru tersebut."
            ]
        },
        {
            id: "hukum",
            title: "7. Hukum yang Berlaku",
            content: [
                "Syarat dan ketentuan penggunaan situs web ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Negara Kesatuan Republik Indonesia.",
                "Setiap perselisihan atau sengketa hukum yang timbul dari atau berkaitan dengan penggunaan situs web ini akan diselesaikan secara musyawarah, dan jika tidak mencapai mufakat, akan diajukan ke yurisdiksi pengadilan negeri yang berwenang di wilayah hukum sekolah."
            ]
        }
    ]
};

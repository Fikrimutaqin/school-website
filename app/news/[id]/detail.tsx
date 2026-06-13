"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Share2, Link as LinkIcon, Check } from "lucide-react";
import { DEFAULT_NEWS_DATA, NewsItem } from "@/types/news/news.type";

interface NewsDetailProps {
    newsItem: NewsItem;
}

// Map each news ID to detailed paragraphs for realistic body content
const ARTICLE_BODY_MAP: Record<string, string[]> = {
    "1": [
        "Tim robotika sekolah St. Academic Excellence kembali menorehkan prestasi membanggakan di kancah nasional. Tim yang terdiri dari lima siswa berbakat ini berhasil meraih Juara Pertama dalam ajang Kompetisi Robotik Nasional 2024 yang diselenggarakan di Jakarta. Mereka membawakan inovasi teknologi terbarukan berupa prototipe sistem irigasi pintar bertenaga surya yang dirancang untuk mengoptimalkan pengairan lahan pertanian secara presisi.",
        "Pengembangan prototipe ini memakan waktu selama kurang lebih enam bulan di bawah bimbingan guru fisika dan teknologi informasi sekolah. Dengan mengintegrasikan sensor kelembapan tanah, modul IoT, dan panel surya mikro, robot irigasi ini mampu beroperasi secara mandiri dan mengirimkan data lahan secara real-time ke smartphone petani. Keunggulan inilah yang memukau dewan juri dan mengalahkan lebih dari lima puluh sekolah menengah lainnya dari seluruh penjuru Indonesia.",
        "Kepala Sekolah mengungkapkan rasa bangga yang luar biasa atas kerja keras dan dedikasi luar biasa seluruh anggota tim. Sekolah berkomitmen untuk terus mendukung minat dan bakat siswa di bidang sains, teknologi, teknik, dan matematika (STEM) melalui fasilitas lab yang modern serta keikutsertaan dalam ajang-ajang prestisius lainnya di masa mendatang."
    ],
    "2": [
        "Menjelang akhir tahun ajaran, St. Academic Excellence mulai mematangkan persiapan prosesi Wisuda Angkatan 2024. Pihak panitia kelulusan hari ini resmi merilis jadwal latihan, alur registrasi, serta detail teknis pelaksanaan acara. Wisuda tahun ini direncanakan akan berlangsung khidmat dengan tema persatuan dan masa depan gemilang bagi para lulusan.",
        "Prosesi kelulusan akan diselenggarakan di Aula Utama Sekolah pada pertengahan bulan depan. Seluruh siswa kelas XII diwajibkan untuk mengikuti rangkaian kegiatan gladi bersih guna memastikan seluruh prosesi berjalan lancar dan tertib. Selain itu, orang tua siswa juga diharapkan hadir tepat waktu dengan membawa kartu undangan resmi yang dibagikan melalui wali kelas masing-masing.",
        "Sekolah berharap momen kelulusan ini tidak hanya menjadi simbol berakhirnya masa sekolah menengah, tetapi juga menjadi gerbang awal perjalanan mereka dalam berkontribusi nyata bagi masyarakat luas. Informasi lebih lengkap mengenai aturan pakaian dan pengambilan perlengkapan wisuda dapat diakses melalui portal resmi siswa."
    ],
    "3": [
        "Menyikapi pesatnya perkembangan dunia teknologi, sekolah mengumumkan kebijakan baru berupa penerapan kurikulum berbasis literasi digital mulai semester mendatang. Langkah strategis ini diambil guna membekali siswa dengan pemahaman mendalam tentang pemanfaatan teknologi secara sehat, kritis, dan produktif dalam proses pembelajaran sehari-hari.",
        "Salah satu fokus utama dalam kurikulum baru ini adalah pengenalan dan pemanfaatan kecerdasan buatan (AI) secara bertanggung jawab. Siswa akan diajarkan cara memilah informasi, menjaga keamanan data pribadi, serta etika dalam berkomunikasi di ruang digital. Pelatihan intensif bagi para guru juga telah dilakukan untuk menyelaraskan metode pengajaran dengan sistem kurikulum baru ini.",
        "Dengan adanya kurikulum berbasis literasi digital ini, St. Academic Excellence optimis dapat melahirkan generasi muda yang tidak hanya cerdas secara akademis, tetapi juga bijak dan kompeten dalam menghadapi perubahan teknologi yang terus dinamis di masa depan."
    ],
    "4": [
        "Hubungan harmonis antara sekolah dan lingkungan keluarga merupakan kunci sukses pendidikan karakter anak. Oleh karena itu, sekolah secara resmi mengundang seluruh orang tua dan wali siswa untuk menghadiri Forum Diskusi Orang Tua & Guru (FOTG) semester genap. Pertemuan ini bertujuan untuk mengevaluasi program belajar serta menyelaraskan visi perkembangan sekolah.",
        "Agenda utama FOTG kali ini akan membahas tentang rencana pengembangan fasilitas penunjang akademik, program bimbingan karier siswa, serta penguatan kesehatan mental remaja di era digital. Diskusi interaktif ini memberikan ruang bagi para orang tua untuk menyampaikan masukan konstruktif secara langsung kepada manajemen sekolah.",
        "Kehadiran dan partisipasi aktif dari bapak dan ibu sangat kami harapkan demi terwujudnya lingkungan belajar yang kondusif bagi putra-putri kita. Forum ini akan dilaksanakan di Ruang Pertemuan Utama pada hari Sabtu ini mulai pukul 09.00 WIB."
    ],
    "5": [
        "Kemeriahan Festival Seni & Budaya Nusantara 2024 berhasil memukau ratusan pengunjung yang memadati lapangan tengah sekolah. Acara tahunan ini menampilkan beragam ekspresi kreativitas siswa, mulai dari pertunjukan tari tradisional, konser musik daerah, hingga pameran kuliner khas berbagai provinsi di Indonesia.",
        "Setiap kelas menyajikan stand kebudayaan yang dihias dengan dekorasi khas daerah masing-masing. Pengunjung dapat mencicipi hidangan tradisional buatan siswa serta melihat demonstrasi kerajinan tangan lokal. Festival ini bukan sekadar ajang hiburan, melainkan wadah edukatif untuk menumbuhkan rasa cinta tanah air dan melestarikan warisan leluhur.",
        "Panitia menyampaikan apresiasi setinggi-tingginya kepada seluruh siswa, guru, dan sponsor yang telah bekerja keras mempersiapkan festival ini. Semangat kebersamaan dalam keberagaman yang ditunjukkan hari ini membuktikan bahwa siswa kami memiliki kepedulian yang tinggi terhadap kekayaan budaya bangsa."
    ],
    "6": [
        "Kabar membanggakan kembali datang dari bidang akademik sains. Dua siswa terbaik St. Academic Excellence berhasil lolos ke babak final mewakili Indonesia dalam ajang Olimpiade Biologi Internasional (IBO) 2024. Mereka berhasil menyingkirkan ribuan pesaing dalam seleksi nasional yang sangat ketat.",
        "Babak final IBO tahun ini akan diselenggarakan di Astana, Kazakhstan. Saat ini, kedua siswa sedang menjalani pembinaan intensif di bawah bimbingan dosen dari universitas terkemuka serta tim mentor internal sekolah. Fokus pembinaan meliputi penguasaan teori biologi modern, praktikum genetika, dan analisis ekologi tingkat lanjut.",
        "Segenap keluarga besar sekolah mendoakan agar perwakilan kita diberikan kelancaran dan kesehatan selama berkompetisi di kancah internasional. Prestasi ini membuktikan bahwa kualitas pembinaan sains di sekolah kami mampu bersaing di level tertinggi global."
    ],
    "7": [
        "Penerimaan Peserta Didik Baru (PPDB) St. Academic Excellence Tahun Ajaran 2024/2025 resmi dibuka untuk gelombang pertama. Sebagai sekolah rujukan yang berfokus pada keunggulan akademik dan pengembangan karakter, kami mengundang para lulusan sekolah menengah pertama terbaik untuk bergabung bersama kami.",
        "Pendaftaran dapat dilakukan secara online melalui portal PPDB resmi sekolah dengan mengunggah berkas administrasi dan nilai rapor. Sekolah juga menyediakan jalur prestasi khusus bagi calon siswa yang memiliki catatan prestasi unggul di bidang akademik, olahraga, maupun seni di tingkat regional dan nasional.",
        "Kuota untuk gelombang pertama ini sangat terbatas. Bagi para orang tua yang ingin mendapatkan informasi lebih mendalam mengenai fasilitas belajar, program beasiswa, serta kurikulum sekolah, dipersilakan untuk mengunjungi sekretariat pendaftaran di kampus utama kami."
    ],
    "8": [
        "Sekolah mengadakan Workshop Penulisan Karya Ilmiah Remaja (KIR) untuk mendorong budaya riset di kalangan siswa. Workshop ini menghadirkan akademisi ternama sebagai pembicara tamu guna memberikan pemahaman tentang metodologi penelitian, etika ilmiah, dan teknik penyusunan proposal riset yang sistematis.",
        "Selama workshop berlangsung, siswa diajak melakukan simulasi perumusan masalah, pengumpulan data sederhana, hingga teknik penulisan abstrak. Karya ilmiah terbaik yang dihasilkan dari pembinaan pasca-workshop ini akan didanai oleh sekolah untuk disertakan dalam kompetisi penelitian tingkat nasional.",
        "Kami percaya bahwa melatih cara berpikir ilmiah sejak dini akan sangat membantu siswa ketika melanjutkan studi ke perguruan tinggi kelak. Minat yang tinggi dari peserta workshop hari ini menunjukkan besarnya potensi intelektual yang dimiliki oleh siswa-siswi kami."
    ],
    "9": [
        "Suasana riuh dan penuh semangat menyelimuti area olahraga sekolah seiring dimulainya Class Meeting Semester Genap. Kegiatan tahunan pasca-ujian akhir ini menyajikan berbagai perlombaan menarik seperti futsal, bola basket, tari modern, hingga e-sports yang diikuti perwakilan dari setiap kelas.",
        "Class Meeting bertujuan untuk menyalurkan bakat non-akademik siswa sekaligus mempererat tali persaudaraan antar tingkat kelas. Selain kompetisi fisik, panitia OSIS juga menyelenggarakan kuis wawasan umum dan debat untuk memeriahkan suasana kompetitif yang sehat.",
        "Melalui kegiatan ini, siswa diajarkan nilai-nilai penting seperti sportivitas, kerja sama tim, dan kepemimpinan. Selamat bertanding untuk seluruh kelas, dan semoga kekompakan ini terus terjaga dalam kehidupan sehari-hari di sekolah."
    ],
    "10": [
        "Tim Futsal St. Academic Excellence sukses menyabet gelar juara kedua dalam Turnamen Futsal Pelajar Regional 2024. Prestasi ini diraih setelah perjuangan luar biasa di babak final melawan sekolah rival dalam laga ketat yang berakhir dengan skor tipis.",
        "Sejak babak penyisihan grup, tim futsal sekolah menunjukkan performa konsisten dan pertahanan kokoh. Pelatih futsal sekolah memuji kedisiplinan dan kerja sama yang ditunjukkan anak asuhnya sepanjang turnamen berlangsung. Dukungan penuh dari para supporter sekolah di tribun turut menjadi bahan bakar semangat para pemain.",
        "Gelar juara kedua ini menjadi motivasi besar bagi tim untuk terus berlatih lebih keras demi meraih podium tertinggi pada turnamen-turnamen berikutnya. Selamat atas perjuangan gigih seluruh pemain dan official futsal sekolah!"
    ]
};

export default function NewsDetail({ newsItem }: NewsDetailProps) {
    const [copied, setCopied] = useState(false);
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    // Get article paragraphs (fallback to default descriptions if not mapped)
    const paragraphs = ARTICLE_BODY_MAP[newsItem.id] || [newsItem.description];

    // Find related articles (same category first, exclude current article)
    const allItems = DEFAULT_NEWS_DATA.items;
    let related = allItems.filter(
        (item) => item.category === newsItem.category && item.id !== newsItem.id
    );

    // If related is less than 3, fill with other latest articles
    if (related.length < 3) {
        const remaining = allItems.filter(
            (item) => item.id !== newsItem.id && !related.some((r) => r.id === item.id)
        );
        related = [...related, ...remaining].slice(0, 3);
    } else {
        related = related.slice(0, 3);
    }

    const copyToClipboard = () => {
        if (!shareUrl) return;
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="w-full bg-slate-50/20">
            {/* Header / Breadcrumb Section */}
            <div className="bg-[#f0f4ff]/50 border-b border-slate-100 py-12 lg:py-16 animate-fade-in">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
                        <span>/</span>
                        <Link href="/news" className="hover:text-primary transition-colors">Berita</Link>
                        <span>/</span>
                        <span className="text-slate-800 font-bold truncate max-w-[200px] sm:max-w-[300px]">{newsItem.title}</span>
                    </nav>

                    <span className="inline-block bg-[#8B1E3F] text-white text-[10px] font-bold px-3.5 py-1.5 uppercase tracking-wider rounded-lg mb-4 shadow-xs">
                        {newsItem.category}
                    </span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                        {newsItem.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-500 font-semibold border-t border-slate-200/50 pt-4">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{newsItem.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <User className="w-4 h-4 text-primary" />
                            <span>{newsItem.author || "Humas Sekolah"}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Banner Image */}
                <div className="relative aspect-16/10 sm:aspect-video w-full rounded-[2rem] overflow-hidden bg-slate-100 shadow-md mb-8 lg:mb-12">
                    <Image
                        src={newsItem.imageUrl}
                        alt={newsItem.title}
                        fill
                        priority
                        loading="eager"
                        sizes="(max-w-1024px) 100vw, 850px"
                        className="object-cover"
                    />
                </div>

                {/* Article Text */}
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-6">
                    {paragraphs.map((p, index) => (
                        <p key={index} className="text-slate-600">
                            {p}
                        </p>
                    ))}
                </div>

                {/* Sharing Buttons */}
                <div className="border-y border-slate-200/60 py-6 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-2 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider">
                        <Share2 className="w-4 h-4 text-primary" />
                        <span>Bagikan Artikel Ini:</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {/* Copy Link Button */}
                        <button
                            onClick={copyToClipboard}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary transition-all duration-300 text-xs font-bold shadow-xs cursor-pointer"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                                    <span className="text-emerald-500">Tersalin!</span>
                                </>
                            ) : (
                                <>
                                    <LinkIcon className="w-3.5 h-3.5" />
                                    <span>Salin Link</span>
                                </>
                            )}
                        </button>

                        {/* WhatsApp Share */}
                        <a
                            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(newsItem.title + " - " + shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-all duration-300 text-xs font-bold shadow-xs"
                        >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.768.002-2.61-1.01-5.063-2.853-6.908C16.38 2.085 13.927.822 12.01.822c-5.4.002-9.799 4.382-9.802 9.77-.001 1.81.499 3.58 1.447 5.16l-.993 3.63 3.731-.979.264.15zM17.408 14.3c-.3-.149-1.772-.874-2.046-.975-.275-.101-.475-.149-.675.15-.2.299-.775.975-.95 1.174-.175.199-.35.224-.65.075-1.041-.52-1.874-.963-2.617-1.702-.575-.572-.947-1.282-1.059-1.498-.112-.217-.012-.335.088-.435.09-.09.2-.234.3-.35.1-.117.134-.199.2-.335.066-.137.033-.258-.017-.358-.05-.1-.475-1.149-.65-1.571-.171-.41-.344-.356-.475-.356-.125-.004-.27-.004-.413-.004s-.375.053-.572.271c-.2.217-.75.733-.75 1.791 0 1.059.775 2.08 1.05 2.454.275.375 1.5 2.291 3.633 3.21.507.219.903.35 1.213.448.51.162.973.139 1.339.085.409-.061 1.772-.724 2.022-1.424.25-.699.25-1.3.175-1.424-.075-.124-.275-.199-.575-.349z" />
                            </svg>
                            <span>WhatsApp</span>
                        </a>

                        {/* Twitter / X Share */}
                        <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(newsItem.title)}&url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-black transition-all duration-300 text-xs font-bold shadow-xs"
                        >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            <span>Twitter</span>
                        </a>

                        {/* Facebook Share */}
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1877F2] text-white hover:bg-[#166fe5] transition-all duration-300 text-xs font-bold shadow-xs"
                        >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span>Facebook</span>
                        </a>

                        {/* Intagram Share */}
                        <a
                            href={`https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white hover:bg-[#166fe5] transition-all duration-300 text-xs font-bold shadow-xs"
                        >
                            <svg
                                className="w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                            </svg>
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Related Articles Section */}
            <div className="bg-[#f0f4ff]/20 border-t border-slate-200/50 py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-6 mb-10 lg:mb-12">
                        <div>
                            <span className="text-primary text-xs lg:text-sm font-bold tracking-widest uppercase block mb-2">
                                UPDATE TERKAIT
                            </span>
                            <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Berita & Acara Terkait
                            </h2>
                        </div>
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider hover:translate-x-1 transition-transform"
                        >
                            Semua Berita
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Related Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {related.map((item) => (
                            <Link
                                href={`/news/${item.id}`}
                                key={item.id}
                                className="group flex flex-col h-full bg-white border border-slate-100/80 rounded-[2rem] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative aspect-16/10 overflow-hidden bg-slate-50">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        sizes="(max-w-768px) 100vw, 400px"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <span className="absolute top-4 left-4 bg-[#8B1E3F]/85 backdrop-blur-xs text-white text-[10px] font-bold px-3.5 py-1.5 uppercase tracking-wider rounded-lg z-10 shadow-sm">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <span className="text-slate-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 block">
                                        {item.date}
                                    </span>
                                    <h3 className="text-base sm:text-lg font-bold text-slate-800 line-clamp-2 mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                                        {item.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest mt-auto group-hover:gap-2 duration-300 transition-all">
                                        Selengkapnya
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useState, FormEvent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    UserPlus,
    FileText,
    CreditCard,
    ShieldCheck,
    CalendarCheck,
    Check,
    Users,
    BookOpen,
    HelpCircle,
    Send,
    Smartphone,
    Lock,
    X,
    CheckCircle2
} from "lucide-react";
import { SPMB_STEPS, SPMB_DOCUMENTS, SPMB_MAJORS } from "@/types/spmb/spmb.type";

export default function RegisterSpmbContent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [school, setSchool] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const formRef = useRef<HTMLDivElement>(null);

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!name || !email || !phone || !school) {
            return;
        }

        setIsSubmitting(true);

        // Simulate registration process (1.8 seconds)
        try {
            await new Promise((resolve) => setTimeout(resolve, 1800));
            setSubmitSuccess(true);
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setPhone("");
        setSchool("");
        setSubmitSuccess(false);
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    // Stepper helper
    const getStepIcon = (index: number) => {
        switch (index) {
            case 0: return <UserPlus className="w-6 h-6 text-primary" />;
            case 1: return <FileText className="w-6 h-6 text-primary" />;
            case 2: return <CreditCard className="w-6 h-6 text-primary" />;
            case 3: return <ShieldCheck className="w-6 h-6 text-primary" />;
            case 4: return <CalendarCheck className="w-6 h-6 text-primary" />;
            default: return <UserPlus className="w-6 h-6 text-primary" />;
        }
    };

    return (
        <div className="w-full bg-slate-50/20">

            {/* Hero Header Section */}
            <header className="bg-[#f0f4ff]/40 border-b border-slate-100 py-16 lg:py-24">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Hero Info Column */}
                        <div className="lg:col-span-7 flex flex-col items-start text-left">
                            <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/50 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold text-orange-600 mb-6 uppercase tracking-wider shadow-xs">
                                <span>📢</span> Admission Open for 2024/2025
                            </span>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                                Pendaftaran Siswa Baru <br />
                                <span className="text-primary">TA 2024/2025</span>
                            </h1>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-medium">
                                Mulai perjalanan akademismu bersama institusi pendidikan terkemuka. Kami mengundang putra-putri terbaik bangsa untuk bergabung dan bertumbuh dalam ekosistem keunggulan.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <button
                                    onClick={scrollToForm}
                                    className="px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-md shadow-primary/20 transition-all duration-300 hover:scale-103 text-center"
                                >
                                    Mulai Daftar &rarr;
                                </button>

                                <a
                                    href="/downloads/panduan-pendaftaran.pdf"
                                    target="_blank"
                                    className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-xs uppercase tracking-widest border border-slate-200 shadow-xs transition-all duration-300 hover:scale-103 text-center"
                                >
                                    Unduh Panduan
                                </a>
                            </div>
                        </div>

                        {/* Hero Image Column */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-4/3 sm:aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                                <Image
                                    src="/images/student-hero.png"
                                    alt="Siswa St. Academic Excellence"
                                    fill
                                    priority
                                    sizes="(max-w-1024px) 100vw, 500px"
                                    className="object-cover"
                                />

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 z-10">
                                    <div className="p-2.5 bg-red-50 rounded-xl shrink-0">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <span className="block text-slate-800 text-base font-extrabold leading-none mb-1">
                                            1.2k+
                                        </span>
                                        <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                                            Pendaftar Aktif
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Registration Stepper Timeline Section */}
            <section className="bg-white py-16 lg:py-20 border-b border-slate-100 animate-fade-in">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                            Alur Pendaftaran Online
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-semibold">
                            Ikuti 5 langkah mudah untuk menjadi bagian dari komunitas St. Academic Excellence.
                        </p>
                    </div>

                    {/* Steps Row */}
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-slate-100 hidden md:block z-0" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-start relative z-10">
                            {SPMB_STEPS.map((step, index) => (
                                <div key={step.number} className="flex flex-col items-center group">
                                    {/* Icon Circle */}
                                    <div className="relative w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-xs mx-auto mb-5 group-hover:border-primary/50 group-hover:shadow-md transition-all duration-500 bg-linear-to-b from-white to-slate-50">
                                        {getStepIcon(index)}
                                        {/* Number Badge */}
                                        <div className="absolute -top-1 -right-1 bg-[#8B1E3F] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-xs border border-white">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Step Details */}
                                    <h4 className="text-slate-800 font-extrabold text-sm sm:text-base mb-2 text-center leading-snug">
                                        {step.title}
                                    </h4>
                                    <p className="text-slate-400 text-xs text-center leading-relaxed font-semibold max-w-[170px] sm:max-w-none">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Prerequisites & Program Keahlian double-column grid */}
            <section className="bg-[#f0f4ff]/25 py-16 lg:py-20 border-b border-slate-100">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

                        {/* Left Card: Persyaratan Dokumen */}
                        <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col">
                            <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-6">
                                <FileText className="w-5 h-5 text-primary shrink-0" />
                                Persyaratan Dokumen
                            </h3>

                            <ul className="space-y-6 flex-1">
                                {SPMB_DOCUMENTS.map((doc, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="p-1 bg-emerald-50 rounded-full shrink-0 mt-0.5">
                                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <h5 className="font-extrabold text-slate-800 text-sm sm:text-base leading-none mb-1.5">
                                                {doc.title}
                                            </h5>
                                            <p className="text-slate-400 text-xs leading-relaxed font-semibold">
                                                {doc.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Cards: Program Keahlian Grid + WA Consult */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            {/* Program Keahlian main card */}
                            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs flex-1">
                                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                                    <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2.5">
                                        <BookOpen className="w-5 h-5 text-primary shrink-0" />
                                        Program Keahlian
                                    </h3>
                                    <span className="inline-block bg-red-50 text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-lg shadow-2xs">
                                        Tersedia: 4 Program
                                    </span>
                                </div>

                                {/* Majors Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                    {SPMB_MAJORS.map((major, idx) => (
                                        <div
                                            key={idx}
                                            className="p-5 bg-slate-50/50 border border-slate-100 rounded-2xl hover:border-primary/30 transition-all cursor-pointer group shadow-2xs"
                                        >
                                            <h5 className="font-extrabold text-slate-800 text-xs sm:text-sm mb-1.5 group-hover:text-primary transition-colors">
                                                {major.title}
                                            </h5>
                                            <p className="text-slate-400 text-[10px] sm:text-xs font-semibold leading-relaxed">
                                                {major.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Maroon WA Consult Banner */}
                            <div className="bg-primary text-white rounded-3xl p-6 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border border-[#9d254a]">
                                <div>
                                    <h4 className="font-extrabold text-base mb-1.5">
                                        Masih Ragu Memilih?
                                    </h4>
                                    <p className="text-rose-100/90 text-xs font-semibold leading-relaxed">
                                        Konsultasi gratis dengan konselor pendidikan kami.
                                    </p>
                                </div>
                                <a
                                    href="https://wa.me/62211234567"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-white text-[#8B1E3F] hover:bg-rose-50 transition-all font-bold text-xs rounded-full uppercase tracking-wider cursor-pointer shadow-xs shrink-0 self-start sm:self-auto hover:scale-103"
                                >
                                    Hubungi WA
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Account Creation Form Section */}
            <section ref={formRef} id="register-form" className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="bg-white border border-slate-100/80 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-12 items-stretch relative">

                    {/* Left Column: Maroon Details Banner */}
                    <div className="md:col-span-5 bg-primary text-white p-8 sm:p-10 flex flex-col justify-between relative border-r border-[#9d254a]">
                        <div className="flex flex-col">
                            <h3 className="font-extrabold text-xl sm:text-2xl tracking-tight mb-4 leading-tight">
                                Mulai Masa Depanmu <br />Hari Ini
                            </h3>
                            <p className="text-rose-100/80 text-xs sm:text-sm leading-relaxed mb-8 font-semibold">
                                Hanya butuh 2 menit untuk membuat akun pendaftaran awal. Tim kami akan segera menghubungi Anda setelah pengisian data.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-lg shrink-0">
                                        <Smartphone className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold">Support 24/7 untuk Pendaftar</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-lg shrink-0">
                                        <Lock className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold">Data Aman & Terenkripsi</span>
                                </li>
                            </ul>
                        </div>

                        {/* Call Center Info Box */}
                        <div className="bg-primary rounded-2xl p-4 mt-8 border border-primary-foreground/10 shadow-xs">
                            <span className="text-[9px] font-bold text-rose-200/90 uppercase tracking-widest block mb-1">
                                CALL CENTER
                            </span>
                            <span className="text-base sm:text-lg font-extrabold text-white leading-none">
                                +62 (21) 555-0199
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Account Form Panel */}
                    <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center relative">
                        {submitSuccess ? (
                            /* Success screen */
                            <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
                                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce-slow" />
                                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                                    Registrasi Berhasil!
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-8 font-medium">
                                    Selamat <span className="font-bold text-slate-800">{name}</span>! Akun pendaftaran awal Anda berhasil dibuat. Silakan periksa kotak masuk email (<span className="font-bold text-slate-800">{email}</span>) untuk mendapatkan link aktivasi portal.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className="px-8 py-3.5 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-xs active:scale-95 transition-all"
                                >
                                    Selesai
                                </button>
                            </div>
                        ) : (
                            /* Input form */
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="fullName" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Nama Lengkap Sesuai Ijazah <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Contoh: Ahmad Fauzan"
                                            className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-xs sm:text-sm font-medium transition-all"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="activeEmail" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Email Aktif <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="activeEmail"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="ahmad@example.com"
                                            className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-xs sm:text-sm font-medium transition-all"
                                        />
                                    </div>

                                    {/* Phone Input */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="whatsappPhone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Nomor WhatsApp <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="whatsappPhone"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="0812xxxxxx"
                                            className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-xs sm:text-sm font-medium transition-all"
                                        />
                                    </div>

                                    {/* School Origin Input */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="schoolOrigin" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Asal Sekolah (SMP/MTs) <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="schoolOrigin"
                                            required
                                            value={school}
                                            onChange={(e) => setSchool(e.target.value)}
                                            placeholder="Nama sekolah asal"
                                            className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-xs sm:text-sm font-medium transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Information Note Alert */}
                                <div className="p-4 bg-[#f0f4ff] rounded-2xl border border-indigo-50/50 flex items-start gap-3 text-slate-700">
                                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <h6 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide leading-none mb-1">
                                            Informasi Penting
                                        </h6>
                                        <p className="text-[11px] leading-relaxed text-slate-500 font-semibold">
                                            Pastikan email dan nomor WhatsApp Anda aktif untuk menerima link aktivasi portal pendaftaran dan jadwal ujian seleksi.
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-4 pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/95 disabled:bg-primary/70 text-white rounded-xl transition-all duration-300 font-bold text-xs uppercase tracking-widest cursor-pointer shadow-md shadow-primary/10 active:scale-98 select-none"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-4.5 h-4.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                <span>Memproses Akun...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Buat Akun Sekarang</span>
                                            </>
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-98"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

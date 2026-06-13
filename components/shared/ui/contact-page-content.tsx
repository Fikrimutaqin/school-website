"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { DEFAULT_CONTACT_DATA } from "@/types/contact/contact.type";

export default function ContactPageContent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Basic check
        if (!name || !email || !subject || !message) {
            setErrorMsg("Harap isi seluruh field formulir.");
            return;
        }

        setIsSubmitting(true);
        setErrorMsg("");
        setSubmitSuccess(false);

        // Simulate sending to email (1.5 seconds loading state)
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSubmitSuccess(true);

            // Reset fields
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            // Dismiss success banner after 6 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 6000);
        } catch (err) {
            setErrorMsg("Gagal mengirim pesan. Silakan coba kembali beberapa saat lagi.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactItems = [
        {
            icon: <MapPin className="w-5 h-5 text-primary" />,
            title: "Alamat Kampus",
            value: DEFAULT_CONTACT_DATA.address,
        },
        {
            icon: <Phone className="w-5 h-5 text-primary" />,
            title: "Telepon / WhatsApp",
            value: DEFAULT_CONTACT_DATA.phone,
        },
        {
            icon: <Mail className="w-5 h-5 text-primary" />,
            title: "Email Layanan",
            value: DEFAULT_CONTACT_DATA.email,
        },
        {
            icon: <Clock className="w-5 h-5 text-primary" />,
            title: "Jam Kerja & Pelayanan",
            value: DEFAULT_CONTACT_DATA.workingHours,
        },
    ];

    return (
        <div className="w-full bg-slate-50/20">
            {/* Header Hero Section */}
            <div className="bg-[#f0f4ff]/50 border-b border-slate-100 py-16 lg:py-20 animate-fade-in">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                    <span className="text-primary text-xs lg:text-sm font-bold tracking-widest uppercase block mb-3">
                        HUBUNGI KAMI
                    </span>
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                        Kontak & Layanan Informasi
                    </h1>
                    <p className="text-slate-600 max-w-2xl text-sm lg:text-base leading-relaxed">
                        Punya pertanyaan? Kami siap membantu. Hubungi tim administrasi kami atau kirimkan pesan secara langsung melalui formulir di bawah ini.
                    </p>
                </div>
            </div>

            {/* Split Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Contact Cards & Maps */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                                Informasi Kontak
                            </h2>
                            <p className="text-slate-500 text-xs sm:text-sm">
                                Kantor administrasi sekolah melayani korespondensi tatap muka dan telepon selama jam kerja pelayanan.
                            </p>
                        </div>

                        {/* Contacts List Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {contactItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="p-3 bg-red-50 rounded-xl shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-slate-800 font-bold text-xs sm:text-sm mb-1 uppercase tracking-wider">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Dynamic Feedback Email Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
                                Kirimkan Pesan
                            </h3>

                            {/* Success feedback Banner */}
                            {submitSuccess && (
                                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3 text-emerald-800 animate-fade-in">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h5 className="font-bold text-sm">Pesan Berhasil Dikirim!</h5>
                                        <p className="text-xs text-emerald-700/90 leading-relaxed mt-0.5">
                                            Terima kasih telah menghubungi kami. Pesan Anda telah diteruskan ke humas sekolah di <span className="font-semibold">info@stakademiexcellence.sch.id</span>. Kami akan segera menghubungi Anda kembali.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {errorMsg && (
                                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-800 animate-fade-in">
                                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                    <p className="text-xs font-semibold">{errorMsg}</p>
                                </div>
                            )}

                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                                        Nama Lengkap <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Masukkan Nama Lengkap Anda"
                                        className="px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-sm font-medium transition-all"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                                        Alamat Email <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Masukkan Alamat Email Anda"
                                        className="px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-sm font-medium transition-all"
                                    />
                                </div>

                                {/* Subject Input */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="subject" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                                        Subjek / Perihal <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        placeholder="Apa perihal yang ingin ditanyakan?"
                                        className="px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-sm font-medium transition-all"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                                        Isi Pesan <span className="text-primary">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tuliskan detail pertanyaan atau masukan Anda..."
                                        className="px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-sm font-medium transition-all resize-y"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/95 disabled:bg-primary/70 text-white rounded-full transition-all duration-300 font-bold text-xs sm:text-sm uppercase tracking-widest cursor-pointer shadow-md shadow-primary/20 select-none active:scale-98"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                            <span>Mengirim Pesan...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Kirim Pesan</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

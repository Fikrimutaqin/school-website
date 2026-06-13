"use client";

import React from "react";
import Link from "next/link";
import { Globe, AtSign, Phone, MapPin, Mail } from "lucide-react";
import { DEFAULT_FOOTER_DATA, FooterProps } from "@/types/footer/footer.type";

export default function FooterLayout({ data = DEFAULT_FOOTER_DATA }: FooterProps) {
    const {
        brandNameLine1,
        brandNameLine2,
        description,
        navigationTitle,
        navigationItems,
        contactTitle,
        contactDetails,
        relatedLinksTitle,
        relatedLinksItems,
        copyrightText,
        socials
    } = data;

    return (
        <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section: Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

                    {/* Brand / Logo column */}
                    <div className="lg:col-span-4 flex flex-col items-start gap-4">
                        <Link href="/" className="flex flex-col group">
                            <span className="text-2xl font-extrabold text-primary tracking-tight leading-none group-hover:opacity-90 transition-opacity">
                                {brandNameLine1}
                            </span>
                            <span className="text-2xl font-extrabold text-primary tracking-tight leading-none mt-1 group-hover:opacity-90 transition-opacity">
                                {brandNameLine2}
                            </span>
                        </Link>

                        <p className="text-sm text-slate-500 font-light leading-relaxed max-w-sm">
                            {description}
                        </p>

                        {/* Social Circle Links */}
                        <div className="flex items-center gap-3 mt-4">
                            <a
                                href={socials.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-rose-50 hover:bg-primary/10 rounded-full flex items-center justify-center text-primary transition-all duration-300 shadow-xs"
                                aria-label="Website"
                            >
                                <Globe className="w-4.5 h-4.5" />
                            </a>
                            <a
                                href={socials.email}
                                className="w-10 h-10 bg-rose-50 hover:bg-primary/10 rounded-full flex items-center justify-center text-primary transition-all duration-300 shadow-xs"
                                aria-label="Email"
                            >
                                <AtSign className="w-4.5 h-4.5" />
                            </a>
                            <a
                                href={socials.phone}
                                className="w-10 h-10 bg-rose-50 hover:bg-primary/10 rounded-full flex items-center justify-center text-primary transition-all duration-300 shadow-xs"
                                aria-label="Telepon"
                            >
                                <Phone className="w-4.5 h-4.5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                            {navigationTitle}
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {navigationItems.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-slate-600 hover:text-primary transition-colors duration-200 font-medium leading-relaxed block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                            {contactTitle}
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-3 items-start">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-600 font-medium leading-relaxed">
                                    {contactDetails.address}
                                </span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <a
                                    href={socials.phone}
                                    className="text-sm text-slate-600 hover:text-primary transition-colors font-medium leading-relaxed"
                                >
                                    {contactDetails.phone}
                                </a>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <a
                                    href={socials.email}
                                    className="text-sm text-slate-600 hover:text-primary transition-colors font-medium leading-relaxed break-all"
                                >
                                    {contactDetails.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Related Links */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                            {relatedLinksTitle}
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {relatedLinksItems.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-slate-600 hover:text-primary transition-colors duration-200 font-medium leading-relaxed block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Thin separating border */}
                <div className="w-full h-px bg-rose-100/50 mb-8 mt-4" />

                {/* Bottom Section: Copyright & Social links */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 font-medium tracking-wide text-center md:text-left">
                        @{new Date().getFullYear()} {copyrightText}
                    </span>

                    <div className="flex items-center gap-6">
                        <a
                            href={socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-slate-500 hover:text-primary transition-colors duration-200"
                        >
                            Facebook
                        </a>
                        <a
                            href={socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-slate-500 hover:text-primary transition-colors duration-200"
                        >
                            Instagram
                        </a>
                        <a
                            href={socials.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-slate-500 hover:text-primary transition-colors duration-200"
                        >
                            YouTube
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
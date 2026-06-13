import Link from "next/link";
import MajorHero from "@/components/shared/ui/major-hero";
import MajorItemSection from "@/components/shared/ui/major-item";
import MajorPartners from "@/components/shared/ui/major-partners";
import { DEFAULT_MAJOR_PAGE_DATA } from "@/types/major/major.type";
import CtaSection from "@/components/shared/ui/cta";
import { DEFAULT_CTA_DATA } from "@/types/cta/cta.type";

export default function MajorPage() {
    const data = DEFAULT_MAJOR_PAGE_DATA;

    return (
        <div className="w-full flex flex-col">
            {/* Majors Hero Banner & Subnav */}
            <MajorHero data={data.hero} />

            {/* Alternating Major Sections */}
            <div className="w-full flex flex-col">
                {data.majors.map((major, index) => (
                    <MajorItemSection
                        key={major.id}
                        data={major}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>

            {/* Industry Partners Section */}
            <MajorPartners data={data.partners} />

            {/* Custom CTA Section with rounded card styling */}
            <CtaSection data={DEFAULT_CTA_DATA} />
        </div>
    );
}

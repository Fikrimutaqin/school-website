import StudentHero from "@/components/shared/ui/student-hero";
import StudentExtracurriculars from "@/components/shared/ui/student-extracurriculars";
import StudentOsis from "@/components/shared/ui/student-osis";
import StudentGallery from "@/components/shared/ui/student-gallery";
import CtaSection from "@/components/shared/ui/cta";
import { DEFAULT_STUDENT_PAGE_DATA } from "@/types/student/student.type";
import { DEFAULT_CTA_DATA } from "@/types/cta/cta.type";

export default function StudentPage() {
    const data = DEFAULT_STUDENT_PAGE_DATA;

    return (
        <div className="w-full flex flex-col">
            {/* Student Hero Section */}
            <StudentHero data={data.hero} />

            {/* Extracurricular Section */}
            <StudentExtracurriculars data={data.extracurriculars} />

            {/* OSIS Section */}
            <StudentOsis data={data.osis} />

            {/* Gallery Section */}
            <StudentGallery data={data.gallery} />

            {/* CTA Section */}
            <CtaSection data={DEFAULT_CTA_DATA} />
        </div>
    );
}

import HeroSection from "@/components/shared/ui/hero";
import AboutSection from "@/components/shared/ui/about";
import AchievementSection from "@/components/shared/ui/achievement";
import CurriculumSection from "@/components/shared/ui/curriculum";
import NewsSection from "@/components/shared/ui/news";
import MapsSection from "@/components/shared/ui/maps";
import AnnouncementSection from "@/components/shared/ui/announcement";
import { DEFAULT_HERO_DATA } from "@/types/hero/hero.type";
import { DEFAULT_ABOUT_DATA } from "@/types/about/about.type";
import { DEFAULT_ACHIEVEMENT_DATA } from "@/types/achievement/achievement.type";
import { DEFAULT_CURRICULUM_DATA } from "@/types/curriculum/curriculum.type";
import { DEFAULT_NEWS_DATA } from "@/types/news/news.type";
import { DEFAULT_MAPS_DATA } from "@/types/maps/maps.type";
import FloatingAnnouncement from "@/components/shared/ui/floating-announcement";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection data={DEFAULT_HERO_DATA} />
      <AboutSection data={DEFAULT_ABOUT_DATA} />
      <AchievementSection data={DEFAULT_ACHIEVEMENT_DATA} />
      <CurriculumSection data={DEFAULT_CURRICULUM_DATA} />
      <NewsSection data={DEFAULT_NEWS_DATA} />
      <MapsSection data={DEFAULT_MAPS_DATA} />
      <FloatingAnnouncement />
    </div>
  );
}

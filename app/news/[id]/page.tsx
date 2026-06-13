import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DEFAULT_NEWS_DATA } from "@/types/news/news.type";
import NewsDetail from "./detail";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return DEFAULT_NEWS_DATA.items.map((item) => ({
        id: item.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const newsItem = DEFAULT_NEWS_DATA.items.find((item) => item.id === id);
    
    if (!newsItem) {
        return {
            title: "Berita Tidak Ditemukan",
        };
    }
    
    return {
        title: `${newsItem.title} - St. Academic Excellence`,
        description: newsItem.description,
    };
}

export default async function NewsDetailPage({ params }: PageProps) {
    const { id } = await params;
    const newsItem = DEFAULT_NEWS_DATA.items.find((item) => item.id === id);

    if (!newsItem) {
        notFound();
    }

    return <NewsDetail newsItem={newsItem} />;
}

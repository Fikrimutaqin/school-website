import { 
    Home, 
    User, 
    BookOpen, 
    GraduationCap, 
    Briefcase, 
    Newspaper, 
    LucideIcon 
} from "lucide-react";

export interface MenuType {
    id: string;
    title: string;
    path: string;
    icon: LucideIcon;
}

export interface NavbarProps {
    menu?: MenuType[];
}

export const MENU: MenuType[] = [
    {
        id: "1",
        title: "Home",
        path: "/",
        icon: Home
    },
    {
        id: "2",
        title: "Profile",
        path: "/profile",
        icon: User
    },
    {
        id: "3",
        title: "Curriculum",
        path: "/curriculum",
        icon: BookOpen
    },
    {
        id: "4",
        title: "Student",
        path: "/student",
        icon: GraduationCap
    },
    {
        id: "5",
        title: "Major",
        path: "/major",
        icon: Briefcase
    },
    {
        id: "6",
        title: "News",
        path: "/news",
        icon: Newspaper
    }
]
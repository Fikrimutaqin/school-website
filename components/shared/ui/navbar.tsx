"use client";

import { NavbarProps, MENU } from "@/types/menu/menu.type";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";


export default function NavbarUI({ menu = MENU }: NavbarProps) {
    const pathname = usePathname();
    const isMobile = useMobile();

    return (
        <header className="w-full mx-auto bg-white/80 backdrop-blur-md px-4 lg:px-8 flex flex-row justify-between items-center shadow-sm sticky top-0  z-50 h-16 lg:h-20">
            {/* Logo or Title (Left) */}
            <section className="flex-1 flex justify-start items-center">
                <h2 className="text-primary font-bold text-xl lg:text-2xl tracking-wide">School Academic.sch</h2>
            </section>

            {/* Menu (Center) */}
            <nav className="flex-initial lg:flex justify-center items-center hidden">
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-row items-center">
                        {menu.map((component, id) => {
                            const Icon = component.icon;
                            return (
                                <NavigationMenuItem key={id} className="px-5">
                                    <Link
                                        href={component.path}
                                        className={`group pl-1 py-2 text-md font-semibold tracking-wide flex items-center gap-1 transition-colors duration-200 ${pathname === component.path
                                            ? 'text-primary underline underline-offset-8'
                                            : 'text-slate-700 hover:text-primary'
                                            }`}
                                    >
                                        {/* {Icon && (
                                            <Icon className="w-4 h-4 transition-colors duration-200" />
                                        )} */}
                                        {component.title}
                                    </Link>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

            {/* Actions (Right) */}
            <section className="flex-1 lg:flex justify-end items-center gap-3 hidden">
                <Link href={"/register-spmb"} className="bg-primary text-white font-semibold tracking-wide text-md rounded-full p-4 cursor-pointer hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary hover:scale-110">
                    Register SPMB Online
                </Link>
            </section>

            {/* Mobile Menu */}
            {isMobile && (
                <Sheet>
                    <SheetTrigger className="lg:hidden">
                        <Menu className="w-5 h-5 text-primary cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent className="border-0! dark:border-0! shadow-2xl lg:hidden">
                        <SheetHeader>
                            <SheetTitle className="text-primary font-bold tracking-wide">
                                Menu
                            </SheetTitle>
                            <SheetDescription>
                                This Menu You Can Access All Page in This Website
                            </SheetDescription>
                        </SheetHeader>
                        <nav className="flex flex-col w-full justify-start items-start">
                            <NavigationMenu className="flex flex-col w-full justify-start items-start">
                                <NavigationMenuList className="flex flex-col items-start w-full">
                                    {menu.map((component, id) => {
                                        const Icon = component.icon;
                                        return (
                                            <NavigationMenuItem key={id} className="px-4 py-2 w-full">
                                                <Link
                                                    href={component.path}
                                                    className={`group py-2 text-sm font-medium tracking-wide flex items-center gap-2 transition-colors duration-200 ${pathname === component.path
                                                        ? 'text-primary underline underline-offset-8'
                                                        : 'text-slate-700 hover:text-primary'
                                                        }`}
                                                >
                                                    {/* {Icon && (
                                                        <Icon className="w-4 h-4 transition-colors duration-200" />
                                                    )} */}
                                                    {component.title}
                                                </Link>
                                            </NavigationMenuItem>
                                        );
                                    })}
                                </NavigationMenuList>
                                <section className="flex-1 justify-end items-center gap-3 pt-2 px-1">
                                    <Link href={"#"} className="flex flex-row items-center gap-x-2 w-full text-slate-700 font-medium tracking-wide text-sm rounded-full py-3 px-3 cursor-pointer hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary hover:scale-110">
                                        Register SPMB Online
                                    </Link>
                                </section>
                            </NavigationMenu>
                        </nav>
                    </SheetContent>
                </Sheet>
            )}
        </header >
    );
}
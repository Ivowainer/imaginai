"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { navLinks } from "@/constants";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image src="/assets/images/logo-text.svg" alt="logo mobilenav imaginai" width={180} height={28} />
            </Link>
            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <Sheet>
                        <SheetTrigger>
                            <Image src="/assets/icons/menu.svg" width={32} height={32} className="cursor-pointer" alt="menu mobilenav imaginai" />
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-64">
                            <>
                                <Image src="/assets/images/logo-text.svg" width={152} height={23} alt="logo mobilenav imaginai" />
                                <ul className="header-sidebar-nav_elements">
                                    {navLinks.slice(0, 6).map((link) => {
                                        const isActive = link.route == pathname;

                                        return (
                                            <li key={link.route} className={`${isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark-700`}>
                                                <Link href={link.route} className="sidebar-link cursor-pointer">
                                                    <Image src={link.icon} width={24} height={24} alt="logo sidebarlink" />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
                <SignedOut>
                    <Button asChild className="button bg-purple-gradient bg-cover">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    );
};

export default MobileNav;

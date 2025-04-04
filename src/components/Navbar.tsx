"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={null} item="About Us">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="ardha-padmasana">Ardha Padmasana</HoveredLink>
                        <HoveredLink href="/bhujangasana">Bhujangasana</HoveredLink>
                        <HoveredLink href="/halasana">Halasana</HoveredLink>
                        <HoveredLink href="/natarajasana">Natarajasana</HoveredLink>
                        <HoveredLink href="/sarvangasana">Sarvangasana</HoveredLink>
                        <HoveredLink href="/vrikshasana">Vrikshasana</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={null} item="Contact Us" />
            </Menu>
        </div>
    );
}

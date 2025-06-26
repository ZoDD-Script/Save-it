"use client";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Logo } from "./Logo";

const Sidebar = ({
  fullName,
  email,
  avatar,
}: {
  fullName: string;
  email: string;
  avatar: string;
}) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/">
        {/* <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        /> */}
        <Logo className="hidden h-auto lg:block" text="text-4xl" />

        {/* <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        /> */}
        <Logo className="lg:hidden" text="text-4xl" />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ name, url, icon }) => (
            <Link key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image
                  src={icon}
                  alt={`${name} icon`}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image
        src="/assets/images/folder.png"
        alt="files"
        width={506}
        height={418}
        className="w-full"
      />

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="user avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

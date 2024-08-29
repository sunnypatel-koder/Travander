"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="z-10 px-32 py-[1.7rem] w-full items-center justify-between text-sm">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            priority
            className="w-[121px] h-fit"
            src="/travander-logo.png"
            height="200"
            width="500"
            alt="logo"
          />
        </Link>
        <ul className="flex items-center text-[16.1px] font-medium gap-[2.2rem] ">
          <li className={pathname === "/" ? "active_tab" : "  "}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === "/community" ? "active_tab" : ""}>
            <Link href="/community">Community</Link>
          </li>
          <li className={pathname === "/about-us" ? "active_tab" : ""}>
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="rounded-3xl cursor-pointer shadow-md font-semibold px-[3.2rem] py-[0.85rem]">
            Log in
          </li>
        </ul>
      </div>
    </div>
  );
}

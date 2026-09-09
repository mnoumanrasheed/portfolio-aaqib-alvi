import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/content";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Leadership & Expertise", href: "/expertise" },
  { label: "Impact", href: "/ventures" },
  { label: "Global Reach", href: "/global-reach" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="max-w-xl">
            <Link
              href="/"
              aria-label="Aaqib Alvi homepage"
              className="group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-4"
            >
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/15">
                <Image src="/logo.png" alt="Aaqib Alvi Logo" fill sizes="44px" className="object-cover" />
              </span>
              <span className="flex flex-col">
                <span className="text-base font-medium uppercase leading-none tracking-[0.08em] text-white transition-colors group-hover:text-brand-gold">
                  Aaqib Alvi
                </span>
                <span className="mt-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-brand-gold">
                  AI &bull; Innovation &bull; Impact
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Global program and business leader working across AI readiness, digital skills,
              sustainability, EdTech, and institutional implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_auto] lg:justify-end lg:gap-20">
            <nav aria-label="Footer navigation">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-slate-400">
                Navigate
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 sm:gap-x-10">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-300 transition-colors duration-300 hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-slate-400">
                Connect
              </p>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-300 hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-4"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-6 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Aaqib Alvi. All rights reserved.</p>
          <p>Singapore / United States</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Leadership & Expertise", href: "/expertise" },
  { label: "Impact", href: "/ventures" },
];

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4";
const cta = "group inline-flex min-h-11 items-center gap-2 rounded-sm btn-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300";

export default function Navbar() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", update);
    return () => desktop.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a[href]");
      const last = links?.[links.length - 1];
      if (event.shiftKey && document.activeElement === toggle.current) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", keydown);
    };
  }, [open]);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-sans tracking-normal">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 border-b transition-colors duration-500 motion-reduce:transition-none",
          "border-[var(--border)] bg-[var(--navbar-bg)] backdrop-blur-xl",
          scrolled || open ? "shadow-lg" : ""
        )}
      />
      <div className="relative mx-auto flex h-16 lg:h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Aaqib Alvi homepage" className={cn("group flex shrink-0 items-center gap-3", focus)}>
          <div className="relative h-9 w-9 lg:h-10 lg:w-10 overflow-hidden rounded-full border border-white/15 transition-colors duration-300 group-hover:border-gold/80 [html[data-theme='light']_&]:border-slate-300">
            <Image src="/logo.png" alt="Aaqib Alvi Emblem" fill sizes="40px" className="object-cover" priority />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-display text-[20px] sm:text-[22px] font-normal leading-none text-[var(--text-primary)]">
              AAQIB ALVI
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium leading-normal text-gold tracking-wide">
              AI &bull; Innovation &bull; Impact
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              aria-current={active(item.href) ? "page" : undefined}
              className={cn(
                "group relative flex min-h-11 items-center whitespace-nowrap text-sm font-medium transition-colors duration-300 hover:text-gold",
                focus,
                active(item.href) ? "text-gold" : "text-text"
              )}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px origin-left bg-gold transition-transform duration-500 motion-reduce:transition-none",
                  active(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* PDF Download Button (desktop) */}
          <a
            href="/aaqib-alvi-profile.pdf"
            download="Aaqib-Alvi-Executive-Profile.pdf"
            title="Download Executive Profile PDF"
            className={cn(
              "group hidden min-h-10 items-center gap-2 rounded-sm border border-gold/40 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-text transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold xl:inline-flex",
              focus
            )}
          >
            <Download className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:translate-y-0.5" />
            <span>Profile PDF</span>
          </a>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Start a Conversation CTA */}
          <Link
            href="/contact"
            prefetch={true}
            aria-current={active("/contact") ? "page" : undefined}
            className={cn(cta, focus, "hidden shrink-0 sm:inline-flex")}
          >
            <span>Start Conversation</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
            />
          </Link>

          {/* Mobile menu trigger */}
          <button
            ref={toggle}
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-text hover:text-gold lg:hidden",
              focus
            )}
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            ref={panel}
            initial={{ opacity: 0, y: reducedMotion ? 0 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }}
            transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto border-t border-[var(--border)] bg-[var(--navbar-bg)] backdrop-blur-2xl px-6 py-8 sm:px-10 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-xl flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  onClick={() => setOpen(false)}
                  aria-current={active(item.href) ? "page" : undefined}
                  className={cn(
                    "group flex min-h-16 items-center justify-between gap-5 border-b border-[var(--border)] py-4 font-display text-[26px] leading-tight transition-colors duration-300 hover:text-gold",
                    focus,
                    active(item.href) ? "text-gold" : "text-foreground"
                  )}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-gold" />
                </Link>
              ))}

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="/aaqib-alvi-profile.pdf"
                  download="Aaqib-Alvi-Executive-Profile.pdf"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm border border-gold/50 bg-gold/10 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold/20"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Executive Profile (PDF)</span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  aria-current={active("/contact") ? "page" : undefined}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm btn-gold px-6 py-3 text-xs font-semibold uppercase tracking-wider"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

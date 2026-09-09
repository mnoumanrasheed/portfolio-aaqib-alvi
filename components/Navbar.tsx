"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Leadership & Expertise", href: "/expertise" },
  { label: "Impact", href: "/ventures" },
];
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4";
const cta = "group inline-flex min-h-11 items-center gap-4 border-b border-gold/60 py-2 text-sm font-medium text-gold transition-colors duration-300 hover:border-white hover:text-white";

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

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const update = () => { if (desktop.matches) setOpen(false); };
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
      <div aria-hidden="true" className={cn(
        "pointer-events-none absolute inset-0 border-b transition-colors duration-500 motion-reduce:transition-none",
        scrolled || open ? "border-white/10 bg-[#080C14]/85 backdrop-blur-xl shadow-lg shadow-black/60" : "border-transparent bg-transparent"
      )} />
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Aaqib Alvi homepage" className={cn("group flex shrink-0 items-center gap-3", focus)}>
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 transition-colors duration-300 group-hover:border-gold/80">
            <Image src="/logo.png" alt="" fill sizes="40px" className="object-cover" priority />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-[24px] font-normal leading-none text-white">AAQIB ALVI</span>
            <span className="text-[9px] font-medium leading-normal text-gold">AI &bull; Innovation &bull; Impact</span>
          </div>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex xl:gap-12">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}
              className={cn("group relative flex min-h-11 items-center whitespace-nowrap text-[13px] font-medium transition-colors duration-300 hover:text-gold", focus, active(item.href) ? "text-gold" : "text-slate-300")}>
              {item.label}
              <span aria-hidden="true" className={cn("absolute inset-x-0 bottom-0 h-px origin-left bg-gold transition-transform duration-500 motion-reduce:transition-none", active(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100")} />
            </Link>
          ))}
        </nav>
        <Link href="/contact" aria-current={active("/contact") ? "page" : undefined} className={cn(cta, focus, "hidden shrink-0 lg:inline-flex")}>
          Start a Conversation
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
        </Link>
        <button ref={toggle} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)} className={cn("flex h-11 w-11 shrink-0 items-center justify-center text-slate-200 hover:text-gold lg:hidden", focus)}>
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" ref={panel}
            initial={{ opacity: 0, y: reducedMotion ? 0 : -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }}
            transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto border-t border-white/10 bg-[#080C14]/95 backdrop-blur-2xl px-6 py-8 sm:px-10 lg:hidden">
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-xl flex-col">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={active(item.href) ? "page" : undefined}
                  className={cn("group flex min-h-20 items-center justify-between gap-5 border-b border-white/10 py-5 font-display text-[28px] leading-tight transition-colors duration-300 hover:text-gold", focus, active(item.href) ? "text-gold" : "text-white")}>
                  <span>{item.label}</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-gold" />
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} aria-current={active("/contact") ? "page" : undefined} className={cn(cta, focus, "mt-10 self-start")}>
                Start a Conversation
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

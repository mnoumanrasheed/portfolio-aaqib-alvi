"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Leadership & Expertise", href: "/expertise" },
  { label: "Impact", href: "/ventures" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-2.5 bg-[#030712]/85 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
            : "py-4 bg-transparent"
        )}
      >
        <div
          className={cn(
            "absolute top-0 inset-x-0 h-[1px] transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,210,255,0.5) 30%, rgba(212,175,55,0.4) 70%, transparent 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-gold/35 group-hover:border-brand-cyan/60 transition-all duration-400 shadow-[0_0_18px_rgba(0,210,255,0.2)]">
              <Image
                src="/logo.png"
                alt="Aaqib Alvi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-400"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-[15px] font-bold tracking-[0.12em] text-white group-hover:text-brand-cyan transition-colors duration-300"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                AAQIB ALVI
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-brand-gold font-semibold mt-0.5 opacity-90">
                AI • Innovation • Impact
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 px-1.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[10.5px] uppercase tracking-[0.13em] font-semibold rounded-full transition-colors duration-200 xl:px-4 xl:text-[11px]",
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-100"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0,210,255,0.18) 0%, rgba(212,175,55,0.12) 100%)",
                        border: "1px solid rgba(0,210,255,0.35)",
                        boxShadow: "0 0 18px rgba(0,210,255,0.25)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-emerald/30 bg-brand-emerald/[0.08]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald" />
              </span>
              <span className="text-[10px] tracking-wider text-brand-emeraldLight font-semibold">
                Available for Advisory
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-[10.5px] font-bold uppercase tracking-[0.13em] btn-gold xl:px-5 xl:text-[11px]"
            >
              Start a Conversation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="px-3.5 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.12em] rounded-full btn-gold whitespace-nowrap sm:text-[10px]"
            >
              Start a Conversation
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-[72px] z-40 lg:hidden"
          >
            <div className="glass-panel rounded-2xl p-5 border border-white/12 shadow-glass-elevated">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200",
                        isActive
                          ? "bg-brand-cyan/12 text-brand-cyan border border-brand-cyan/25"
                          : "text-slate-300 hover:bg-white/[0.04] hover:text-white border border-transparent"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-60" />
                    </Link>
                  );
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Singapore • USA</span>
                </div>
                <div className="text-xs text-brand-gold font-semibold tracking-wide">
                  +65 8339 0549
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

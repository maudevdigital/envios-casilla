"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on click outside
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMobile();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen, closeMobile]);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
    { href: "/faq", label: t("faq") },
  ];

  const serviceLinks = [
    { href: "/services/usa-shipping", label: t("usaShipping") },
    { href: "/services/china-imports", label: t("chinaImports") },
    { href: "/services/personal-shopping", label: t("personalShopping") },
  ];

  const switchLocale = (locale: "es" | "en") => {
    router.replace(pathname, { locale });
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">EC</span>
            </div>
            <span className="text-lg font-bold text-slate-800">
              Envios<span className="text-teal-600">Casilla</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-teal-600 bg-teal-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-teal-600 bg-teal-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {t("services")}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 text-sm text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => switchLocale("es")}
                className="px-3 py-1.5 text-xs font-medium transition-colors hover:bg-slate-50 data-[active=true]:bg-teal-50 data-[active=true]:text-teal-700"
                data-active={pathname === usePathname() ? undefined : undefined}
              >
                ES
              </button>
              <button
                onClick={() => switchLocale("en")}
                className="px-3 py-1.5 text-xs font-medium transition-colors hover:bg-slate-50 border-l border-slate-200"
              >
                EN
              </button>
            </div>

            <Link
              href="/quote"
              className="px-5 py-2.5 bg-linear-to-r from-teal-500 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all shadow-sm"
            >
              {t("quote")}
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-16 bg-black/40 z-40"
            onClick={closeMobile}
          />
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden relative z-50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                    pathname === link.href
                      ? "text-teal-600 bg-teal-50"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pl-4 pt-2 pb-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {t("services")}
              </div>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                    pathname === link.href
                      ? "text-teal-600 bg-teal-50"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center gap-2 pt-3 px-4">
                <Globe className="w-4 h-4 text-slate-400" />
                <button
                  onClick={() => { switchLocale("es"); setMobileOpen(false); }}
                  className="text-sm font-medium text-slate-600 hover:text-teal-600"
                >
                  Español
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() => { switchLocale("en"); setMobileOpen(false); }}
                  className="text-sm font-medium text-slate-600 hover:text-teal-600"
                >
                  English
                </button>
              </div>

              <div className="pt-3 px-4">
                <Link
                  href="/quote"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 bg-linear-to-r from-teal-500 to-cyan-600 text-white text-sm font-semibold rounded-lg"
                >
                  {t("quote")}
                </Link>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

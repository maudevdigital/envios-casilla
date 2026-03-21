"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppSelectorProps {
  children: React.ReactNode;
  className?: string;
}

const CHILE_NUMBER = "56928423774";
const PARAGUAY_NUMBER = "595992110955";

export default function WhatsAppSelector({ children, className = "" }: WhatsAppSelectorProps) {
  const t = useTranslations("whatsapp");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const msgChile = encodeURIComponent(t("messageChile"));
  const msgParaguay = encodeURIComponent(t("messageParaguay"));

  return (
    <div ref={ref} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={className}
      >
        {children}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50"
          >
            <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {t("selectCountry")}
              </p>
            </div>

            <a
              href={`https://wa.me/${CHILE_NUMBER}?text=${msgChile}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-teal-50 transition-colors"
            >
              <span className="text-xl">🇨🇱</span>
              <div>
                <p className="text-sm font-semibold text-slate-800">Chile</p>
                <p className="text-xs text-slate-400">+56 9 2842 3774</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${PARAGUAY_NUMBER}?text=${msgParaguay}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-teal-50 transition-colors border-t border-slate-100"
            >
              <span className="text-xl">🇵🇾</span>
              <div>
                <p className="text-sm font-semibold text-slate-800">Paraguay</p>
                <p className="text-xs text-slate-400">+595 992 110 955</p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

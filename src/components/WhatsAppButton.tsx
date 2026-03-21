"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CHILE_NUMBER = "56928423774";
const PARAGUAY_NUMBER = "595992110955";

export default function WhatsAppButton() {
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
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full right-0 mb-3 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
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
              className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors"
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
              className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors border-t border-slate-100"
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

      <motion.button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
      </motion.button>
    </div>
  );
}

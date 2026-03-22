"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

const GROUPS = [
  {
    key: "paymentMethods" as const,
    items: ["Webpay", "RedCompra", "Servipag"],
  },
  {
    key: "localPartners" as const,
    items: ["Starken", "Chilexpress", "Blue Express"],
  },
  {
    key: "internationalPartners" as const,
    items: ["UPS", "FedEx", "DHL"],
  },
];

interface PartnersStripProps {
  variant?: "light" | "dark";
}

export default function PartnersStrip({ variant = "light" }: PartnersStripProps) {
  const t = useTranslations("footer");

  const isDark = variant === "dark";

  return (
    <section className={isDark ? "py-16 lg:py-20 bg-slate-900" : "py-16 lg:py-20 bg-slate-50 border-y border-slate-200"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {GROUPS.map((group, gi) => (
            <AnimatedSection key={group.key} delay={gi * 0.1}>
              <div className="text-center">
                <h5
                  className={`text-xs font-semibold uppercase tracking-widest mb-5 ${
                    isDark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  {t(group.key)}
                </h5>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {group.items.map((name) => (
                    <div
                      key={name}
                      className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                        isDark
                          ? "bg-slate-800/80 border border-slate-700/50 text-slate-300 hover:border-slate-600"
                          : "bg-white border border-slate-200 text-slate-600 shadow-sm hover:border-teal-300 hover:shadow-md"
                      }`}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

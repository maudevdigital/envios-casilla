"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import LegalContent from "@/components/LegalContent";

const sectionKeys = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"];

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-teal-900" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {t("title")}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl">{t("subtitle")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs text-slate-400 mb-6">{t("lastUpdate")}</p>
            <p className="text-slate-600 leading-relaxed mb-12">{t("intro")}</p>
          </AnimatedSection>

          <div className="space-y-10">
            {sectionKeys.map((key, index) => (
              <AnimatedSection key={key} delay={index * 0.05}>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-4">
                    {t(`sections.${key}.title`)}
                  </h2>
                  <LegalContent content={t(`sections.${key}.content`)} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

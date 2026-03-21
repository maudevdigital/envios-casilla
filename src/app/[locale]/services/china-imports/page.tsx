"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Search,
  HandCoins,
  ShieldCheck,
  Ship,
  FileCheck,
  MapPin,
  Factory,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import CTASection from "@/components/CTASection";

export default function ChinaImportsPage() {
  const t = useTranslations("chinaPage");

  const benefits = [
    { icon: Search, key: "sourcing" },
    { icon: HandCoins, key: "negotiation" },
    { icon: ShieldCheck, key: "quality" },
    { icon: Ship, key: "logistics" },
    { icon: FileCheck, key: "customs" },
    { icon: MapPin, key: "delivery" },
  ];

  const industries = [
    t("industries.items.0"),
    t("industries.items.1"),
    t("industries.items.2"),
    t("industries.items.3"),
    t("industries.items.4"),
    t("industries.items.5"),
  ];

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/china-imports.webp"
          alt="China imports logistics"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <span className="text-sm text-teal-300 font-medium">China &rarr; Chile & Paraguay</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {t("title")}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl">{t("subtitle")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              {t("intro")}
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              {t("benefits.title")}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.key} delay={index * 0.08}>
                  <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-teal-200 hover:shadow-md transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-2">
                      {t(`benefits.${item.key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {t(`benefits.${item.key}.description`)}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ParallaxSection className="py-20 lg:py-28 bg-slate-50" speed={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              {t("industries.title")}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-200 transition-all">
                  <Factory className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{industry}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <CTASection />
    </>
  );
}

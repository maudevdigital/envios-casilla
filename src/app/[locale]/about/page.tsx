"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Target,
  Eye,
  Sparkles,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Lock,
  Package,
  Users,
  Globe2,
  CalendarDays,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";

export default function AboutPage() {
  const t = useTranslations("about");

  const stats = [
    { icon: Package, value: "5,000+", label: t("stats.shipments") },
    { icon: Users, value: "2,000+", label: t("stats.clients") },
    { icon: Globe2, value: "3", label: t("stats.countries") },
    { icon: CalendarDays, value: "5+", label: t("stats.years") },
  ];

  const values = [
    { icon: Sparkles, label: t("values.transparency") },
    { icon: Handshake, label: t("values.commitment") },
    { icon: Lightbulb, label: t("values.innovation") },
    { icon: Lock, label: t("values.trust") },
  ];

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/about.webp"
          alt="Our team and operations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-slate-900">{t("mission.title")}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{t("mission.description")}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-slate-900">{t("vision.title")}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{t("vision.description")}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ParallaxSection className="py-20 lg:py-28 bg-slate-50" speed={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{t("values.title")}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-7 border border-slate-200 text-center hover:border-teal-200 hover:shadow-md transition-all">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <p className="font-semibold text-slate-700">{value.label}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <Icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

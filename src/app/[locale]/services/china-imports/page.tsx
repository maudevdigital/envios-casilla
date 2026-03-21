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
  Plane,
  Clock,
  DollarSign,
  Package,
  ClipboardCheck,
  Truck,
  HelpCircle,
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

  const processSteps = [
    { icon: Search, key: "p1" },
    { icon: ClipboardCheck, key: "p2" },
    { icon: ShieldCheck, key: "p3" },
    { icon: Ship, key: "p4" },
    { icon: FileCheck, key: "p5" },
    { icon: Truck, key: "p6" },
  ];

  const faqs = ["faq1", "faq2", "faq3", "faq4"];

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/china-imports.webp"
          alt="China imports logistics"
          fill
          priority
          sizes="100vw"
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

      {/* Intro + benefits */}
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

      {/* Air vs Sea comparison */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{t("comparison.title")}</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{t("comparison.subtitle")}</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Air */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-teal-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6">
                  <Plane className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t("comparison.air.title")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{t("comparison.time")}</div>
                      <div className="text-sm text-slate-500">{t("comparison.air.time")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{t("comparison.cost")}</div>
                      <div className="text-sm text-slate-500">{t("comparison.air.cost")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{t("comparison.ideal")}</div>
                      <div className="text-sm text-slate-500">{t("comparison.air.ideal")}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sea */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-teal-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6">
                  <Ship className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t("comparison.sea.title")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{t("comparison.time")}</div>
                      <div className="text-sm text-slate-500">{t("comparison.sea.time")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{t("comparison.cost")}</div>
                      <div className="text-sm text-slate-500">{t("comparison.sea.cost")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{t("comparison.ideal")}</div>
                      <div className="text-sm text-slate-500">{t("comparison.sea.ideal")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process step by step */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">{t("process.title")}</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{t("process.subtitle")}</p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.key} delay={index * 0.1}>
                  <div className="flex items-start gap-5 mb-8 last:mb-0">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="pt-1 flex-1">
                      <div className="text-xs font-bold text-teal-600 mb-1">0{index + 1}</div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">
                        {t(`process.${step.key}.title`)}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {t(`process.${step.key}.description`)}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
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

      {/* Key questions */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{t("keyFaq.title")}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {faqs.map((key, index) => (
              <AnimatedSection key={key} delay={index * 0.08}>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">{t(`keyFaq.${key}.question`)}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{t(`keyFaq.${key}.answer`)}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

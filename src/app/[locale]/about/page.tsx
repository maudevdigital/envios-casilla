"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
  ArrowRight,
  MapPin,
  Plane,
  Ship,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const t = useTranslations("about");

  const stats = [
    { icon: Package, value: "5,000+", label: t("stats.shipments") },
    { icon: Users, value: "2,000+", label: t("stats.clients") },
    { icon: Globe2, value: "3", label: t("stats.countries") },
    { icon: CalendarDays, value: "5+", label: t("stats.years") },
  ];

  const values = [
    { icon: Sparkles, label: t("values.transparency"), desc: t("values.transparencyDesc") },
    { icon: Handshake, label: t("values.commitment"), desc: t("values.commitmentDesc") },
    { icon: Lightbulb, label: t("values.innovation"), desc: t("values.innovationDesc") },
    { icon: Lock, label: t("values.trust"), desc: t("values.trustDesc") },
  ];

  const timeline = [
    { icon: MapPin, ...getTimeline("step1") },
    { icon: Plane, ...getTimeline("step2") },
    { icon: Ship, ...getTimeline("step3") },
    { icon: Globe2, ...getTimeline("step4") },
  ];

  function getTimeline(key: string) {
    return {
      title: t(`timeline.${key}.title`),
      description: t(`timeline.${key}.description`),
    };
  }

  return (
    <>
      {/* Hero */}
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

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 lg:py-14">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <Icon className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">{t("storyLabel")}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                {t("storyTitle")}
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                {t("storyP1")}
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {t("storyP2")}
              </p>
              <div className="mt-8 space-y-3">
                {[t("storyCheck1"), t("storyCheck2"), t("storyCheck3")].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[450px]">
                <Image
                  src="/about.webp"
                  alt="Our warehouse operations"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{t("mission.title")}</h2>
                <p className="text-slate-600 leading-relaxed">{t("mission.description")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{t("vision.title")}</h2>
                <p className="text-slate-600 leading-relaxed">{t("vision.description")}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline: our process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{t("timeline.title")}</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{t("timeline.subtitle")}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-teal-300 to-transparent" />
                    )}
                    <div className="text-xs font-bold text-teal-600 mb-2">0{index + 1}</div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
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
                  <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-teal-200 hover:shadow-md transition-all h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{value.label}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </ParallaxSection>

      <CTASection />
    </>
  );
}

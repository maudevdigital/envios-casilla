"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Package,
  Ship,
  ShoppingBag,
  ArrowRight,
  MessageSquare,
  Camera,
  Shield,
  Headphones,
  FileCheck,
  DollarSign,
  MapPin,
  Truck,
  ClipboardCheck,
  Home,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  const t = useTranslations();

  const services = [
    {
      icon: Package,
      title: t("services.usa.title"),
      description: t("services.usa.description"),
      features: [
        t("services.usa.features.0"),
        t("services.usa.features.1"),
        t("services.usa.features.2"),
        t("services.usa.features.3"),
      ],
      href: "/services/usa-shipping",
    },
    {
      icon: Ship,
      title: t("services.china.title"),
      description: t("services.china.description"),
      features: [
        t("services.china.features.0"),
        t("services.china.features.1"),
        t("services.china.features.2"),
        t("services.china.features.3"),
      ],
      href: "/services/china-imports",
    },
    {
      icon: ShoppingBag,
      title: t("services.personal.title"),
      description: t("services.personal.description"),
      features: [
        t("services.personal.features.0"),
        t("services.personal.features.1"),
        t("services.personal.features.2"),
        t("services.personal.features.3"),
      ],
      href: "/services/personal-shopping",
    },
  ];

  const steps = [
    { icon: MessageSquare, ...getStep("quote") },
    { icon: Truck, ...getStep("purchase") },
    { icon: ClipboardCheck, ...getStep("process") },
    { icon: Home, ...getStep("delivery") },
  ];

  function getStep(key: string) {
    return {
      title: t(`howItWorks.steps.${key}.title`),
      description: t(`howItWorks.steps.${key}.description`),
    };
  }

  const trustItems = [
    { icon: Shield, key: "experience" },
    { icon: MapPin, key: "tracking" },
    { icon: DollarSign, key: "pricing" },
    { icon: Headphones, key: "support" },
    { icon: FileCheck, key: "customs" },
    { icon: Camera, key: "photos" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/hero-1.webp"
          alt="International shipping logistics"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        {/* Glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-[15%] w-80 h-80 bg-teal-500/15 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[60%] left-[50%] w-64 h-64 bg-emerald-500/8 rounded-full blur-[80px]"
            animate={{ x: [-20, 20, -20], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Animated scan line */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-8 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm text-teal-300 font-medium tracking-wide">USA + China &rarr; Chile & Paraguay</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight">
                  {t("hero.title")}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="mt-6 text-lg text-slate-300/90 leading-relaxed max-w-xl">
                  {t("hero.subtitle")}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                  >
                    <Calculator className="w-5 h-5" />
                    {t("hero.cta")}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/services/usa-shipping"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-slate-200 font-semibold rounded-xl hover:bg-white/5 hover:border-white/25 transition-all backdrop-blur-sm"
                  >
                    {t("hero.ctaSecondary")}
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="mt-14 flex items-center gap-10">
                  <div>
                    <div className="text-3xl font-extrabold text-white">5K+</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{t("about.stats.shipments")}</div>
                  </div>
                  <div className="w-px h-10 bg-slate-700" />
                  <div>
                    <div className="text-3xl font-extrabold text-white">2K+</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{t("about.stats.clients")}</div>
                  </div>
                  <div className="w-px h-10 bg-slate-700" />
                  <div>
                    <div className="text-3xl font-extrabold text-white">3</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{t("about.stats.countries")}</div>
                  </div>
                </div>
              </AnimatedSection>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              {t("services.title")}
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                href={service.href}
                cta={t("services.learnMore")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <ParallaxSection className="py-24 lg:py-32 bg-white" speed={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              {t("howItWorks.title")}
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              {t("howItWorks.subtitle")}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-teal-300 to-transparent" />
                    )}

                    <div className="text-xs font-bold text-teal-600 mb-2">
                      0{index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </ParallaxSection>

      {/* Quote CTA with image */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[500px]">
            <Image
              src="/quote-cta.webp"
              alt={t("quoteCta.imageAlt")}
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-slate-900 px-8 sm:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
                <Calculator className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-300 font-medium">{t("quoteCta.badge")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                {t("quoteCta.title")}
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed max-w-lg">
                {t("quoteCta.description")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/25"
                >
                  <Calculator className="w-5 h-5" />
                  {t("quoteCta.cta")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-teal-400">{t("quoteCta.feat1Value")}</div>
                  <div className="text-xs text-slate-400 mt-1">{t("quoteCta.feat1")}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-400">{t("quoteCta.feat2Value")}</div>
                  <div className="text-xs text-slate-400 mt-1">{t("quoteCta.feat2")}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-400">{t("quoteCta.feat3Value")}</div>
                  <div className="text-xs text-slate-400 mt-1">{t("quoteCta.feat3")}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Us */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              {t("trust.title")}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.key} delay={index * 0.08}>
                  <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-teal-200 hover:shadow-md transition-all duration-300">
                    <Icon className="w-8 h-8 text-teal-600 mb-4" />
                    <h3 className="text-base font-bold text-slate-800 mb-2">
                      {t(`trust.items.${item.key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {t(`trust.items.${item.key}.description`)}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

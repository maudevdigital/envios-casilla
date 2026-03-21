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
} from "lucide-react";
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/hero-1.webp"
          alt="International shipping logistics"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-sm text-teal-300 font-medium">USA + China &rarr; Chile & Paraguay</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                {t("hero.title")}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                {t("hero.subtitle")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg shadow-teal-500/20"
                >
                  {t("hero.cta")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/usa-shipping"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-slate-200 font-semibold rounded-xl hover:bg-white/5 hover:border-slate-500 transition-all"
                >
                  {t("hero.ctaSecondary")}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mt-14 grid grid-cols-3 gap-8 max-w-md">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">5K+</div>
                  <div className="text-sm text-slate-400 mt-1">{t("about.stats.shipments")}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">2K+</div>
                  <div className="text-sm text-slate-400 mt-1">{t("about.stats.clients")}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">3</div>
                  <div className="text-sm text-slate-400 mt-1">{t("about.stats.countries")}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
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

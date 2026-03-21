"use client";

import { useTranslations } from "next-intl";
import { Package, Ship, ShoppingBag } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPage() {
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

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {t("services.title")}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl">
              {t("services.subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </>
  );
}

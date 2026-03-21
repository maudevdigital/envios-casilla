"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  CreditCard,
  Store,
  ScanSearch,
  Lightbulb,
  PackageCheck,
  ThumbsUp,
  MessageSquare,
  Calculator,
  ShoppingCart,
  Truck,
  Ban,
  Globe,
  BadgeDollarSign,
  FileWarning,
  Smartphone,
  Shirt,
  Sparkles,
  Car,
  Baby,
  Dumbbell,
  Wrench,
  Home,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import CTASection from "@/components/CTASection";

export default function PersonalShoppingPage() {
  const t = useTranslations("personalPage");

  const benefits = [
    { icon: CreditCard, key: "noCard" },
    { icon: Store, key: "anyStore" },
    { icon: ScanSearch, key: "verification" },
    { icon: Lightbulb, key: "advice" },
    { icon: PackageCheck, key: "allInOne" },
    { icon: ThumbsUp, key: "guarantee" },
  ];

  const processSteps = [
    { icon: MessageSquare, key: "s1" },
    { icon: Calculator, key: "s2" },
    { icon: ShoppingCart, key: "s3" },
    { icon: Truck, key: "s4" },
  ];

  const stores = [
    { name: "Amazon", color: "bg-orange-50 border-orange-200 text-orange-700" },
    { name: "eBay", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { name: "Walmart", color: "bg-sky-50 border-sky-200 text-sky-700" },
    { name: "Best Buy", color: "bg-indigo-50 border-indigo-200 text-indigo-700" },
    { name: "Alibaba", color: "bg-amber-50 border-amber-200 text-amber-700" },
    { name: "AliExpress", color: "bg-red-50 border-red-200 text-red-700" },
  ];

  const categoryIcons = [Smartphone, Shirt, Sparkles, Car, Baby, Dumbbell, Wrench, Home];

  const barriers = [
    { icon: CreditCard, key: "b1" },
    { icon: Globe, key: "b2" },
    { icon: BadgeDollarSign, key: "b3" },
    { icon: FileWarning, key: "b4" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/personal-shopping.webp"
          alt="Personal shopping service"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <span className="text-sm text-teal-300 font-medium">USA & China &rarr; Chile & Paraguay</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {t("title")}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl">{t("subtitle")}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro + Benefits */}
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

      {/* Process steps */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">{t("process.title")}</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{t("process.subtitle")}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.key} delay={index * 0.1}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-teal-300 to-transparent" />
                    )}
                    <div className="text-xs font-bold text-teal-600 mb-2">0{index + 1}</div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      {t(`process.${step.key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {t(`process.${step.key}.description`)}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stores */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{t("stores.title")}</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{t("stores.subtitle")}</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {stores.map((store) => (
                <div
                  key={store.name}
                  className={`px-6 py-4 rounded-xl border font-semibold text-base ${store.color} transition-all hover:shadow-md`}
                >
                  {store.name}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-slate-400 mt-6">+ {t("benefits.anyStore.title").toLowerCase()}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Popular categories */}
      <ParallaxSection className="py-20 lg:py-28 bg-slate-50" speed={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{t("categories.title")}</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{t("categories.subtitle")}</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categoryIcons.map((Icon, index) => (
              <AnimatedSection key={index} delay={index * 0.06}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-200 transition-all">
                  <Icon className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">
                    {t(`categories.items.${index}`)}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Barriers section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-4">
              <Ban className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-600 font-medium">{t("barriers.title")}</span>
            </div>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("barriers.subtitle")}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {barriers.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.key} delay={index * 0.08}>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1">{t(`barriers.${item.key}.title`)}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{t(`barriers.${item.key}.description`)}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

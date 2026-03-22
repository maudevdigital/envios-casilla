"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Package, Ship, ShoppingBag, FileCheck, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-teal-200 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-slate-800 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5">
              <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const categoryConfig = [
  { key: "usa", icon: Package, keys: ["q1", "q2", "q3", "q4"] },
  { key: "china", icon: Ship, keys: ["q5", "q6", "q7", "q8"] },
  { key: "personal", icon: ShoppingBag, keys: ["q9", "q10", "q11"] },
  { key: "customs", icon: FileCheck, keys: ["q12", "q13", "q14", "q15", "q16"] },
  { key: "general", icon: HelpCircle, keys: ["q17", "q18", "q19", "q20"] },
];

export default function FAQPage() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<string | null>("q1");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? categoryConfig.filter((c) => c.key === activeCategory)
    : categoryConfig;

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
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === null
                  ? "bg-teal-50 text-teal-700 border border-teal-200"
                  : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              Todos
            </button>
            {categoryConfig.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(activeCategory === cat.key ? null : cat.key)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat.key
                      ? "bg-teal-50 text-teal-700 border border-teal-200"
                      : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {t(`categories.${cat.key}`)}
                </button>
              );
            })}
          </div>

          {/* FAQ items grouped by category */}
          <div className="space-y-10">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.key}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-800">{t(`categories.${cat.key}`)}</h2>
                  </div>
                  <div className="space-y-3">
                    {cat.keys.map((key, index) => (
                      <AnimatedSection key={key} delay={index * 0.05}>
                        <FAQItem
                          question={t(`items.${key}.question`)}
                          answer={t(`items.${key}.answer`)}
                          isOpen={openIndex === key}
                          onToggle={() => setOpenIndex(openIndex === key ? null : key)}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

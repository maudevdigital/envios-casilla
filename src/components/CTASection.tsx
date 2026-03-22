"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppSelector from "@/components/WhatsAppSelector";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-teal-900 to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppSelector
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.654-.5-5.207-1.408l-.375-.222-3.862 1.01 1.032-3.768-.244-.388A9.716 9.716 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
              </svg>
              {t("whatsapp")}
            </WhatsAppSelector>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-500 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              {t("email")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

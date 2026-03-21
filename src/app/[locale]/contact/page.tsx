"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppSelector from "@/components/WhatsAppSelector";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/contact.webp"
          alt="Contact our team"
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t("form.name")}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t("form.email")}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t("form.phone")}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t("form.country")}
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="chile">{t("form.chile")}</option>
                        <option value="paraguay">{t("form.paraguay")}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t("form.service")}
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">{t("form.selectService")}</option>
                      <option value="usa">{t("form.usaShipping")}</option>
                      <option value="china">{t("form.chinaImports")}</option>
                      <option value="personal">{t("form.personalShopping")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t("form.message")}
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder={t("form.messagePlaceholder")}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all shadow-sm"
                  >
                    <Send className="w-5 h-5" />
                    {t("form.send")}
                  </button>

                  {submitted && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-sm text-green-700">{t("form.success")}</p>
                    </div>
                  )}
                </form>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-8">
                  <h3 className="text-lg font-bold text-slate-900">{t("info.title")}</h3>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-lg">🇨🇱</div>
                      <h4 className="font-semibold text-slate-800">{t("info.chile.title")}</h4>
                    </div>
                    <div className="space-y-2 ml-7">
                      <a href="tel:+56928423774" className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 transition-colors">
                        <Phone className="w-4 h-4" />
                        {t("info.chile.phone")}
                      </a>
                      <a href="mailto:contacto@envios-casilla.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 transition-colors">
                        <Mail className="w-4 h-4" />
                        {t("info.chile.email")}
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-lg">🇵🇾</div>
                      <h4 className="font-semibold text-slate-800">{t("info.paraguay.title")}</h4>
                    </div>
                    <div className="space-y-2 ml-7">
                      <a href="tel:+595992110955" className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 transition-colors">
                        <Phone className="w-4 h-4" />
                        {t("info.paraguay.phone")}
                      </a>
                      <a href="mailto:contacto@envios-casilla.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 transition-colors">
                        <Mail className="w-4 h-4" />
                        {t("info.paraguay.email")}
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-teal-600" />
                      <h4 className="font-semibold text-slate-800">{t("info.hours.title")}</h4>
                    </div>
                    <div className="space-y-1 ml-7">
                      <p className="text-sm text-slate-600">{t("info.hours.weekdays")}</p>
                      <p className="text-sm text-slate-600">{t("info.hours.saturday")}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-teal-600" />
                      <h4 className="font-semibold text-slate-800">{t("info.warehouse.title")}</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-7">{t("info.warehouse.address")}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <WhatsAppSelector
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all cursor-pointer"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.654-.5-5.207-1.408l-.375-.222-3.862 1.01 1.032-3.768-.244-.388A9.716 9.716 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
                      </svg>
                      WhatsApp
                    </WhatsAppSelector>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

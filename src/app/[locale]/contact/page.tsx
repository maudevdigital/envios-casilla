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
  User,
  Globe2,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppSelector from "@/components/WhatsAppSelector";

const PHONE_CONFIG = {
  chile: { code: "+56", placeholder: "9 1234 5678", maxLength: 11, flag: "🇨🇱" },
  paraguay: { code: "+595", placeholder: "981 123 456", maxLength: 11, flag: "🇵🇾" },
};

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState<"chile" | "paraguay">("chile");
  const [phone, setPhone] = useState("");

  const phoneConfig = PHONE_CONFIG[country];

  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= phoneConfig.maxLength) {
      setPhone(digits);
    }
  };

  const formatPhone = (digits: string) => {
    if (country === "chile") {
      // Format: 9 1234 5678
      if (digits.length <= 1) return digits;
      if (digits.length <= 5) return `${digits[0]} ${digits.slice(1)}`;
      return `${digits[0]} ${digits.slice(1, 5)} ${digits.slice(5)}`;
    }
    // Paraguay format: 981 123 456
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClasses = "w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder:text-slate-400";

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/contact.webp"
          alt="Contact our team"
          fill
          priority
          sizes="100vw"
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

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                          <User className="w-4 h-4 text-teal-600" />
                          {t("form.name")}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Juan Pérez"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                          <Mail className="w-4 h-4 text-teal-600" />
                          {t("form.email")}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="correo@ejemplo.com"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    {/* Country + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                          <Globe2 className="w-4 h-4 text-teal-600" />
                          {t("form.country")}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => { setCountry("chile"); setPhone(""); }}
                            className={`flex items-center justify-center gap-2 px-3 py-3.5 rounded-xl border-2 transition-all text-sm font-medium ${
                              country === "chile"
                                ? "border-teal-500 bg-teal-50 text-teal-700"
                                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <span className="text-lg">🇨🇱</span>
                            Chile
                          </button>
                          <button
                            type="button"
                            onClick={() => { setCountry("paraguay"); setPhone(""); }}
                            className={`flex items-center justify-center gap-2 px-3 py-3.5 rounded-xl border-2 transition-all text-sm font-medium ${
                              country === "paraguay"
                                ? "border-teal-500 bg-teal-50 text-teal-700"
                                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <span className="text-lg">🇵🇾</span>
                            Paraguay
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                          <Phone className="w-4 h-4 text-teal-600" />
                          {t("form.phone")}
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium text-sm flex items-center gap-1.5">
                            <span>{phoneConfig.flag}</span>
                            <span>{phoneConfig.code}</span>
                          </span>
                          <input
                            type="tel"
                            inputMode="numeric"
                            value={formatPhone(phone)}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder={phoneConfig.placeholder}
                            className={`${inputClasses} ${country === "chile" ? "pl-22" : "pl-24"}`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                        <Briefcase className="w-4 h-4 text-teal-600" />
                        {t("form.service")}
                      </label>
                      <select
                        required
                        className={`${inputClasses} bg-white`}
                      >
                        <option value="">{t("form.selectService")}</option>
                        <option value="usa">{t("form.usaShipping")}</option>
                        <option value="china">{t("form.chinaImports")}</option>
                        <option value="personal">{t("form.personalShopping")}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                        <MessageSquare className="w-4 h-4 text-teal-600" />
                        {t("form.message")}
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder={t("form.messagePlaceholder")}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all shadow-sm"
                    >
                      <Send className="w-5 h-5" />
                      {t("form.send")}
                    </button>

                    <AnimatePresence>
                      {submitted && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                          <p className="text-sm text-green-700">{t("form.success")}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <div className="space-y-6 sticky top-28">
                  {/* Contact Cards */}
                  {[
                    {
                      flag: "🇨🇱",
                      title: t("info.chile.title"),
                      phone: t("info.chile.phone"),
                      phoneHref: "tel:+56928423774",
                      email: t("info.chile.email"),
                    },
                    {
                      flag: "🇵🇾",
                      title: t("info.paraguay.title"),
                      phone: t("info.paraguay.phone"),
                      phoneHref: "tel:+595992110955",
                      email: t("info.paraguay.email"),
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{item.flag}</span>
                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                      </div>
                      <div className="space-y-3">
                        <a href={item.phoneHref} className="flex items-center gap-3 text-sm text-slate-600 hover:text-teal-600 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                            <Phone className="w-4 h-4 text-teal-600" />
                          </div>
                          {item.phone}
                        </a>
                        <a href="mailto:contacto@envios-casilla.com" className="flex items-center gap-3 text-sm text-slate-600 hover:text-teal-600 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-teal-600" />
                          </div>
                          {item.email}
                        </a>
                      </div>
                    </div>
                  ))}

                  {/* Hours + Location */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                            <Clock className="w-4 h-4 text-teal-600" />
                          </div>
                          <h4 className="font-bold text-slate-800 text-sm">{t("info.hours.title")}</h4>
                        </div>
                        <div className="ml-11 space-y-1">
                          <p className="text-sm text-slate-600">{t("info.hours.weekdays")}</p>
                          <p className="text-sm text-slate-600">{t("info.hours.saturday")}</p>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 pt-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 text-teal-600" />
                          </div>
                          <h4 className="font-bold text-slate-800 text-sm">{t("info.warehouse.title")}</h4>
                        </div>
                        <p className="text-sm text-slate-600 ml-11">{t("info.warehouse.address")}</p>
                      </div>
                    </div>
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

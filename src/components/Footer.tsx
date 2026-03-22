"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <span className="text-lg font-bold text-white">
                Envios<span className="text-teal-400">Casilla</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {t("description")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("services")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/usa-shipping" className="text-sm hover:text-teal-400 transition-colors">
                  {nav("usaShipping")}
                </Link>
              </li>
              <li>
                <Link href="/services/china-imports" className="text-sm hover:text-teal-400 transition-colors">
                  {nav("chinaImports")}
                </Link>
              </li>
              <li>
                <Link href="/services/personal-shopping" className="text-sm hover:text-teal-400 transition-colors">
                  {nav("personalShopping")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("company")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-teal-400 transition-colors">
                  {nav("about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-teal-400 transition-colors">
                  {nav("contact")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-teal-400 transition-colors">
                  {nav("faq")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {contact("info.title")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <div className="text-sm">
                  <div className="text-slate-400">Chile</div>
                  <a href="tel:+56928423774" className="hover:text-teal-400 transition-colors">
                    +56 9 2842 3774
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <div className="text-sm">
                  <div className="text-slate-400">Paraguay</div>
                  <a href="tel:+595992110955" className="hover:text-teal-400 transition-colors">
                    +595 992 110 955
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <a href="mailto:contacto@envios-casilla.com" className="text-sm hover:text-teal-400 transition-colors">
                  contacto@envios-casilla.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <span className="text-sm">Miami, FL, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners & Payment */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: t("paymentMethods"), items: ["Webpay", "RedCompra", "Servipag"] },
              { label: t("localPartners"), items: ["Starken", "Chilexpress", "Blue Express"] },
              { label: t("internationalPartners"), items: ["UPS", "FedEx", "DHL"] },
            ].map((group) => (
              <div key={group.label} className="text-center">
                <h5 className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-4">
                  {group.label}
                </h5>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {group.items.map((name) => (
                    <div
                      key={name}
                      className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs font-semibold text-slate-300 tracking-wide"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} EnviosCasilla. {t("rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

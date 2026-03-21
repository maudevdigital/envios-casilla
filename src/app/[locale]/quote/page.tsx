"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import {
  Calculator,
  Package,
  Scale,
  Ruler,
  DollarSign,
  Plane,
  Ship,
  RefreshCw,
  Info,
  ArrowRight,
  Truck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";

interface ExchangeRates {
  CLP: number;
  PYG: number;
}

const RATE_PER_KG_AIR = 12.5;
const RATE_PER_KG_SEA = 5.5;
const CUSTOMS_RATE_CL = 0.06;
const IVA_CL = 0.19;
const CUSTOMS_RATE_PY = 0.06;
const IVA_PY = 0.10;

export default function QuotePage() {
  const t = useTranslations("quote");

  const [country, setCountry] = useState<"chile" | "paraguay">("chile");
  const [shippingMode, setShippingMode] = useState<"air" | "sea">("air");
  const [productValue, setProductValue] = useState("");
  const [shippingToMiami, setShippingToMiami] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lb">("kg");
  const [dimUnit, setDimUnit] = useState<"cm" | "in">("cm");
  const [rates, setRates] = useState<ExchangeRates>({ CLP: 950, PYG: 7700 });
  const [loadingRate, setLoadingRate] = useState(true);

  useEffect(() => {
    fetch("/api/exchange-rate")
      .then((r) => r.json())
      .then((data) => {
        setRates({ CLP: data.rate || 950, PYG: data.PYG || 7700 });
        setLoadingRate(false);
      })
      .catch(() => setLoadingRate(false));
  }, []);

  const calculate = useCallback(() => {
    const val = parseFloat(productValue) || 0;
    const domesticShipping = parseFloat(shippingToMiami) || 0;
    let w = parseFloat(weight) || 0;
    const h = parseFloat(height) || 0;
    const wd = parseFloat(width) || 0;
    const l = parseFloat(length) || 0;

    if (weightUnit === "lb") w = w * 0.4536;

    let volWeight: number;
    if (dimUnit === "cm") {
      volWeight = (h * wd * l) / 5000;
    } else {
      volWeight = (h * wd * l) / 305;
    }

    const chargeableWeight = Math.max(w, volWeight);
    const ratePerKg = shippingMode === "air" ? RATE_PER_KG_AIR : RATE_PER_KG_SEA;
    const transportUSD = chargeableWeight * ratePerKg;

    const cifValue = val + domesticShipping + transportUSD;

    let customsDuty: number;
    let iva: number;
    let localRate: number;
    let currency: string;

    if (country === "chile") {
      customsDuty = cifValue * CUSTOMS_RATE_CL;
      iva = (cifValue + customsDuty) * IVA_CL;
      localRate = rates.CLP;
      currency = "CLP";
    } else {
      customsDuty = cifValue * CUSTOMS_RATE_PY;
      iva = (cifValue + customsDuty) * IVA_PY;
      localRate = rates.PYG;
      currency = "PYG";
    }

    const customsTotalUSD = customsDuty + iva;
    const totalUSD = transportUSD + customsTotalUSD;

    return {
      volWeight: volWeight > 0 ? volWeight.toFixed(2) : "0.00",
      chargeableWeight: chargeableWeight > 0 ? chargeableWeight.toFixed(2) : "0.00",
      transportUSD: transportUSD.toFixed(2),
      transportLocal: Math.round(transportUSD * localRate).toLocaleString(),
      customsUSD: customsTotalUSD.toFixed(2),
      customsLocal: Math.round(customsTotalUSD * localRate).toLocaleString(),
      totalUSD: totalUSD.toFixed(2),
      totalLocal: Math.round(totalUSD * localRate).toLocaleString(),
      currency,
      localRate: localRate.toFixed(2),
    };
  }, [productValue, shippingToMiami, weight, height, width, length, weightUnit, dimUnit, shippingMode, country, rates]);

  const result = calculate();

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <Calculator className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300 font-medium">{t("badge")}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {t("title")}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl">{t("subtitle")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Calculator Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
                  {/* Country selector */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      {t("destination")}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setCountry("chile")}
                        className={`flex items-center justify-center gap-3 px-4 py-4 rounded-xl border-2 transition-all font-medium ${
                          country === "chile"
                            ? "border-teal-500 bg-teal-50 text-teal-700 shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="text-2xl">🇨🇱</span>
                        Chile
                      </button>
                      <button
                        type="button"
                        onClick={() => setCountry("paraguay")}
                        className={`flex items-center justify-center gap-3 px-4 py-4 rounded-xl border-2 transition-all font-medium ${
                          country === "paraguay"
                            ? "border-teal-500 bg-teal-50 text-teal-700 shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="text-2xl">🇵🇾</span>
                        Paraguay
                      </button>
                    </div>
                  </div>

                  {/* Shipping mode */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      {t("shippingMode")}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setShippingMode("air")}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                          shippingMode === "air"
                            ? "border-teal-500 bg-teal-50 text-teal-700"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <Plane className="w-4 h-4" />
                        {t("air")}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShippingMode("sea")}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                          shippingMode === "sea"
                            ? "border-teal-500 bg-teal-50 text-teal-700"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <Ship className="w-4 h-4" />
                        {t("sea")}
                      </button>
                    </div>
                  </div>

                  {/* Product value */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                      <DollarSign className="w-4 h-4 text-teal-600" />
                      {t("productValue")}
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">USD</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={productValue}
                        onChange={(e) => setProductValue(e.target.value)}
                        placeholder="0.00"
                        className="w-full pl-14 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Shipping to Miami */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                      <Truck className="w-4 h-4 text-teal-600" />
                      {t("shippingToMiami")}
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">USD</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={shippingToMiami}
                        onChange={(e) => setShippingToMiami(e.target.value)}
                        placeholder="0.00"
                        className="w-full pl-14 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-slate-400">{t("shippingToMiamiHint")}</p>
                  </div>

                  {/* Weight */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                      <Scale className="w-4 h-4 text-teal-600" />
                      {t("weight")}
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="0"
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                      />
                      <select
                        value={weightUnit}
                        onChange={(e) => setWeightUnit(e.target.value as "kg" | "lb")}
                        className="px-4 py-3 rounded-xl border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                      >
                        <option value="kg">Kg</option>
                        <option value="lb">Lb</option>
                      </select>
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                      <Ruler className="w-4 h-4 text-teal-600" />
                      {t("dimensions")}
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      <div>
                        <input
                          type="number"
                          min="0"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          placeholder={t("height")}
                          className="w-full px-3 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                        />
                        <span className="text-xs text-slate-400 mt-1 block text-center">{t("height")}</span>
                      </div>
                      <div>
                        <input
                          type="number"
                          min="0"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          placeholder={t("widthLabel")}
                          className="w-full px-3 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                        />
                        <span className="text-xs text-slate-400 mt-1 block text-center">{t("widthLabel")}</span>
                      </div>
                      <div>
                        <input
                          type="number"
                          min="0"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          placeholder={t("lengthLabel")}
                          className="w-full px-3 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                        />
                        <span className="text-xs text-slate-400 mt-1 block text-center">{t("lengthLabel")}</span>
                      </div>
                      <div>
                        <select
                          value={dimUnit}
                          onChange={(e) => setDimUnit(e.target.value as "cm" | "in")}
                          className="w-full px-3 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                        >
                          <option value="cm">Cm</option>
                          <option value="in">In</option>
                        </select>
                        <span className="text-xs text-slate-400 mt-1 block text-center">{t("unit")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Vol weight info */}
                  <div className="flex items-start gap-2 p-4 bg-teal-50 border border-teal-100 rounded-xl">
                    <Package className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-teal-800">
                      <span className="font-semibold">{t("volWeight")}:</span>{" "}
                      {result.volWeight} kg |{" "}
                      <span className="font-semibold">{t("chargeableWeight")}:</span>{" "}
                      {result.chargeableWeight} kg
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Results Panel - Light theme */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 sticky top-28">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-teal-600" />
                    {country === "chile" ? t("resultChile") : t("resultParaguay")}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                      <span className="text-slate-500 text-sm">{t("transport")}</span>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">USD {result.transportUSD}</div>
                        <div className="text-xs text-slate-400">
                          $ {result.transportLocal} {result.currency}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                      <span className="text-slate-500 text-sm">{t("customsTaxes")}</span>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">USD {result.customsUSD}</div>
                        <div className="text-xs text-slate-400">
                          $ {result.customsLocal} {result.currency}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-4 bg-teal-50 border border-teal-100 rounded-xl px-4 -mx-1">
                      <span className="font-bold text-teal-700">{t("estimatedTotal")}</span>
                      <div className="text-right">
                        <div className="text-xl font-extrabold text-slate-900">
                          USD {result.totalUSD}
                        </div>
                        <div className="text-sm text-teal-600 font-semibold">
                          $ {result.totalLocal} {result.currency}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingRate ? "animate-spin" : ""}`} />
                    {t("exchangeRate")}: 1 USD = ${result.localRate} {result.currency}
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-800 leading-relaxed">
                        {t("disclaimer")}
                      </p>
                    </div>
                  </div>

                  <a
                    href={
                      country === "chile"
                        ? `https://wa.me/56928423774?text=${encodeURIComponent(
                            t("whatsappQuote", {
                              total: result.totalUSD,
                              weight: result.chargeableWeight,
                              mode: shippingMode === "air" ? t("air") : t("sea"),
                            })
                          )}`
                        : `https://wa.me/595992110955?text=${encodeURIComponent(
                            t("whatsappQuote", {
                              total: result.totalUSD,
                              weight: result.chargeableWeight,
                              mode: shippingMode === "air" ? t("air") : t("sea"),
                            })
                          )}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 w-full px-6 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.654-.5-5.207-1.408l-.375-.222-3.862 1.01 1.032-3.768-.244-.388A9.716 9.716 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
                    </svg>
                    {t("requestFinal")}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

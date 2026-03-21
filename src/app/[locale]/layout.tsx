import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  const isSpanish = locale === "es";

  return {
    title: {
      default: isSpanish
        ? "EnviosCasilla - Envios desde USA y China a Chile y Paraguay"
        : "EnviosCasilla - Shipping from USA and China to Chile and Paraguay",
      template: isSpanish
        ? "%s | EnviosCasilla"
        : "%s | EnviosCasilla",
    },
    description: t("subtitle"),
    keywords: isSpanish
      ? [
          "envios desde usa a chile",
          "envios desde usa a paraguay",
          "casilla en miami",
          "importaciones desde china",
          "compras en estados unidos",
          "courier chile",
          "courier paraguay",
          "envios internacionales",
          "casilla postal miami",
          "importar desde china a chile",
          "importar desde china a paraguay",
          "compras personalizadas usa",
        ]
      : [
          "shipping from usa to chile",
          "shipping from usa to paraguay",
          "miami mailbox",
          "china imports",
          "us shopping service",
          "chile courier",
          "paraguay courier",
          "international shipping",
          "miami po box",
          "import from china to chile",
          "personal shopping usa",
        ],
    openGraph: {
      type: "website",
      locale: isSpanish ? "es_CL" : "en_US",
      siteName: "EnviosCasilla",
      title: isSpanish
        ? "EnviosCasilla - Envios desde USA y China a Chile y Paraguay"
        : "EnviosCasilla - Shipping from USA and China to Chile and Paraguay",
      description: t("subtitle"),
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">
        <NextIntlClientProvider>
          <Navbar />
          <main className="flex-1 pt-16 lg:pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

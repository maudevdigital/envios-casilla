import { NextResponse } from "next/server";

let cachedRates: { CLP: number; PYG: number; timestamp: number } | null = null;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
const RATE_MARKUP = 1.025; // 2.5% markup to cover volatility and operational costs

const APIS = [
  {
    url: "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
    parse: (data: Record<string, unknown>) => {
      const usd = data.usd as Record<string, number> | undefined;
      if (usd?.clp && usd?.pyg) {
        return { CLP: Math.round(usd.clp * 100) / 100, PYG: Math.round(usd.pyg * 100) / 100 };
      }
      return null;
    },
  },
  {
    url: "https://open.er-api.com/v6/latest/USD",
    parse: (data: Record<string, unknown>) => {
      const rates = data.rates as Record<string, number> | undefined;
      if (data.result === "success" && rates?.CLP && rates?.PYG) {
        return { CLP: rates.CLP, PYG: rates.PYG };
      }
      return null;
    },
  },
];

export async function GET() {
  if (cachedRates && Date.now() - cachedRates.timestamp < CACHE_DURATION) {
    return NextResponse.json({ CLP: cachedRates.CLP, PYG: cachedRates.PYG });
  }

  for (const api of APIS) {
    try {
      const res = await fetch(api.url, { next: { revalidate: 1800 } });
      const data = await res.json();
      const result = api.parse(data);

      if (result) {
        const adjusted = {
          CLP: Math.round(result.CLP * RATE_MARKUP * 100) / 100,
          PYG: Math.round(result.PYG * RATE_MARKUP * 100) / 100,
        };
        cachedRates = { ...adjusted, timestamp: Date.now() };
        return NextResponse.json(adjusted);
      }
    } catch {
      continue;
    }
  }

  return NextResponse.json({ CLP: 950, PYG: 6663 });
}

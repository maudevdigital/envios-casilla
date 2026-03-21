import { NextResponse } from "next/server";

let cachedRate: { value: number; timestamp: number } | null = null;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export async function GET() {
  if (cachedRate && Date.now() - cachedRate.timestamp < CACHE_DURATION) {
    return NextResponse.json({ rate: cachedRate.value });
  }

  try {
    const res = await fetch(
      "https://open.er-api.com/v6/latest/USD",
      { next: { revalidate: 1800 } }
    );
    const data = await res.json();

    if (data.result === "success" && data.rates?.CLP) {
      cachedRate = { value: data.rates.CLP, timestamp: Date.now() };
      return NextResponse.json({
        rate: data.rates.CLP,
        PYG: data.rates.PYG,
      });
    }

    return NextResponse.json({ rate: 950, PYG: 7700 });
  } catch {
    return NextResponse.json({ rate: 950, PYG: 7700 });
  }
}

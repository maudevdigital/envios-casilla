"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
  cta,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center mb-6 group-hover:from-teal-500/20 group-hover:to-cyan-500/20 transition-colors">
        <Icon className="w-7 h-7 text-teal-600" />
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-5">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 group/link"
      >
        {cta}
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

"use client";

import React from "react";

function parseLine(line: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(line.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-semibold text-slate-700">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push(line.slice(lastIndex));
  }

  return parts;
}

export default function LegalContent({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="text-sm text-slate-600 leading-relaxed space-y-2">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("• ")) {
          return (
            <div key={i} className="flex gap-2 pl-1">
              <span className="text-teal-500 mt-0.5">&#8226;</span>
              <span>{parseLine(trimmed.slice(2))}</span>
            </div>
          );
        }

        return <p key={i}>{parseLine(trimmed)}</p>;
      })}
    </div>
  );
}

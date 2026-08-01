"use client";

import { useState } from "react";
import { clsx } from "clsx";

export type FaqItem = { question: string; reponse: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-100 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-8 sm:py-6"
            >
              <span className="text-sm font-semibold text-slate-900 sm:text-base">
                {item.question}
              </span>
              <span
                className={clsx(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-200 sm:h-8 sm:w-8",
                  open && "rotate-45"
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={clsx(
                "grid overflow-hidden transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0">
                <p className="px-4 pb-4 text-sm leading-relaxed text-slate-600 sm:px-8 sm:pb-6">
                  {item.reponse}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

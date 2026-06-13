import type React from "react";
import { cn } from "@/lib/utils";

type QuoteBlockProps = {
  children: React.ReactNode;
  className?: string;
};


export function QuoteBlock({ children, className }: QuoteBlockProps) {
  return (
    <section
      className={cn(
        // outer light grey container
        "bg-muted p-6 md:p-8",
        className
      )}
      aria-label="Quotation"
    >
      <div className="bg-card">
        <div className=" border-l-2   border-golden pl-6 pr-6 py-6">
          <p className="italic  text-muted-foreground leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}

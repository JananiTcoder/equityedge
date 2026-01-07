"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Company } from "@/types";

interface CompanyCardProps {
  company: Company;
  index?: number;
}

export function CompanyCard({ company, index = 0 }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/company/${company.id}`}>
        <Card
          variant="elevated"
          className="p-5 group cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--color-soft-teal)] flex items-center justify-center flex-shrink-0">
                <Building2 className="h-6 w-6 text-[var(--color-muted-teal)]" />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-[var(--text-body)] font-semibold text-[var(--color-deep-navy)] group-hover:text-[var(--color-muted-teal)] transition-colors">
                    {company.name}
                  </h3>
                  <Badge variant="outline" size="sm">
                    {company.exchange}:{company.ticker}
                  </Badge>
                </div>
                <div className="mt-1 flex items-center gap-3">
                  <Badge variant="blue" size="sm">
                    {company.sector}
                  </Badge>
                  <span className="text-[var(--text-body-xs)] text-[var(--color-cool-gray)]">
                    {company.industry}
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <ArrowRight className="h-5 w-5 text-[var(--color-surface-muted)] group-hover:text-[var(--color-muted-teal)] group-hover:translate-x-1 transition-all" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

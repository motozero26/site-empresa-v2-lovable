import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/components/SEO";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Navegação estrutural" className="py-4 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-primary transition-colors text-xs sm:text-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="inline-flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60 flex-shrink-0" />
              {isLast ? (
                <span className="text-foreground font-medium text-xs sm:text-sm truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="hover:text-primary transition-colors text-xs sm:text-sm truncate max-w-[150px] sm:max-w-none"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

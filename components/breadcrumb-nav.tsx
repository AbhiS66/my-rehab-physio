import { ChevronRight } from "lucide-react"

export function BreadcrumbNav() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 text-sm">
      <ol role="list" className="flex items-center text-muted-foreground">
        <li>
          <a href="#top" className="hover:text-primary transition-colors">
            Home
          </a>
        </li>
        <li aria-hidden="true" className="flex">
          <ChevronRight className="w-4 h-4 mx-2 text-border" />
        </li>
        <li>
          <a href="#top" className="hover:text-primary transition-colors">
            Physiotherapy Clinics
          </a>
        </li>
        <li aria-hidden="true" className="flex">
          <ChevronRight className="w-4 h-4 mx-2 text-border" />
        </li>
        <li aria-current="page" className="text-foreground font-medium">
          Mumbai - Powai, Vile Parle, Chandivali
        </li>
      </ol>
    </nav>
  )
}
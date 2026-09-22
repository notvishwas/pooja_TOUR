import type { PropsWithChildren } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:translate-y-0"
      >
        Skip to main content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

export { SiteShell };

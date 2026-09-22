"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { primaryNavigation, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function isActiveRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 8);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }

      const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements.item(0);
      const lastElement = focusableElements.item(focusableElements.length - 1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/80 bg-white/95 transition-shadow",
        isScrolled && "shadow-[0_8px_24px_-18px_rgb(16_37_64/0.65)]",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-4">
        <BrandLogo />

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNavigation.map((item) => {
              const isActive = isActiveRoute(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
                      isActive &&
                        "text-primary after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5 after:rounded-full after:bg-brand-gold",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            aria-label={`Call ${siteConfig.name} at ${siteConfig.contact.phoneDisplay}`}
            className={buttonVariants({ variant: "ghost", size: "icon-lg" })}
          >
            <Phone aria-hidden="true" />
          </a>
          <Link
            href="/book-now"
            className={buttonVariants({ size: "lg" })}
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label="Open navigation menu"
          onClick={() => setIsMenuOpen(true)}
          className="grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-white text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30 lg:hidden"
        >
          <Menu aria-hidden="true" className="size-5" />
        </button>
      </Container>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute inset-0 bg-brand-navy-dark/45"
          />
          <div
            ref={drawerRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="absolute inset-y-0 right-0 flex w-[min(88vw,24rem)] flex-col overflow-y-auto bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b p-4">
              <p id="mobile-navigation-title" className="font-heading text-lg font-bold text-primary">
                Navigation
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="grid size-11 place-items-center rounded-lg text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 p-4">
              <ul className="space-y-1">
                {primaryNavigation.map((item) => {
                  const isActive = isActiveRoute(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={closeMenu}
                        className={cn(
                          "block rounded-lg px-4 py-3 font-semibold text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
                          isActive && "bg-secondary text-primary",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3 border-t bg-muted/70 p-4">
              <a
                href={siteConfig.contact.phoneHref}
                onClick={closeMenu}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full",
                )}
              >
                <Phone aria-hidden="true" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <Link
                href="/book-now"
                onClick={closeMenu}
                className={cn(buttonVariants({ size: "lg" }), "w-full")}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export { SiteHeader };

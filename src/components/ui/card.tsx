import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "min-w-0 max-w-full rounded-xl border bg-card text-card-foreground shadow-[var(--shadow-card)]",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex min-w-0 flex-col gap-3 p-6 sm:p-8", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      data-slot="card-title"
      className={cn("font-heading font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 pb-6 sm:px-8 sm:pb-8", className)}
      {...props}
    />
  );
}

export { Card, CardContent, CardDescription, CardHeader, CardTitle };

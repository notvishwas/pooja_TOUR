import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
};

function PageHeader({ eyebrow, title, description, icon }: PageHeaderProps) {
  return (
    <header className="border-b bg-secondary/45 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="content-container text-center">
          {icon ? (
            <span className="mx-auto grid size-12 place-items-center rounded-full border border-brand-gold/30 bg-white text-brand-gold-dark shadow-sm">
              {icon}
            </span>
          ) : null}
          <p className="mt-5 text-sm font-bold tracking-[0.16em] text-brand-gold-dark uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </header>
  );
}

export { PageHeader };

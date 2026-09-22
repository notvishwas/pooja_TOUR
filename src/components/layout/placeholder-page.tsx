import { Compass } from "lucide-react";

import { Container } from "@/components/layout/container";

type PlaceholderPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  id?: string;
};

function PlaceholderPage({
  eyebrow = "Coming soon",
  title,
  description,
  id,
}: PlaceholderPageProps) {
  return (
    <main id="main-content" className="flex flex-1 items-center py-section">
      <Container>
        <section id={id} className="content-container text-center" aria-labelledby="page-title">
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-secondary text-primary">
            <Compass aria-hidden="true" className="size-6" />
          </span>
          <p className="mt-5 text-sm font-semibold tracking-[0.16em] text-brand-gold-dark uppercase">
            {eyebrow}
          </p>
          <h1 id="page-title" className="mt-3 text-3xl font-semibold sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            {description}
          </p>
        </section>
      </Container>
    </main>
  );
}

export { PlaceholderPage };

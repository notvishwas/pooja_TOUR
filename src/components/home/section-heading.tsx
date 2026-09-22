import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p
        className={cn(
          "text-xs font-bold tracking-[0.18em] uppercase",
          inverse ? "text-brand-gold-light" : "text-brand-gold-dark",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold sm:text-4xl",
          inverse && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7",
            inverse ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };

import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentPropsWithoutRef<"div">;

function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("site-container", className)} {...props} />;
}

export { Container };

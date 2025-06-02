
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16 px-4", className)}>
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default Section;

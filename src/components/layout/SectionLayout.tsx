import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

const SectionLayout = ({ 
  children, 
  className = "py-20", 
  containerClassName = "container mx-auto px-4",
  id 
}: SectionLayoutProps) => {
  return (
    <section id={id} className={className}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
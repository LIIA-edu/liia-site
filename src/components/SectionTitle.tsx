import React from "react";

interface SectionTitleProps {
  children: string;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-muted-foreground">
      {children.split(" ").map((word, index) => (
        <span key={index} className={index === 1 ? "text-primary" : undefined}>
          {word}{" "}
        </span>
      ))}
    </h2>
  );
};

export default SectionTitle;

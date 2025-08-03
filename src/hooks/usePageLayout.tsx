import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const usePageLayout = () => {
  return {
    wrapWithLayout: (children: ReactNode, className?: string) => ({
      children,
      className
    })
  };
};
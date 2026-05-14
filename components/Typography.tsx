import type { HTMLAttributes, ElementType } from "react";

const tagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  label: "label",
} as const;

type TypographyVariant = keyof typeof tagMap;
type TypographySize = "sm" | "md" | "lg" | "xl" | "2xl";
type TypographyWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type TypographyAlign = "left" | "center" | "right" | "justify";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  size?: TypographySize;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  color?: string;
  className?: string;
  as?: ElementType;
}

const sizeClasses: Record<TypographySize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-2xl",
  "2xl": "text-3xl",
};

const weightClasses: Record<TypographyWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignClasses: Record<TypographyAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export function Typography({
  variant = "p",
  size = "md",
  weight = "normal",
  align = "left",
  color = "text-zinc-900 dark:text-zinc-100",
  className = "",
  as,
  children,
  ...rest
}: TypographyProps) {
  const Tag = (as || tagMap[variant]) as ElementType;
  const classes = [
    sizeClasses[size],
    weightClasses[weight],
    alignClasses[align],
    color,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}

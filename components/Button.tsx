import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "primaryone";
type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type AnchorButtonProps = {
  as: "a";
  href: string;
  target?: string;
  rel?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel">;

type NativeButtonProps = {
  as?: "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = SharedButtonProps & (AnchorButtonProps | NativeButtonProps);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-950 text-white border border-transparent hover:bg-zinc-800 disabled:bg-zinc-400 disabled:text-zinc-100",
  primaryone:
    "bg-orange-400 text-white border border-transparent hover:bg-zinc-800 disabled:bg-zinc-400 disabled:text-zinc-100",
  secondary:
    "bg-white text-zinc-950 border border-zinc-300 hover:bg-zinc-100 disabled:bg-zinc-100 disabled:text-zinc-500",
  ghost:
    "bg-transparent text-zinc-950 border border-transparent hover:bg-zinc-100 disabled:text-zinc-400",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-12 px-6 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:cursor-not-allowed";
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "inline-flex",
    "disabled" in rest && rest.disabled ? "opacity-60" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href) {
    const { href, target, rel, as, ...anchorProps } = rest;
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={rel}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { as, ...buttonProps } = rest as NativeButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

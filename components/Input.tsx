import type { InputHTMLAttributes } from "react";
import { Typography } from "./Typography";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
  className?: string;
}

export function Input({
  label,
  hint,
  error,
  className = "",
  type = "text",
  ...rest
}: InputProps) {
  return (
    <label className="grid gap-2 text-left">
      <Typography as="span" size="sm" weight="medium" className="text-zinc-700 dark:text-zinc-300">
        {label}
      </Typography>
      <input
        type={type}
        className={
          "h-12 rounded-2xl border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-zinc-400 dark:focus:ring-zinc-800 " +
          className
        }
        {...rest}
      />
      {hint ? (
        <Typography as="span" size="sm" weight="normal" className="text-zinc-500 dark:text-zinc-400">
          {hint}
        </Typography>
      ) : null}
      {error ? (
        <Typography as="span" size="sm" weight="normal" className="text-rose-600 dark:text-rose-300">
          {error}
        </Typography>
      ) : null}
    </label>
  );
}

// src/components/QuizToggle.tsx
import { useState, type ReactNode } from "react";

type Props = {
  summary: string;
  children: ReactNode;
};

export default function QuizToggle({ summary, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <details
      open={open}
      onClick={() => setOpen(!open)}
      className="my-4 rounded border border-blue-300 bg-blue-50 dark:bg-neutral-800 p-4"
    >
      <summary className="cursor-pointer text-blue-700 dark:text-blue-300 font-bold">
        {summary}
      </summary>
      <div className="mt-2">{children}</div>
    </details>
  );
}

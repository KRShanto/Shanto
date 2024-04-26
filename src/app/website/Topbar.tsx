"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import Check from "@/../public/check2.svg";

export default function Topbar({
  step,
  setStep,
  completed,
}: {
  step: number;
  setStep: (step: number) => void;
  completed: number[];
}) {
  return (
    <div className="flex gap-2">
      <div
        className={cn(
          "flex w-1/4 cursor-pointer items-center justify-center gap-5 border-b border-slate-700 p-2 text-center text-xl text-gray-400 hover:rounded-lg hover:border",
          { "border-slate-500": step === 1 },
          { "text-gray-300": step === 1 || completed.includes(1) },
          { "border-slate-500": step === 1 || completed.includes(1) },
        )}
        onClick={() => setStep(1)}
      >
        {completed.includes(1) ? (
          <Image
            src={Check}
            alt="Check"
            width={20}
            height={20}
            className="inline"
          />
        ) : null}
        Personal Info
      </div>
      <div
        className={cn(
          "flex w-1/4 cursor-pointer items-center justify-center gap-5 border-b border-slate-700 p-2 text-center text-xl text-gray-400 hover:rounded-lg hover:border",
          { "border-slate-500": step === 2 },
          { "text-gray-300": step === 2 || completed.includes(2) },
          { "border-slate-500": step === 2 || completed.includes(2) },
        )}
        onClick={() => setStep(2)}
      >
        {completed.includes(2) ? (
          <Image
            src={Check}
            alt="Check"
            width={20}
            height={20}
            className="inline"
          />
        ) : null}
        Business Info
      </div>
      <div
        className={cn(
          "flex w-1/4 cursor-pointer items-center justify-center gap-5 border-b border-slate-700 p-2 text-center text-xl text-gray-400 hover:rounded-lg hover:border",
          { "border-slate-500": step === 3 },
          { "text-gray-300": step === 3 || completed.includes(3) },
          { "border-slate-500": step === 3 || completed.includes(3) },
        )}
        onClick={() => setStep(3)}
      >
        {completed.includes(3) ? (
          <Image
            src={Check}
            alt="Check"
            width={20}
            height={20}
            className="inline"
          />
        ) : null}
        Website Info
      </div>

      <div
        className={cn(
          "flex w-1/4 cursor-pointer items-center justify-center gap-5 border-b border-slate-700 p-2 text-center text-xl text-gray-400 hover:rounded-lg hover:border",
          { "border-slate-500": step === 4 },
          { "text-gray-300": step === 4 || completed.includes(4) },
          { "border-slate-500": step === 4 || completed.includes(4) },
        )}
        onClick={() => setStep(4)}
      >
        Conclusion
      </div>
    </div>
  );
}

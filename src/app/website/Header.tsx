import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <Link
        href="/"
        className="ml-56 rounded-full border border-slate-700 p-3 px-7 text-xl text-gray-400 transition-all hover:border-slate-500 hover:text-gray-200"
      >
        Go Back
      </Link>
      <h1 className="text-center font-merriweather text-4xl text-gray-300">
        Submit your website requirements
      </h1>
    </div>
  );
}

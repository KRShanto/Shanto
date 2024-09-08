import React from "react";
import MainPage from "./MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit your website requirements",
  description:
    "Submit your website requirements. We will get back to you with a quote.",
};

export default function Page() {
  return <MainPage />;
}

"use client";

import Link from "next/link";
import { useState } from "react";

import Topbar from "./Topbar";
import Header from "./Header";

export default function Page() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    country: "",
    links: [],
  });
  const [businessInfo, setBusinessInfo] = useState({
    name: "",
    email: "",
    about: "",
    role: "",
    description: "",
    links: [],
  });
  const [websiteInfo, setWebsiteInfo] = useState({
    website: "",
    type: "",
    description: "",
    design: "",
    deadline: 500,
    budget: "",
    additionalInfo: "",
  });
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState([0]);

  return (
    <div className="mt-10">
      <Header />

      <div className="mx-auto mt-5 h-[650px] w-[1300px] rounded-lg border border-slate-600 p-3">
        <Topbar step={step} setStep={setStep} completed={completed} />
      </div>
    </div>
  );
}

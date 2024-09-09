"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sendMail } from "@/actions/sendMail";
import PersonalSection from "@/components/website/PersonalSection";
import BusinessSection from "@/components/website/BusinessSection";
import WebsiteSection from "@/components/website/WebsiteSection";
import ConclusionSection from "@/components/website/ConclutionSection";
import SuccessDialog from "@/components/website/SuccessDialog";
import ErrorDialog from "@/components/website/ErrorDialog";

// TODO: Add form validation
// TODO: make this component more readable
export default function MainPage() {
  const [activeSection, setActiveSection] = useState("personal");
  const [successDialog, setSuccessDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    portfolio: "",
    company: "",
    industry: "",
    description: "",
    serviceType: "",
    features: "",
    timeline: "",
    budget: "",
    additionalInfo: "",
  });

  async function handleSubmit() {
    setLoading(true);

    const res = await sendMail(formData);

    if (res.type === "error") {
      setErrorDialog(true);
    } else {
      setSuccessDialog(true);
    }

    setLoading(false);
  }

  const renderSection = () => {
    switch (activeSection) {
      case "personal":
        return (
          <PersonalSection formData={formData} setFormData={setFormData} />
        );
      case "business":
        return (
          <BusinessSection formData={formData} setFormData={setFormData} />
        );
      case "website":
        return <WebsiteSection formData={formData} setFormData={setFormData} />;
      case "conclusion":
        return (
          <ConclusionSection formData={formData} setFormData={setFormData} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-4xl border border-gray-600 bg-transparent text-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-blue-500">
            Submit your website requirements
          </CardTitle>
          <CardDescription className="text-center text-lg text-blue-200">
            Fill out the form below to get started with your website project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeSection}
            onValueChange={setActiveSection}
            className="w-full"
          >
            <TabsList className="mb-8 grid h-14 w-full grid-cols-4 bg-gray-900 px-3">
              {["personal", "business", "website", "conclusion"].map(
                (section) => (
                  <TabsTrigger
                    key={section}
                    value={section}
                    className="border-white text-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </TabsTrigger>
                ),
              )}
            </TabsList>
            <TabsContent value={activeSection}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <form className="space-y-6">
                  {renderSection()}
                  <div className="flex justify-between pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        const sections = [
                          "personal",
                          "business",
                          "website",
                          "conclusion",
                        ];
                        const currentIndex = sections.indexOf(activeSection);

                        if (currentIndex > 0) {
                          setActiveSection(sections[currentIndex - 1]);
                        }
                      }}
                      className="bg-gray-300 text-black hover:bg-gray-400 focus:border focus:bg-gray-400"
                    >
                      Previous
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        const sections = [
                          "personal",
                          "business",
                          "website",
                          "conclusion",
                        ];
                        const currentIndex = sections.indexOf(activeSection);

                        if (currentIndex < sections.length - 1) {
                          setActiveSection(sections[currentIndex + 1]);
                        } else {
                          handleSubmit();
                        }
                      }}
                      className="bg-blue-600 px-10 text-white hover:bg-blue-700 focus:border focus:bg-blue-700"
                    >
                      {activeSection === "conclusion"
                        ? loading
                          ? "Loading..."
                          : "Submit"
                        : "Next"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <SuccessDialog open={successDialog} setOpen={setSuccessDialog} />
      <ErrorDialog open={errorDialog} setOpen={setErrorDialog} />
    </div>
  );
}

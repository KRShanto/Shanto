"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { sendMail } from "@/actions/sendMail";

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
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-white">
                Address
              </Label>
              <Textarea
                id="address"
                placeholder="Enter your address"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-white">
                LinkedIn URL
              </Label>
              <Input
                id="linkedin"
                type="url"
                placeholder="Enter your LinkedIn profile URL"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="portfolio" className="text-white">
                Portfolio URL (if applicable)
              </Label>
              <Input
                id="portfolio"
                type="url"
                placeholder="Enter your portfolio website URL"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.portfolio}
                onChange={(e) =>
                  setFormData({ ...formData, portfolio: e.target.value })
                }
              />
            </div>
          </div>
        );
      case "business":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                Company Name
              </Label>
              <Input
                id="company"
                placeholder="Enter your company name"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-white">
                Industry
              </Label>
              <Input
                id="industry"
                placeholder="Enter your industry"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.industry}
                onChange={(e) =>
                  setFormData({ ...formData, industry: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">
                Business Description
              </Label>
              <Textarea
                id="description"
                placeholder="Describe your business"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
          </div>
        );
      case "website":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="service-type" className="text-white">
                Service Type
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, serviceType: value })
                }
                defaultValue={formData.serviceType}
              >
                <SelectTrigger
                  id="service-type"
                  className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                >
                  <SelectValue placeholder="Select a service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="portfolio">Portfolio Website</SelectItem>
                  <SelectItem value="blog">Blogging Website</SelectItem>
                  <SelectItem value="custom">Custom Website</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="features" className="text-white">
                Desired Features
              </Label>
              <Textarea
                id="features"
                placeholder="List desired features"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.features}
                onChange={(e) =>
                  setFormData({ ...formData, features: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-white">
                Project Timeline
              </Label>
              <Input
                id="timeline"
                placeholder="Enter project timeline"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
              />
            </div>
          </div>
        );
      case "conclusion":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-white">
                Budget (USD)
              </Label>
              <Input
                id="budget"
                type="number"
                placeholder="Enter your budget"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additional-info" className="text-white">
                Additional Information
              </Label>
              <Textarea
                id="additional-info"
                placeholder="Any additional information"
                className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
                value={formData.additionalInfo}
                onChange={(e) =>
                  setFormData({ ...formData, additionalInfo: e.target.value })
                }
              />
            </div>
          </div>
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

      <AlertDialog open={successDialog} onOpenChange={setSuccessDialog}>
        <AlertDialogContent className="border border-gray-600 bg-slate-950">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl text-green-400">
              Your form has successfully submited
            </AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-gray-400">
              Would you like to book a meeting in the calendar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-none bg-slate-800 hover:bg-slate-900 hover:text-white">
              No Thanks
            </AlertDialogCancel>
            <AlertDialogAction className="bg-blue-500 hover:bg-blue-600">
              Yes, Sure
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={errorDialog} onOpenChange={setErrorDialog}>
        <AlertDialogContent className="border border-gray-600 bg-slate-950">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl text-red-500">
              An error occurred while submitting the form
            </AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-gray-400">
              Please try again later or contact support
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-blue-500 hover:bg-blue-600">
              Try Again
            </AlertDialogAction>
            <AlertDialogCancel className="border-none bg-slate-800 hover:bg-slate-900 hover:text-white">
              Contact Support
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

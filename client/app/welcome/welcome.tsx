import { useFormik } from "formik";
import { useState } from "react";
import CustomDropdown from "~/components/customDropdown";
import HTMLPreviewPanal from "~/components/HTMLPreviewPanal";

export function Welcome() {
  const [genratedWebsite, setGenratedWebsite] = useState("");
  const [websiteGenrating, setWebsiteGEnrating] = useState(false);

  interface FormValues {
    orgName: string;
    orgType: string;
    description: string;
    email: string;
    phoneNumber: string;
  }

  const getGenratedWebsite = async (data: FormValues) => {
    setWebsiteGEnrating(true);

    try {
      console.log("called");
      const response = await fetch(
        "http://localhost:3001/genrate_site_ai_gemini",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData) {
        console.log(responseData);
        setGenratedWebsite(responseData.data);
      } else {
        alert("No data returned from the server.");
      }
    } catch (err) {
      console.error("Error generating website:", err);
      alert(
        "An error occurred while generating the website. Please try again."
      );
    } finally {
      setWebsiteGEnrating(false);
    }
  };

  const projectPurposeOptions = [
    "Showcase company portfolio",
    "Generate leads",
    "Provide information",
    "Build brand awareness",
    "Customer support platform",
  ];

  const businessTypeOptinons = [
    "Consulting",
    "IT Services",
    "Non-profit/NGO",
    "Educational institution",
    "Startup",
  ];

  const targetAudienceOptions = [
    "Consumers (B2C)",
    "Businesses (B2B)",
    "Students",
    "Professionals",
    "Local market",
    "Global audience",
  ];

  const designPreferencesOptions = [
    "Minimalistic",
    "Modern",
    "Traditional",
    "Corporate/Professional",
    "Playful/Fun",
  ];

  const requiredFeatures = [
    "Contact forms",
    "Blog/News section",
    "Image gallery",
    "Customer testimonials",
    "Product showcase",
    "Team members",
    "Product reviews",
    "Product pricing",
    "Online store",
  ];
  const formik = useFormik({
    initialValues: {
      orgName: "donal",
      orgType: "it services",
      description:
        "we are providing web development and designing services from past 3 years and have worked with over 12 compnies",
      email: "donal@mail.com  ",
      phoneNumber: "8989897765",

      businessType: "",
      projectPurpose: "",
      targetAudience: "",
      designPreferences: "",
    },
    onSubmit: (values) => {
      getGenratedWebsite(values);
    },
  });

  return (
    <div className="w-full h-full flex justify-space-between">
      <div className=" h-full border border-gray-300 rounded-lg p-5 m-10">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          fill the form
        </h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col m-2">
              <label htmlFor="orgName" className="text-sm m-1 text-gray-600">
                {" "}
                name of organization{" "}
              </label>

              <p className="text-red-500">{formik.errors.orgName}</p>
              <input
                id="orgName"
                name="orgName"
                type="text"
                className="border border-gray-300 rounded-md p-1"
                onChange={formik.handleChange}
                value={formik.values.orgName}
              ></input>
            </div>
            <div className="flex flex-col m-2">
              <CustomDropdown
                label="select the type of organization"
                id="orgType"
                name="orgType"
                options={businessTypeOptinons}
                value={formik.values.orgType}
                onChange={formik.handleChange}
              ></CustomDropdown>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col m-2">
              <label htmlFor="email" className="text-sm m-1 text-gray-600">
                {" "}
                email{" "}
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="border border-gray-300 rounded-md p-1"
                onChange={formik.handleChange}
                value={formik.values.email}
              ></input>
            </div>

            <div className="flex flex-col m-2">
              <label htmlFor="phone" className="text-sm m-1 text-gray-600">
                {" "}
                phone{" "}
              </label>

              <input
                id="phone"
                name="phone"
                type="text"
                className="border border-gray-300 rounded-md p-1"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              ></input>
            </div>
          </div>

          <div className="flex flex-col m-2">
            <label htmlFor="phone" className="text-sm m-1 text-gray-600">
              {" "}
              description{" "}
            </label>
            <textarea
              id="description"
              rows={4}
              name="description"
              className="border border-gray-300 rounded-md p-1"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Answer som basic qustions
          </h1>

          <div className="flex flex-col m-2">
            <CustomDropdown
              label="Select your business type"
              id="projectPurpose"
              name="projectPurpose"
              options={projectPurposeOptions}
              value={formik.values.projectPurpose}
              onChange={formik.handleChange}
            ></CustomDropdown>
          </div>
          <div className="flex flex-col m-2">
            <CustomDropdown
              label="select your target audience"
              id="targetAudience"
              name="targetAudience"
              options={targetAudienceOptions}
              value={formik.values.targetAudience}
              onChange={formik.handleChange}
            ></CustomDropdown>
          </div>

          <div className="flex flex-col m-2">
            <CustomDropdown
              label="What is your design preferences?"
              id="designPreferences"
              name="designPreferences"
              options={designPreferencesOptions}
              value={formik.values.designPreferences}
              onChange={formik.handleChange}
            ></CustomDropdown>
          </div>

          <div className="flex flex-col m-2 justify-center">
            <button
              className="bg-blue-500 rounded-md p-2 border-gray-100"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <HTMLPreviewPanal
        content={genratedWebsite}
        loading={websiteGenrating}
        noPreview={!genratedWebsite}
      ></HTMLPreviewPanal>
    </div>
  );
}

import { useFormik } from "formik";
import HTMLPreviewPanal from "~/components/HTMLPreviewPanal";

export function Welcome() {
  interface FormValues {
    orgName: string;
    orgType: string;
    description: string;
    email: string;
    phoneNumber: string;
  }

  const formik = useFormik({
    initialValues: {
      orgName: "",
      orgType: "",
      description: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
              <label htmlFor="orgType" className="text-sm m-1 text-gray-600">
                {" "}
                type of organization
              </label>
              <input
                id="orgType"
                name="orgType"
                type="text"
                className="border border-gray-300 rounded-md p-1"
                onChange={formik.handleChange}
                value={formik.values.orgType}
              ></input>
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
      <HTMLPreviewPanal></HTMLPreviewPanal>
    </div>
  );
}

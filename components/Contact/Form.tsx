"use client";

import Button from "../common/Button";
import Input from "../common/Input";

export default function Form() {
  const onSubmit = () => {};

  return (
    <form>
      <div className="flex flex-col py-8">
        <Input label="Full Name" placeholder="eg: John Doe" />
        <Input label="Email" type="email" placeholder="eg: johndoe@email.com" />
        <Input label="Phone no." type="number" placeholder="eg: 99999 99999" />
        <div className="mb-6">
          <label className="block font-medium text-gray-900">
            About your project
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block w-full rounded-xl border-0 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="mb-4 flex items-start gap-2">
          <input type="checkbox" className="mt-1" />
          <span className="text-gray-700 text-sm">
            By sending this form I confirm that I have read and accept
            VidyaInterna Hub Privacy Policy
          </span>
        </div>
        <Button buttonType="primaryDarkButton" onClick={onSubmit}>
          Send
        </Button>
      </div>
    </form>
  );
}
